import React from 'react'
import {
  CategoryItemContainer,
  BackgroundImage,
  CategoryBodyContainer,
} from './Categories.styles'

const CategoryCard = ({ categories }) => {
  return categories.map(({ id, title, imageUrl }) => (
    <CategoryItemContainer>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <CategoryBodyContainer>
        <h2 className='card-title'>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryItemContainer>
  ))
}

export default CategoryCard
