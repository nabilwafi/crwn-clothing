import React from 'react'
import CategoryCard from '../../../components/category-item/CategoryCard'
import { CategoriesContainer } from './CategoriesList.styles'

const CategoriesList = ({ categories }) => {
  return (
    <CategoriesContainer>
      <CategoryCard categories={categories} />
    </CategoriesContainer>
  )
}

export default CategoriesList
