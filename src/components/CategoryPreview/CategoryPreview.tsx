import React from 'react'
import { Link } from 'react-router-dom'
import {
  CategoryItem,
  CategoryMap,
} from '../../store/categories/categories.types'
import ProductsCard from '../ProductsCard/ProductsCard'
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './CategoryPreview.styles'

type CategoryPreviewProps = {
  object: CategoryMap
}

const CategoryPreview = ({ object }: CategoryPreviewProps) => {
  return (
    <>
      {Object.keys(object).map((title) => {
        const products: CategoryItem[] = object[title]
        const filteredProducts = products.filter((_, i) => i < 4)

        return (
          <CategoryPreviewContainer key={title}>
            <Link to={title}>
              <Title>{title.toUpperCase()}</Title>
            </Link>

            <Preview>
              <ProductsCard products={filteredProducts} />
            </Preview>
          </CategoryPreviewContainer>
        )
      })}
    </>
  )
}

export default CategoryPreview
