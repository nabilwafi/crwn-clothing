import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  selectedCartCount,
  selectedIsCartOpen,
} from '../../store/cart/cart.selector'

import { setIsCartOpen } from '../../store/cart/cart.action'

import { ShoppingIcon, CartIconContainer, ItemCount } from './CartIcon.style'

const CartIcon = () => {
  const dispatch = useDispatch()

  const isCartOpen = useSelector(selectedIsCartOpen)
  const cartCount = useSelector(selectedCartCount)

  const toggleCartHandler = () => dispatch(setIsCartOpen(!isCartOpen))

  return (
    <CartIconContainer onClick={toggleCartHandler}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
