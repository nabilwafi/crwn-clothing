import React from 'react'

import { useDispatch } from 'react-redux'
import {
  addItemToCart,
  removeItemFromCart,
  clearItemToCart,
} from '../../store/cart/cart.action'

import {
  ImageContainer,
  CheckoutItemContainer,
  ColumnNumber,
  RemoveButton,
  ArrowButton,
  Value,
} from './CheckoutItem.style'

const CheckoutItem = ({ cartItems }) => {
  const dispatch = useDispatch()

  return cartItems.map((cartItem) => {
    const { id, name, imageUrl, quantity, price } = cartItem

    const addItemToCartHandler = () =>
      dispatch(addItemToCart(cartItems, cartItem))
    const removeItemToCartHandler = () =>
      dispatch(removeItemFromCart(cartItems, cartItem))
    const clearItemToCartHandler = () =>
      dispatch(clearItemToCart(cartItems, cartItem))

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
