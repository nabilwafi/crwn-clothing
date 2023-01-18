import { createSelector } from 'reselect'
import { RootState } from '../store'
import { CategoryState } from './categories.reducer'
import { CategoryMap } from './categories.types'

const selectedCategoryReducer = (state: RootState): CategoryState =>
  state.categories

export const selectedCategory = createSelector(
  [selectedCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
)

export const selectedCategories = createSelector(
  [selectedCategory],
  (categoriesSlice): CategoryMap =>
    categoriesSlice.reduce((acc, docSnapShot) => {
      const { title, items } = docSnapShot
      acc[title.toLowerCase()] = items

      return acc
    }, {} as CategoryMap)
)

export const selectedCategoriesIsLoading = createSelector(
  [selectedCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
)
