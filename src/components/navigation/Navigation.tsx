import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { selectedCurrentUser } from '../../store/user/user.selector'
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks,
} from './navigation.styles'
import { useDispatch, useSelector } from 'react-redux'
import { selectedIsCartOpen } from '../../store/cart/cart.selector'
import { signOutStart } from '../../store/user/user.action'

const Navigation = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectedCurrentUser)
  const isCartOpen = useSelector(selectedIsCartOpen)

  const signOutHandler = () => dispatch(signOutStart())

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>

        <NavLinks>
          <NavLink to='/shop'>Shop</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutHandler}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to='/auth'>Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinks>

        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}
export default Navigation
