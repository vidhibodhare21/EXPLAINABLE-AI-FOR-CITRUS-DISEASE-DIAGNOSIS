import csv
import json
from collections import defaultdict
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parent
DATASET_ROOT = PROJECT_ROOT / "CitrusCare_Dataset"
IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".bmp", ".tif", ".tiff"}

ORANGE_FRUITS = (
    DATASET_ROOT
    / "Orange"
    / "A Citrus Fruits and Leaves Dataset for Detection and Classification of Citrus Diseases through Machine Learning"
    / "Citrus Plant Dataset"
    / "Citrus"
    / "Fruits"
)
LIME_ROOT = DATASET_ROOT / "Lime" / "dataset"
LEMON_DATASET_ROOT = DATASET_ROOT / "Lemon" / "lemon-dataset-master" / "data" / "lemon-dataset"
LEMON_ANNOTATIONS = LEMON_DATASET_ROOT / "annotations" / "instances_default.json"
OUTPUT_CSV = PROJECT_ROOT / "dataset_manifest.csv"


def image_files(directory):
    if not directory.is_dir():
        raise FileNotFoundError(f"Dataset directory not found: {directory}")
    return sorted(
        path
        for path in directory.rglob("*")
        if path.is_file() and path.suffix.lower() in IMAGE_EXTENSIONS
    )


def project_relative(path):
    return path.resolve().relative_to(PROJECT_ROOT).as_posix()


def build_records():
    records = []

    for image_path in image_files(ORANGE_FRUITS):
        category = image_path.parent.name
        records.append(
            {
                "image_path": project_relative(image_path),
                "fruit_type": "Orange",
                "original_label": category,
                "annotation_categories": "",
                "label_status": "original_folder_label",
                "image_id": "",
            }
        )

    for label in ("Lime_Good", "Lime_Bad"):
        for image_path in image_files(LIME_ROOT / label):
            records.append(
                {
                    "image_path": project_relative(image_path),
                    "fruit_type": "Lime",
                    "original_label": label,
                    "annotation_categories": "",
                    "label_status": "original_folder_label",
                    "image_id": "",
                }
            )

    if not LEMON_ANNOTATIONS.is_file():
        raise FileNotFoundError(f"Lemon COCO annotation file not found: {LEMON_ANNOTATIONS}")
    with LEMON_ANNOTATIONS.open(encoding="utf-8") as annotation_file:
        coco = json.load(annotation_file)

    category_names = {
        category["id"]: category["name"] for category in coco.get("categories", [])
    }
    categories_by_image = defaultdict(set)
    for annotation in coco.get("annotations", []):
        image_id = annotation["image_id"]
        category_id = annotation["category_id"]
        if category_id not in category_names:
            raise ValueError(f"Unknown Lemon COCO category ID: {category_id}")
        categories_by_image[image_id].add(category_names[category_id])

    for image in coco.get("images", []):
        image_id = image["id"]
        image_path = (LEMON_DATASET_ROOT / image["file_name"]).resolve()
        if not image_path.is_file():
            raise FileNotFoundError(
                f"Lemon image referenced by COCO JSON was not found: {image_path}"
            )
        image_categories = sorted(categories_by_image.get(image_id, set()))
        records.append(
            {
                "image_path": project_relative(image_path),
                "fruit_type": "Lemon",
                "original_label": "",
                "annotation_categories": "; ".join(image_categories),
                "label_status": (
                    "coco_annotated" if image_categories else "no_coco_annotations"
                ),
                "image_id": image_id,
            }
        )

    return records


def main():
    records = build_records()
    fieldnames = (
        "image_path",
        "fruit_type",
        "original_label",
        "annotation_categories",
        "label_status",
        "image_id",
    )
    with OUTPUT_CSV.open("w", newline="", encoding="utf-8") as output_file:
        writer = csv.DictWriter(output_file, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(records)

    counts = defaultdict(int)
    for record in records:
        counts[record["fruit_type"]] += 1
    print(f"Manifest saved to: {OUTPUT_CSV}")
    for fruit_type in ("Orange", "Lime", "Lemon"):
        print(f"{fruit_type}: {counts[fruit_type]} records")


if __name__ == "__main__":
    main()
