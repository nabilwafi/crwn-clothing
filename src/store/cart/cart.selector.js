import { createSelector } from 'reselect'

const selectedCartReducer = (state) => state.cart

export const selectedCartItems = createSelector(
  [selectedCartReducer],
  (cart) => cart.cartItems
)

export const selectedIsCartOpen = createSelector(
  [selectedCartReducer],
  (cart) => cart.isCartOpen
)

export const selectedCartCount = createSelector(
  [selectedCartItems],
  (cartItems) =>
    cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity
    }, 0)
)

export const selectedCartTotalPrice = createSelector(
  [selectedCartItems],
  (cartItems) =>
    cartItems.reduce((total, cartItem) => {
      return total + cartItem.price * cartItem.quantity
    }, 0)
)
