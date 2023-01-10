import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './Checkout.styles'

import React from 'react'

const Checkout = () => {
  const { cartItems, cartTotalPrice } = useContext(CartContext)

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      <CheckoutItem cartItems={cartItems} />
      <Total>Total: ${cartTotalPrice}</Total>
    </CheckoutContainer>
  )
}

export default Checkout
