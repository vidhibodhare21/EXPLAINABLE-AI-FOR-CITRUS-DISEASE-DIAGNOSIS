# CitrusCare

A bilingual English/Hindi student project for image-based citrus health exploration, with separate citrus-leaf and orange-fruit classifiers that can run locally or behind a hosted API.

## Run the website and diagnosis API

1. Use Python 3.12, matching `pyproject.toml`. From this folder, install the API dependencies:

   ```sh
   python3 -m venv .venv
   .venv/bin/python -m pip install -r requirements.txt
   ```

2. Start the local diagnosis API. It downloads the requested classifier from Hugging Face the first time that image type is diagnosed. Only the currently requested model is kept in memory; changing from leaf to fruit (or back) unloads the previous model:

   ```sh
   .venv/bin/python -m uvicorn diagnosis_api:app --host 127.0.0.1 --port 8000 --workers 1
   ```

3. In a second terminal, serve this folder:

   ```sh
   python3 -m http.server 5500 --bind 127.0.0.1
   ```

4. Open `http://127.0.0.1:5500`, choose **Citrus leaf** or **Citrus fruit surface**, then select the fruit type. Only **sweet orange (Citrus sinensis)** is supported by the current fruit model; other citrus choices are blocked from inference. Species selection is self-reported: the classifier does not verify fruit species from the photo. Camera access needs `localhost` and browser permission.

The browser sends the selected image to the configured diagnosis API. In local development it runs on this computer; in production it may be the Render service. The API accepts JPEG, PNG, and WEBP images up to 10 MB. API/model startup and inference errors are reported in the page.

## Vercel and production deployment

`pyproject.toml` identifies the FastAPI application as `diagnosis_api:app`. In a split Vercel/Render deployment, set `window.CITRUSCARE_API_URL` to the Render API origin before `app.js` loads. Without that override, production uses the website's same origin. For local development, the API URL is `http://127.0.0.1:8000`, matching the Uvicorn command above.

If the frontend and API are deployed to separate origins, set `window.CITRUSCARE_API_URL` to the public API origin in a small runtime configuration script that loads before `app.js`. Also set the backend's `CORS_ORIGINS` environment variable to a comma-separated list of the exact frontend origins, for example `https://citruscare.example,https://citruscare-git-main.example`. Do not include paths or a trailing slash in those origins. The API also allows Vercel's `VERCEL_URL` and `VERCEL_PROJECT_PRODUCTION_URL` origins when those variables are available.

This is a plain static HTML/JavaScript frontend; Vercel does not automatically make arbitrary environment variables available to browser JavaScript. If the frontend and API are separate, the frontend deployment must expose `CITRUSCARE_API_URL` through its build/runtime configuration as `window.CITRUSCARE_API_URL`. Never put private credentials in that public setting.

The Vercel entrypoint setting fixes discovery only; it does not make these models a good fit for Vercel Functions. Vercel's ephemeral filesystem is not a persistent model cache. For the complete AI backend, keep the frontend on Vercel and deploy this API as a persistent Python service on Render.

### Render settings

- **Root Directory:** leave blank (the API and `requirements.txt` are in the repository root).
- **Build Command:** `pip install -r requirements.txt`
- **Start Command:** `uvicorn diagnosis_api:app --host 0.0.0.0 --port $PORT --workers 1`
- Set `CORS_ORIGINS` in Render to the exact Vercel frontend origin, such as `https://your-site.vercel.app`.
- Use Python 3.12, matching `pyproject.toml`.

The API imports PyTorch and each model library only when the corresponding classifier is first requested. It keeps at most one classifier model object active and sets PyTorch CPU threads to one. Model files remain in Hugging Face's on-disk cache, but the model being switched away from is unloaded from the process. One Uvicorn worker is important: multiple workers would each have separate model memory.

These changes lower startup and steady-state memory, but do **not** make a 512 MB Render instance reliable or guaranteed to fit. On this machine, the updated API import was about 36 MiB peak RSS without importing ML frameworks; the previous eager-import API was about 300 MiB. A real leaf-model inference using a generated smoke-test image reached about 567 MiB peak RSS locally, already above a 512 MiB budget. After exercising leaf and fruit sequentially in the same process, the high-water mark was about 882 MiB; this is a cumulative process peak, not evidence that both model objects remained loaded together. Render's actual memory differs by OS, Python and wheel versions, and model loading/deserialization can have a higher peak than inference. CPU float16 and dynamic quantization were not enabled because their compatibility and prediction behavior have not been validated for these specific models. Treat the 512 MB plan as likely insufficient; use a larger-memory instance and measure peak RSS there before selecting the smallest reliable plan. Free-instance filesystem/cache and sleep behavior may also cause repeated model downloads and slow first predictions.

The current source does **not** implement Grad-CAM or any pixel-level explanation. Its “visible clues” are educational text, not explanations generated from the uploaded image. The models are PyTorch/timm and Transformers models; TensorFlow/Keras and OpenCV are not used or required by this project. The fruit classifier is a Vision Transformer, so adding a valid image-grounded explanation would require separate, model-appropriate implementation and testing.

## What the model does—and does not do

- **Leaf model:** [`ixrbhii/citrus-disease-convnext`](https://huggingface.co/ixrbhii/citrus-disease-convnext), a ConvNeXt-Small classifier under **CC-BY-4.0**. Its eight classes are Bacterial Blight, Black Spot, Canker, Dry Leaf, Healthy, Leaf Curl Virus, Sooty Mould, and Spider Mites. Credit **“Multi-crop disease models, IXR (agritechixr)”** and retain training-data attribution when redistributing.
- **Orange-fruit model:** [`dima806/orange_fruit_disease_detection`](https://huggingface.co/dima806/orange_fruit_disease_detection), a ViT classifier under **Apache-2.0**. Sweet orange (*Citrus sinensis*) is itself a citrus fruit; the project lets users select common citrus species but only enables inference for sweet orange. It predicts only citrus canker, healthy, or melanose. Do not assume performance on lemons, limes, mandarins, grapefruit, other citrus species, or field conditions.
- **Downloaded supplemental dataset:** [`data/citrus_fruit_leaf_disease_train.parquet`](./data/citrus_fruit_leaf_disease_train.parquet), from [`Project-AgML/citrus_fruit_leaf_disease_classification`](https://huggingface.co/datasets/Project-AgML/citrus_fruit_leaf_disease_classification), **CC-BY-4.0**. Its 759 images have an explicit `plant_part` field. Inspecting that field gives these fruit-only counts: canker 78, healthy 22, black spot 19, greening 16, scab 15. Melanose (13) occurs in the leaf subset, not the fruit subset. The dataset is highly imbalanced and has no separate validation split; it is not automatically used to retrain the deployed models, and its extra labels must not be presented as image-diagnosed by those models. Cite Rauf et al. (2019), “A Citrus Fruits and Leaves Dataset for Detection and Classification of Citrus Diseases through Machine Learning,” *Data in Brief* 26, 104340, [doi:10.17632/3f83gxmv57.2](https://doi.org/10.17632/3f83gxmv57.2).
- The fruit model card reports 97.94% accuracy on its stated test set; this is a self-reported score, not independently verified here. The leaf model card likewise reports evaluation on held-out photos from its source datasets. Real field performance may be lower. Returned softmax scores are **not calibrated probabilities** or proof of disease.
- The API keeps leaf and fruit model routes separate, shows only the model's best-supported labels, and sends uploaded images to the local API. The “visible clues” section is general disease guidance—not a saliency map or proof of which image pixels the model used.
- Causes, impact, treatment, and prevention are general educational notes, not personalized prescriptions. Confirm disease and treatment with a local agricultural extension officer or plant pathologist. “Dry Leaf,” “Healthy,” “Leaf Curl Virus,” and “Spider Mites” are model pattern labels and are not laboratory-confirmed diagnoses.

## Project information to complete

- Add Vidhi Bodhare's and Shubh Kamle's PRN numbers in the member cards in `index.html`.
- Replace the initials portrait placeholders in the member cards with the project members' photographs.
# EXPLAINABLE-AI-FOR-CITRUS-DISEASE-DIAGNOSIS
# EXPLAINABLE-AI-FOR-CITRUS-DISEASE-DIAGNOSIS
# EXPLAINABLE-AI-FOR-CITRUS-DISEASE-DIAGNOSIS
