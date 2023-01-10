import React from 'react'

import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

import {
  ImageContainer,
  CheckoutItemContainer,
  ColumnNumber,
  RemoveButton,
  ArrowButton,
  Value,
} from './CheckoutItem.style'

const CheckoutItem = ({ cartItems }) => {
  const { addItemToCart, removeItemToCart, clearItemToCart } =
    useContext(CartContext)

  return cartItems.map((cartItem) => {
    const { id, name, imageUrl, quantity, price } = cartItem

    const addItemToCartHandler = () => addItemToCart(cartItem)
    const removeItemToCartHandler = () => removeItemToCart(cartItem)
    const clearItemToCartHandler = () => clearItemToCart(cartItem)

    return (
      <CheckoutItemContainer key={id}>
        <ImageContainer>
          <img src={imageUrl} alt={name} />
        </ImageContainer>

        <ColumnNumber>{name}</ColumnNumber>
        <ColumnNumber>
          <ColumnNumber quantity>
            <ArrowButton onClick={removeItemToCartHandler}>
              &#10094;
            </ArrowButton>
            <Value>{quantity}</Value>
            <ArrowButton onClick={addItemToCartHandler}>&#10095;</ArrowButton>
          </ColumnNumber>
        </ColumnNumber>
        <ColumnNumber className='price'>{price}</ColumnNumber>
        <RemoveButton
          className='remove-button'
          onClick={clearItemToCartHandler}>
          &#10005;
        </RemoveButton>
      </CheckoutItemContainer>
    )
  })
}

export default CheckoutItem
