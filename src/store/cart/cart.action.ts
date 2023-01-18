import { CartItem, CART_ACTION_TYPES } from './cart.types'
import {
  ActionWithPayload,
  createAction,
  withMatch,
} from '../../utils/reducer/reducer.utils'
import { CategoryItem } from '../categories/categories.types'

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  )

  if (existingCartItem)
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (
  cartItems: CartItem[],
  productToRemove: CartItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  )

  if (existingCartItem && existingCartItem.quantity === 1)
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}
const clearCartItem = (
  cartItems: CartItem[],
  productToClear: CartItem
): CartItem[] =>
  cartItems.filter((cartItem) => cartItem.id !== productToClear.id)

export type AddItemToCart = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>

export type RemoveItemFromCart = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>

export type ClearItemToCart = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>

export const setCartOpen = withMatch((bool: boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool)
)

export const setCartItems = withMatch((cartItems: CartItem[]) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
)

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd)
  return setCartItems(newCartItems)
}

export const removeItemFromCart = (
  cartItems: CartItem[],
  productToRemove: CartItem
) => {
  const newCartItems = removeCartItem(cartItems, productToRemove)
  return setCartItems(newCartItems)
}

export const clearItemToCart = (
  cartItems: CartItem[],
  productToClear: CartItem
) => {
  const newCartItems = clearCartItem(cartItems, productToClear)
  return setCartItems(newCartItems)
}

export const setIsCartOpen = (bool: boolean) => setCartOpen(bool)
