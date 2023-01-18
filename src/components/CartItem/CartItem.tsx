import React from 'react'
import { CartItem as CartItemProps } from '../../store/cart/cart.types'
import { CartItemContainer, ItemDetails, Name, Price } from './CartItem.style'

type CartItemsProps = {
  cartItems: CartItemProps[]
}

const CartItem = ({ cartItems }: CartItemsProps) => {
  return (
    <>
      {cartItems.map((cartItem) => {
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
      })}
    </>
  )
}

export default CartItem
