# CitrusCare

A bilingual English/Hindi student project for image-based citrus health exploration, with separate locally run citrus-leaf and orange-fruit classifiers.

## Run the website and leaf model

1. Use Python 3.9 or newer. From this folder, install the API dependencies:

   ```sh
   python3 -m venv .venv
   .venv/bin/python -m pip install -r requirements.txt
   ```

2. Start the local diagnosis API. On its first run, it downloads both public classifiers and their preprocessing configuration from Hugging Face (about 450 MB total):

   ```sh
   .venv/bin/python -m uvicorn diagnosis_api:app --host 127.0.0.1 --port 8000
   ```

3. In a second terminal, serve this folder:

   ```sh
   python3 -m http.server 5500 --bind 127.0.0.1
   ```

4. Open `http://127.0.0.1:5500`, choose **Citrus leaf** or **Citrus fruit surface**, then select the fruit type. Only **sweet orange (Citrus sinensis)** is supported by the current fruit model; other citrus choices are blocked from inference. Species selection is self-reported: the classifier does not verify fruit species from the photo. Camera access needs `localhost` and browser permission.

The browser sends the selected image only to the API on this computer. The API accepts JPEG, PNG, and WEBP images up to 10 MB. API/model startup and inference errors are reported in the page.

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
