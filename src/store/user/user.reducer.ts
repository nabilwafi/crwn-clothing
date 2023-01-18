import { UserData } from '../../utils/firebase/firebase.utils'
import { AnyAction } from 'redux'
import {
  signInSuccess,
  signOutSuccess,
  signInFailed,
  signUpFailed,
  signOutFailed,
} from './user.action'

export type UserState = {
  readonly currentUser?: UserData
  readonly isLoading: boolean
  readonly error?: Error
}

export const USER_INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
}

export const userReducer = (state = USER_INITIAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    }
  }

  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
    }
  }

  if (
    signInFailed.match(action) ||
    signUpFailed.match(action) ||
    signOutFailed.match(action)
  ) {
    return {
      ...state,
      error: action.payload,
    }
  }

  return state
}
