import React from 'react'
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const createdUser = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <div>SIGN IN</div>
      <button onClick={logGoogleUser}>Sig in with google</button>
    </div>
  )
}

export default SignIn
