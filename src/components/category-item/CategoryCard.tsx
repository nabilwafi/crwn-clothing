import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CategoryItemContainer,
  BackgroundImage,
  CategoryBodyContainer,
} from './Categories.styles'

export type Categories = {
  id: number
  title: string
  imageUrl: string
  route: string
}

type CategoryCardProps = {
  categories: Categories[]
}

const CategoryCard = ({ categories }: CategoryCardProps) => {
  const navigate = useNavigate()

  return (
    <>
      {categories.map(({ id, title, imageUrl, route }) => {
        const goToHandler = () => navigate(route)

        return (
          <CategoryItemContainer key={id} onClick={goToHandler}>
            <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
            <CategoryBodyContainer>
              <h2 className='card-title'>{title}</h2>
              <p>Shop Now</p>
            </CategoryBodyContainer>
          </CategoryItemContainer>
        )
      })}
    </>
  )
}

export default CategoryCard
