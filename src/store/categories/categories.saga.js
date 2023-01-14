import { all, takeLatest, call, put } from 'redux-saga/effects'

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from './categories.action'

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { CATEGORIES_ACTION_TYPES } from './categories.types'

export function* fetchCategoryAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, 'categories')
    yield put(fetchCategoriesSuccess(categoriesArray))
  } catch (error) {
    yield put(fetchCategoriesFailure(error))
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoryAsync
  )
}

export function* categoriesSagas() {
  yield all([call(onFetchCategories)])
}
