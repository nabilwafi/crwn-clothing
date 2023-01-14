import React from 'react'

import Button, { BUTTON_TYPE_CLASS } from '../Button/Button'

import { ProductCardContainer, Footer, Description } from './ProductsCard.style'

import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.action'
import { selectedCartItems } from '../../store/cart/cart.selector'

const ProductsCard = ({ products }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectedCartItems)

  return products.map((product) => {
    const { id, name, imageUrl, price } = product

    const addItemToCardHandler = () =>
      dispatch(addItemToCart(cartItems, product))

    return (
      <ProductCardContainer key={id}>
        <img src={imageUrl} alt={name} />

        <Footer>
          <Description name='true'>{name}</Description>
          <Description>{price}</Description>
        </Footer>

        <Button
          buttonType={BUTTON_TYPE_CLASS.inverted}
          onClick={addItemToCardHandler}>
          Add to cart
        </Button>
      </ProductCardContainer>
    )
  })
}

export default ProductsCard
