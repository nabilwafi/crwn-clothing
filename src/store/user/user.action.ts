import USER_ACTION_TYPES from './user.types'
import {
  Action,
  ActionWithPayload,
  createAction,
  withMatch,
} from '../../utils/reducer/reducer.utils'
import { UserData } from '../../utils/firebase/firebase.utils'

export type SetCurrentUser = ActionWithPayload<
  USER_ACTION_TYPES.SET_CURRENT_USER,
  UserData
>

export const setCurrentUser = withMatch(
  (user: UserData): SetCurrentUser =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
)

/** SET  */

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_AUTH_SESSION>
export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>
export type EmailSignInStart = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>
export type SignInSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  UserData
>
export type SignInFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_FAILED,
  Error
>

export type SignUpStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>

export type SignUpSuccess = Action<USER_ACTION_TYPES.SIGN_UP_SUCCESS>

export type SignUpFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_FAILED,
  Error
>

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>

export type SignOutFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_OUT_FAILED,
  Error
>

export const checkUserSession = withMatch(
  (): CheckUserSession => createAction(USER_ACTION_TYPES.CHECK_AUTH_SESSION)
)

export const googleSignInStart = withMatch(
  (): GoogleSignInStart => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)
)

export const emailSignInStart = withMatch(
  (email: string, password: string): EmailSignInStart =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password })
)

export const signInSuccess = withMatch(
  (user: UserData & {id: string}): SignInSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
)

export const signInFailed = withMatch(
  (error: Error): SignInFailed =>
    createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
)

export const signUpStart = withMatch(
  (email: string, password: string, displayName: string): SignUpStart =>
    createAction(USER_ACTION_TYPES.SIGN_UP_START, {
      email,
      password,
      displayName,
    })
)

export const signUpSuccess = withMatch(
  (): SignUpSuccess => createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS)
)

export const signUpFailed = withMatch(
  (error: Error): SignUpFailed =>
    createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
)

export const signOutStart = withMatch(
  (): SignOutStart => createAction(USER_ACTION_TYPES.SIGN_OUT_START)
)

export const signOutSuccess = withMatch(
  (): SignOutSuccess => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
)

export const signOutFailed = withMatch(
  (error: Error): SignOutFailed =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)
)
