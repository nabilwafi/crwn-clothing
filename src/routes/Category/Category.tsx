import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductsCard from '../../components/ProductsCard/ProductsCard'
import Spinner from '../../components/Spinner/Spinner'
import {
  selectedCategories,
  selectedCategoriesIsLoading,
} from '../../store/categories/categories.selector'

import { CategoryContainer, CategoryTitle } from './Category.styles'

type CategoryParams = {
  category: string
}

const Category = () => {
  const { category } = useParams<keyof CategoryParams>() as CategoryParams
  const categories = useSelector(selectedCategories)
  const isLoading = useSelector(selectedCategoriesIsLoading)
  const [products, setProducts] = useState(categories[category])

  useEffect(() => {
    setProducts(categories[category])
  }, [category, categories])

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products && <ProductsCard products={products} />}
        </CategoryContainer>
      )}
    </Fragment>
  )
}

export default Category
