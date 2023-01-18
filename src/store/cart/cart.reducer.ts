import { CartItem } from './cart.types'
import { AnyAction } from 'redux'
import { setCartItems, setCartOpen } from './cart.action'

export type CartState = {
  readonly isCartOpen: boolean
  readonly cartItems: CartItem[]
}

const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
}

const cartReducer = (state = CART_INITIAL_STATE, action = {} as AnyAction) => {
  if (setCartItems.match(action))
    return {
      ...state,
      cartItems: action.payload,
    }

  if (setCartOpen.match(action))
    return {
      ...state,
      isCartOpen: action.payload,
    }

  return state
}

export { cartReducer }
