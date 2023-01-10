import React, { Fragment, useContext } from 'react'
import { CategoriesContext } from '../../context/CategoriesContext'
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview'

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <Fragment>
      <CategoryPreview object={categoriesMap} />
    </Fragment>
  )
}

export default CategoriesPreview
