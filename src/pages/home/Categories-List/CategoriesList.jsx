import React from 'react'
import CategoryCard from '../../../components/category-item/CategoryCard'
import './CategoriesList.styles.scss'

const CategoriesList = ({ categories }) => {
  return (
    <div className='categories-container'>
      <CategoryCard categories={categories} />
    </div>
  )
}

export default CategoriesList
