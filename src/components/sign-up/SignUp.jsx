import React from 'react'
import { useState } from 'react'
import FormInput from '../form-input/FormInput'
import Button from '../Button/Button'
import { SignUpContainer } from './SignUp.style'
import { useDispatch, useSelector } from 'react-redux'
import { signUpStart } from '../../store/user/user.action'
import { selectedUserError } from '../../store/user/user.selector'
import { errorMessage } from '../../utils/errors/errors.utils'

const defaultState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUp = () => {
  const dispatch = useDispatch()
  const error = useSelector(selectedUserError)
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

    dispatch(signUpStart(email, password, displayName))
    resetFromFields()
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <SignUpContainer>
      {error && <div>{errorMessage(error)}</div>}
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
