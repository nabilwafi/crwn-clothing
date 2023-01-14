import { createSelector } from 'reselect'

const selectedCategoryReducer = (state) => state.categories

export const selectedCategory = createSelector(
  [selectedCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
)

export const selectedCategories = createSelector(
  [selectedCategory],
  (categoriesSlice) =>
    categoriesSlice.reduce((acc, docSnapShot) => {
      const { title, items } = docSnapShot
      acc[title.toLowerCase()] = items

      return acc
    }, {})
)

export const selectedCategoriesIsLoading = createSelector(
  [selectedCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
)
