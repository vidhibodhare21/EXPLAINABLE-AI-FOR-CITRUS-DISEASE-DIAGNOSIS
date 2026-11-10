import gc
import logging
import os
import threading
from typing import Any, Dict, List, Optional
from urllib.parse import urlsplit

from fastapi import FastAPI, File, Form, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware


LEAF_MODEL_ID = "ixrbhii/citrus-disease-convnext"
LEAF_MODEL_LICENSE = "CC-BY-4.0"
FRUIT_MODEL_ID = "dima806/orange_fruit_disease_detection"
FRUIT_MODEL_LICENSE = "Apache-2.0"
MAX_IMAGE_BYTES = 10 * 1024 * 1024
IMAGE_SIZE = 224

logger = logging.getLogger(__name__)
app = FastAPI(title="CitrusCare citrus image diagnosis API", version="1.0.0")
frontend_origins = [
    "http://localhost:5500",
    "http://127.0.0.1:5500",
    "http://localhost:5501",
    "http://127.0.0.1:5501",
]
for environment_variable in ("VERCEL_URL", "VERCEL_PROJECT_PRODUCTION_URL"):
    host = os.getenv(environment_variable, "").strip()
    if host:
        frontend_origins.append(
            host if urlsplit(host).scheme else f"https://{host}"
        )
frontend_origins.extend(
    origin.strip().rstrip("/")
    for origin in os.getenv("CORS_ORIGINS", "").split(",")
    if origin.strip()
)
frontend_origins = list(dict.fromkeys(frontend_origins))
app.add_middleware(
    CORSMiddleware,
    allow_origins=frontend_origins,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

leaf_model: Any = None
fruit_model: Any = None
fruit_processor: Any = None
active_model: Optional[str] = None
torch_module: Any = None
model_lock = threading.Lock()


def _unload_active_model() -> None:
    global active_model, leaf_model, fruit_model, fruit_processor
    active_model = None
    leaf_model = None
    fruit_model = None
    fruit_processor = None
    gc.collect()


def _load_model(photo_type: str) -> Any:
    global active_model, fruit_model, fruit_processor, leaf_model, torch_module

    if active_model == photo_type:
        return leaf_model if photo_type == "leaf" else fruit_model

    _unload_active_model()
    try:
        import torch

        torch_module = torch
        torch.set_num_threads(1)
        if photo_type == "leaf":
            import timm

            leaf_model = timm.create_model(
                "hf-hub:" + LEAF_MODEL_ID, pretrained=True
            ).eval()
            active_model = "leaf"
            return leaf_model

        from transformers import AutoImageProcessor, AutoModelForImageClassification

        fruit_processor = AutoImageProcessor.from_pretrained(
            FRUIT_MODEL_ID, use_fast=False
        )
        fruit_model = AutoModelForImageClassification.from_pretrained(
            FRUIT_MODEL_ID
        ).eval()
        active_model = "fruit"
        return fruit_model
    except Exception as exc:
        _unload_active_model()
        logger.exception("Could not load citrus %s model", photo_type)
        raise HTTPException(
            status_code=503,
            detail=(
                f"The citrus {photo_type} model could not be loaded. "
                "Check the backend logs and try again."
            ),
        ) from exc


def _predict_image(image: Any, photo_type: str, fruit_species: str) -> Dict[str, object]:
    global fruit_processor

    source_image = image
    try:
        with model_lock:
            selected_model = _load_model(photo_type)
            if torch_module is None:
                raise HTTPException(status_code=503, detail="The AI runtime is not ready.")

            torch = torch_module
            if photo_type == "leaf":
                import numpy as np
                from PIL import Image, ImageOps

                resized_image = ImageOps.fit(
                    source_image,
                    (IMAGE_SIZE, IMAGE_SIZE),
                    method=Image.Resampling.BILINEAR,
                    centering=(0.5, 0.5),
                )
                try:
                    pixels = torch.from_numpy(np.asarray(resized_image, dtype=np.float32))
                finally:
                    resized_image.close()
                source_image.close()
                source_image = None

                tensor = pixels.permute(2, 0, 1).unsqueeze(0) / 255.0
                mean = torch.tensor([0.485, 0.456, 0.406]).view(1, 3, 1, 1)
                std = torch.tensor([0.229, 0.224, 0.225]).view(1, 3, 1, 1)
                tensor = (tensor - mean) / std
                del pixels, mean, std
                with torch.inference_mode():
                    logits = selected_model(tensor)
                del tensor
                labels = selected_model.pretrained_cfg["label_names"]
            else:
                if fruit_processor is None:
                    raise HTTPException(
                        status_code=503,
                        detail="The fruit image processor is not ready.",
                    )
                tensor = fruit_processor(images=source_image, return_tensors="pt")
                source_image.close()
                source_image = None
                with torch.inference_mode():
                    logits = selected_model(**tensor).logits
                del tensor
                labels = [
                    selected_model.config.id2label[index]
                    for index in range(selected_model.config.num_labels)
                ]

            scores = torch.softmax(logits, dim=1)[0]
            del logits
            top_scores, top_indices = torch.topk(scores, k=min(3, scores.numel()))
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
    finally:
        if source_image is not None:
            source_image.close()


@app.get("/api/health")
def health() -> Dict[str, object]:
    return {
        "api_ready": True,
        "model_loaded": active_model is not None,
        "active_model": active_model,
        "models": {
            "leaf": {
                "available": True,
                "model_loaded": active_model == "leaf",
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
                "available": True,
                "model_loaded": active_model == "fruit",
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
    from PIL import Image, ImageOps, UnidentifiedImageError

    image = None
    try:
        if file.content_type not in {"image/jpeg", "image/png", "image/webp"}:
            raise HTTPException(
                status_code=415,
                detail="Choose a JPEG, PNG, or WEBP image.",
            )

        file.file.seek(0, os.SEEK_END)
        image_size = file.file.tell()
        file.file.seek(0)
        if image_size > MAX_IMAGE_BYTES:
            raise HTTPException(status_code=413, detail="Image must be 10 MB or smaller.")
        try:
            with Image.open(file.file) as uploaded_image:
                oriented_image = ImageOps.exif_transpose(uploaded_image)
                try:
                    image = oriented_image.convert("RGB")
                finally:
                    if oriented_image is not uploaded_image:
                        oriented_image.close()
        except (UnidentifiedImageError, OSError) as exc:
            raise HTTPException(
                status_code=400, detail="The uploaded image could not be read."
            ) from exc

        prediction_image = image
        image = None
        return _predict_image(prediction_image, photo_type, fruit_species)
    finally:
        if image is not None:
            image.close()
        await file.close()
