import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { ShoppingIcon, CartIconContainer, ItemCount } from './CartIcon.style'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

  const toggleCartHandler = () => setIsCartOpen(!isCartOpen)

  return (
    <CartIconContainer onClick={toggleCartHandler}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
