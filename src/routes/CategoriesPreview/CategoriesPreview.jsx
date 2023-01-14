import React, { Fragment } from 'react'

import CategoryPreview from '../../components/CategoryPreview/CategoryPreview'
import Spinner from '../../components/Spinner/Spinner'

import { useSelector } from 'react-redux'
import {
  selectedCategories,
  selectedCategoriesIsLoading,
} from '../../store/categories/categories.selector'

const CategoriesPreview = () => {
  const categories = useSelector(selectedCategories)
  const isLoading = useSelector(selectedCategoriesIsLoading)

  return (
    <Fragment>
      {isLoading ? <Spinner /> : <CategoryPreview object={categories} />}
    </Fragment>
  )
}

export default CategoriesPreview
