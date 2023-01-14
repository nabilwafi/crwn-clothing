import { takeLatest, call, all, put } from 'redux-saga/effects'
import {
  createUserDocumentFromAuth,
  getCurrentUser,
  signInWithGooglePopup,
  SignInUserWithEmailAndPassword,
  signOutUser,
  createAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'

import {
  signInSuccess,
  signInFailed,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
} from './user.action'
import USER_ACTION_TYPES from './user.types'

export function* getSnapshotFromUserAuth(userAuth, additionalInformation) {
  try {
    const userSnapShot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalInformation
    )

    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }))
  } catch (error) {
    yield put(signInFailed(error))
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser)
    if (!userAuth) return
    yield call(getSnapshotFromUserAuth, userAuth)
  } catch (error) {
    yield put(signInFailed(error))
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup)
    yield call(getSnapshotFromUserAuth, user)
  } catch (error) {
    yield put(signInFailed(error))
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(SignInUserWithEmailAndPassword, email, password)
    yield call(getSnapshotFromUserAuth, user)
  } catch (error) {
    yield put(signInFailed(error))
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    )

    yield call(createUserDocumentFromAuth, user, { displayName })
  } catch (error) {
    yield put(signUpFailed(error))
  }
}

export function* signOut() {
  try {
    yield call(signOutUser)
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailed(error))
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_AUTH_SESSION, isUserAuthenticated)
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onSignUp() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp)
}

export function* onSignOut() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignOut),
    call(onSignUp),
  ])
}
