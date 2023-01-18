import { all, takeLatest, call, put } from 'typed-redux-saga/macro'

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from './categories.action'

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { CATEGORIES_ACTION_TYPES } from './categories.types'

export function* fetchCategoryAsync() {
  try {
    const categoriesArray = yield* call(getCategoriesAndDocuments)
    yield* put(fetchCategoriesSuccess(categoriesArray))
  } catch (error) {
    yield* put(fetchCategoriesFailure(error as Error))
  }
}

export function* onFetchCategories() {
  yield* takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoryAsync
  )
}

export function* categoriesSagas() {
  yield* all([call(onFetchCategories)])
}
