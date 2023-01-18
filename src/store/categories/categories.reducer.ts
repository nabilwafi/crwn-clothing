import { Category } from './categories.types'
import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from './categories.action'
import { AnyAction } from 'redux'

export type CategoryState = {
  readonly categories: Category[]
  readonly isLoading: boolean
  readonly error: Error | null
}

const CATEGORIES_INITIAL_STATE: CategoryState = {
  categories: [],
  isLoading: false,
  error: null,
}

const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (fetchCategoriesStart.match(action)) {
    return {
      ...state,
      isLoading: true,
    }
  }

  if (fetchCategoriesSuccess.match(action)) {
    return {
      ...state,
      categories: action.payload,
      isLoading: false,
    }
  }

  if (fetchCategoriesFailure.match(action)) {
    return {
      ...state,
      error: action.payload,
      isLoading: false,
    }
  }

  return state
}

export { categoriesReducer }
