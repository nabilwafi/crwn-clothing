import React, { useContext } from 'react'
import Button from '../Button/Button'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { useNavigate } from 'react-router-dom'
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './CartDropdown.style'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckoutPageHandler = () => navigate('/checkout')

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          <CartItem cartItems={cartItems} />
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>

      <Button onClick={goToCheckoutPageHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown
