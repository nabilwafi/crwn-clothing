import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './Checkout.styles'

import React from 'react'
import { useSelector } from 'react-redux'
import {
  selectedCartItems,
  selectedCartTotalPrice,
} from '../../store/cart/cart.selector'
import Payment from '../../components/Payment/Payment'

const Checkout = () => {
  const cartItems = useSelector(selectedCartItems)
  const cartTotalPrice = useSelector(selectedCartTotalPrice)

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
      <Payment />
    </CheckoutContainer>
  )
}

export default Checkout
