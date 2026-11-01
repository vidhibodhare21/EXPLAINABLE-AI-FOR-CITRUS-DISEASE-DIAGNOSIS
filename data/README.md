# Citrus fruit and leaf disease dataset

`citrus_fruit_leaf_disease_train.parquet` is the 759-image training split from [Project-AgML/citrus_fruit_leaf_disease_classification](https://huggingface.co/datasets/Project-AgML/citrus_fruit_leaf_disease_classification), distributed under **CC-BY-4.0**.

Attribution/citation: Rauf, H. T. et al. (2019), “A Citrus Fruits and Leaves Dataset for Detection and Classification of Citrus Diseases through Machine Learning,” *Data in Brief* 26, 104340, [doi:10.17632/3f83gxmv57.2](https://doi.org/10.17632/3f83gxmv57.2).

The dataset includes an explicit `plant_part` field. Fruit image counts are: canker 78, healthy 22, black spot 19, greening 16, and scab 15. Melanose images (13) occur in the leaf subset. There is no separate validation split, and the fruit subset is small and imbalanced. The downloaded data is provided for project research; it is **not** used to train either inference model in this website.
