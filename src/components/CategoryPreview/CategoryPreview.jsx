import React from 'react'
import { Link } from 'react-router-dom'
import ProductsCard from '../ProductsCard/ProductsCard'
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './CategoryPreview.styles'

const CategoryPreview = ({ object }) => {
  return Object.keys(object).map((title) => {
    const products = object[title]
    const filteredProducts = products.filter((_, idx) => idx < 4)

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
  })
}

export default CategoryPreview
