import React from 'react'
import CategoryCard, { Categories } from '../../../components/category-item/CategoryCard'
import { CategoriesContainer } from './CategoriesList.styles'

type CategoriesProps = {
  categories: Categories[]
}

const CategoriesList = ({ categories }: CategoriesProps) => {
  return (
    <CategoriesContainer>
      <CategoryCard categories={categories} />
    </CategoriesContainer>
  )
}

export default CategoriesList
