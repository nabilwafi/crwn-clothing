import { User } from 'firebase/auth'
import { takeLatest, call, all, put } from 'typed-redux-saga/macro'
import {
  createUserDocumentFromAuth,
  getCurrentUser,
  signInWithGooglePopup,
  SignInUserWithEmailAndPassword,
  signOutUser,
  createAuthUserWithEmailAndPassword,
  AdditionalInformation,
} from '../../utils/firebase/firebase.utils'

import {
  signInSuccess,
  signInFailed,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  EmailSignInStart,
  SignUpStart,
} from './user.action'
import USER_ACTION_TYPES from './user.types'

export function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalInformation?: AdditionalInformation
) {
  try {
    const userSnapShot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      additionalInformation
    )

    if (userSnapShot) {
      yield* put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }))
    }
  } catch (error) {
    yield* put(signInFailed(error as Error))
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser)
    if (!userAuth) return

    yield* call(getSnapshotFromUserAuth, userAuth)
  } catch (error) {
    yield* put(signInFailed(error as Error))
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup)
    yield* call(getSnapshotFromUserAuth, user)
  } catch (error) {
    yield* put(signInFailed(error as Error))
  }
}

export function* signInWithEmail({
  payload: { email, password },
}: EmailSignInStart) {
  try {
    const userCredential = yield* call(
      SignInUserWithEmailAndPassword,
      email,
      password
    )

    if (userCredential) {
      const { user } = userCredential
      yield* call(getSnapshotFromUserAuth, user)
    }
  } catch (error) {
    yield* put(signInFailed(error as Error))
  }
}

export function* signUp({
  payload: { email, password, displayName },
}: SignUpStart) {
  try {
    const userCredential = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    )

    if (userCredential) {
      const { user } = userCredential

      yield* call(createUserDocumentFromAuth, user, { displayName })
    }
  } catch (error) {
    yield* put(signUpFailed(error as Error))
  }
}

export function* signOut() {
  try {
    yield* call(signOutUser)
    yield* put(signOutSuccess())
  } catch (error) {
    yield* put(signOutFailed(error as Error))
  }
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_AUTH_SESSION, isUserAuthenticated)
}

export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onSignUp() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp)
}

export function* onSignOut() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function* userSagas() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignOut),
    call(onSignUp),
  ])
}
