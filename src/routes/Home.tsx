import React from 'react'
import CategoriesList from '../pages/home/Categories-List/CategoriesList'
import categories from '../contents/categories.json'

const Home = () => {
  return <CategoriesList categories={categories} />
}

export default Home
