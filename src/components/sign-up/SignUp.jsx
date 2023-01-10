import React from 'react'
import { useState } from 'react'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/FormInput'
import Button from '../Button/Button'
import { SignUpContainer } from './SignUp.style'

const defaultState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultState)
  const { displayName, email, password, confirmPassword } = formFields

  const resetFromFields = () => {
    setFormFields(defaultState)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert('password do not match')
      return
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName })
      resetFromFields()
    } catch (error) {
      if (error.code === 'auth/invalid-email') {
        alert('Invalid Email')
      }
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use')
      }

      console.log('user creation encountered an error', error)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <p>Sign up with your email and password</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          name='displayName'
          onChange={handleChange}
          value={displayName}
        />

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

        <FormInput
          label='Confirm Password'
          type='password'
          required
          name='confirmPassword'
          onChange={handleChange}
          value={confirmPassword}
        />

        <Button type='submit'>Submit</Button>
      </form>
    </SignUpContainer>
  )
}

export default SignUp
