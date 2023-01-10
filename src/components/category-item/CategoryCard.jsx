import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CategoryItemContainer,
  BackgroundImage,
  CategoryBodyContainer,
} from './Categories.styles'

const CategoryCard = ({ categories }) => {
  const navigate = useNavigate()

  return categories.map(({ id, title, imageUrl, route }) => {
    const goToHandler = () => navigate(route)

    return (
      <CategoryItemContainer onClick={goToHandler}>
        <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
        <CategoryBodyContainer>
          <h2 className='card-title'>{title}</h2>
          <p>Shop Now</p>
        </CategoryBodyContainer>
      </CategoryItemContainer>
    )
  })
}

export default CategoryCard
