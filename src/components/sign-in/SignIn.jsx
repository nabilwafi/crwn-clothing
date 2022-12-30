import React from 'react'
import { useState } from 'react'
import FormInput from '../form-input/FormInput'
import Button from '../Button/Button'
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  SignInUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'
import './SignIn.style.scss'

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
      const response = await SignInUserWithEmailAndPassword(email, password)
      console.log(response)
      setFormFields(defaultState)
    } catch (error) {
      if (error.code === 'auth/invalid-email') {
        alert('Invalid Email')
      }

      console.log('user creation encountered an error', error)
    }
  }

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    await createUserDocumentFromAuth(user)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className='sign-in-container'>
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

        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button onClick={logGoogleUser} buttonType='google'>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
