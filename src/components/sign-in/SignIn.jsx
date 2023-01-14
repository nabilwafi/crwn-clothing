import React from 'react'
import { useState } from 'react'
import FormInput from '../form-input/FormInput'
import Button, { BUTTON_TYPE_CLASS } from '../Button/Button'

import { SignInContainer, ButtonContainer } from './SignIn.style'

import './SignIn.style.jsx'
import { useDispatch } from 'react-redux'
import {
  emailSignInStart,
  googleSignInStart,
} from '../../store/user/user.action'

const defaultState = {
  email: '',
  password: '',
}

const SignIn = () => {
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState(defaultState)
  const { email, password } = formFields

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      dispatch(emailSignInStart(email, password))
      setFormFields(defaultState)
    } catch (error) {
      console.log('user sign in failed', error)
    }
  }

  const signInWithGoogle = () => {
    dispatch(googleSignInStart())
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
          <Button
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPE_CLASS.google}>
            Sign in with Google
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  )
}

export default SignIn
