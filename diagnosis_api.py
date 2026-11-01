import io
import os
from typing import Dict, List

import numpy as np
import timm
import torch
from fastapi import FastAPI, File, Form, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image, ImageOps, UnidentifiedImageError
from transformers import AutoImageProcessor, AutoModelForImageClassification


LEAF_MODEL_ID = "ixrbhii/citrus-disease-convnext"
LEAF_MODEL_LICENSE = "CC-BY-4.0"
FRUIT_MODEL_ID = "dima806/orange_fruit_disease_detection"
FRUIT_MODEL_LICENSE = "Apache-2.0"
MAX_IMAGE_BYTES = 10 * 1024 * 1024
IMAGE_SIZE = 224
MEAN = torch.tensor([0.485, 0.456, 0.406]).view(1, 3, 1, 1)
STD = torch.tensor([0.229, 0.224, 0.225]).view(1, 3, 1, 1)

app = FastAPI(title="CitrusCare citrus image diagnosis API", version="1.0.0")
frontend_origins = [
    "http://localhost:5500",
    "http://127.0.0.1:5500",
    "http://localhost:5501",
    "http://127.0.0.1:5501",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=frontend_origins,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

leaf_model = None
fruit_model = None
fruit_processor = None


@app.on_event("startup")
def load_model() -> None:
    global leaf_model, fruit_model, fruit_processor
    leaf_model = timm.create_model("hf-hub:" + LEAF_MODEL_ID, pretrained=True).eval()
    fruit_processor = AutoImageProcessor.from_pretrained(FRUIT_MODEL_ID, use_fast=False)
    fruit_model = AutoModelForImageClassification.from_pretrained(FRUIT_MODEL_ID).eval()


@app.get("/api/health")
def health() -> Dict[str, object]:
    return {
        "model_loaded": leaf_model is not None and fruit_model is not None,
        "models": {
            "leaf": {
                "model_loaded": leaf_model is not None,
                "model_id": LEAF_MODEL_ID,
                "license": LEAF_MODEL_LICENSE,
                "classes": [
                    "Bacterial Blight",
                    "Black Spot",
                    "Canker",
                    "Dry Leaf",
                    "Healthy",
                    "Leaf Curl Virus",
                    "Sooty Mould",
                    "Spider Mites",
                ],
            },
            "fruit": {
                "model_loaded": fruit_model is not None,
                "model_id": FRUIT_MODEL_ID,
                "license": FRUIT_MODEL_LICENSE,
                "supported_species": ["Sweet orange (Citrus sinensis)"],
                "classes": ["citrus canker", "healthy", "melanose"],
            },
        },
    }


@app.post("/api/predict")
async def predict(
    file: UploadFile = File(...),
    photo_type: str = Form(...),
    fruit_species: str = Form(default=""),
) -> Dict[str, object]:
    if photo_type not in {"leaf", "fruit"}:
        raise HTTPException(
            status_code=422, detail="Choose either a citrus leaf or fruit photo."
        )
    if photo_type == "fruit" and fruit_species != "orange":
        raise HTTPException(
            status_code=422,
            detail=(
                "The fruit classifier supports sweet oranges (Citrus sinensis) only. "
                "No diagnosis was made for other citrus fruit."
            ),
        )
    selected_model = leaf_model if photo_type == "leaf" else fruit_model
    if selected_model is None:
        raise HTTPException(
            status_code=503,
            detail=f"The citrus {photo_type} model is still loading. Please try again.",
        )
    if file.content_type not in {"image/jpeg", "image/png", "image/webp"}:
        raise HTTPException(
            status_code=415,
            detail="Choose a JPEG, PNG, or WEBP image.",
        )

    image_bytes = await file.read(MAX_IMAGE_BYTES + 1)
    if len(image_bytes) > MAX_IMAGE_BYTES:
        raise HTTPException(status_code=413, detail="Image must be 10 MB or smaller.")
    try:
        image = Image.open(io.BytesIO(image_bytes))
        image = ImageOps.exif_transpose(image).convert("RGB")
    except (UnidentifiedImageError, OSError) as exc:
        raise HTTPException(status_code=400, detail="The uploaded image could not be read.") from exc

    if photo_type == "leaf":
        image = ImageOps.fit(
            image,
            (IMAGE_SIZE, IMAGE_SIZE),
            method=Image.Resampling.BILINEAR,
            centering=(0.5, 0.5),
        )
        pixels = torch.from_numpy(np.asarray(image, dtype=np.float32))
        tensor = pixels.permute(2, 0, 1).unsqueeze(0) / 255.0
        tensor = (tensor - MEAN) / STD
        with torch.inference_mode():
            logits = leaf_model(tensor)
    else:
        if fruit_processor is None:
            raise HTTPException(status_code=503, detail="The fruit image processor is not ready.")
        tensor = fruit_processor(images=image, return_tensors="pt")
        with torch.inference_mode():
            logits = fruit_model(**tensor).logits

    scores = torch.softmax(logits, dim=1)[0]
    top_scores, top_indices = torch.topk(scores, k=min(3, scores.numel()))
    labels = selected_model.pretrained_cfg["label_names"] if photo_type == "leaf" else [
        fruit_model.config.id2label[index]
        for index in range(fruit_model.config.num_labels)
    ]

    predictions: List[Dict[str, object]] = [
        {
            "label": labels[index],
            "confidence": round(float(score), 4),
        }
        for score, index in zip(top_scores.tolist(), top_indices.tolist())
    ]
    return {
        "predictions": predictions,
        "uncertain": predictions[0]["confidence"] < 0.45,
        "model_id": LEAF_MODEL_ID if photo_type == "leaf" else FRUIT_MODEL_ID,
        "photo_scope": photo_type,
        "fruit_species": fruit_species if photo_type == "fruit" else None,
    }
