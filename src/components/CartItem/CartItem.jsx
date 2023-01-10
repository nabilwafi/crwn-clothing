import React from 'react'
import './CartItem.style.jsx'
import {
  CartItemContainer,
  ItemDetails,
  Name,
  Price,
} from './CartItem.style.jsx'

const CartItem = ({ cartItems }) => {
  return cartItems.map((cartItem) => {
    const { id, name, quantity, price, imageUrl } = cartItem

    return (
      <CartItemContainer key={id}>
        <img src={imageUrl} alt={name} />

        <ItemDetails>
          <Name>{name}</Name>
          <Price>
            {quantity} X {price}
          </Price>
        </ItemDetails>
      </CartItemContainer>
    )
  })
}

export default CartItem
