import React from 'react'
import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'
import { useNavigate } from 'react-router-dom'
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './CartDropdown.style'
import { useSelector } from 'react-redux'
import { selectedCartItems } from '../../store/cart/cart.selector'

const CartDropdown = () => {
  const cartItems = useSelector(selectedCartItems)
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
