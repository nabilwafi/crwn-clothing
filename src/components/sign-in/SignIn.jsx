import React from 'react'
import { useState } from 'react'
import FormInput from '../form-input/FormInput'
import Button, { BUTTON_TYPE_CLASS } from '../Button/Button'

import { SignInContainer, ButtonContainer } from './SignIn.style'

import {
  signInWithGooglePopup,
  SignInUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'
import './SignIn.style.jsx'

const defaultState = {
  email: '',
  password: '',
}

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultState)
  const { email, password } = formFields

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await SignInUserWithEmailAndPassword(email, password)
      setFormFields(defaultState)
    } catch (error) {
      if (error.code === 'auth/invalid-email') {
        alert('Invalid Email')
      }

      if (error.code === 'auth/user-not-found') {
        alert('User not found')
      }

      console.log('user creation encountered an error', error)
    }
  }

  const logGoogleUser = async () => {
    await signInWithGooglePopup()
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <p>Sign in with your email and password</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          name='email'
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          name='password'
          onChange={handleChange}
          value={password}
        />

        <ButtonContainer>
          <Button type='submit'>Sign In</Button>
          <Button onClick={logGoogleUser} buttonType={BUTTON_TYPE_CLASS.google}>
            Sign in with Google
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  )
}

export default SignIn
