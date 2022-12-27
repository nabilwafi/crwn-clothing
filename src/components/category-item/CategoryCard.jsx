import React from 'react'
import './Categories.styles.scss'

const CategoryCard = ({ categories }) => {
  return categories.map(({ id, title, imageUrl }) => (
    <div key={id} className='category-container large'>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className='category-body-container'>
        <h2 className='card-title'>{title}</h2>
        <div className='card-subtitle'>Shop Now</div>
      </div>
    </div>
  ))
}

export default CategoryCard
