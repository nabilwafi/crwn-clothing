import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductsCard from '../../components/ProductsCard/ProductsCard'
import { CategoriesContext } from '../../context/CategoriesContext'

import { CategoryContainer, CategoryTitle } from './Category.styles'

const Category = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products && <ProductsCard key={products.id} products={products} />}
      </CategoryContainer>
    </Fragment>
  )
}

export default Category
