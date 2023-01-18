import { AuthError, AuthErrorCodes } from 'firebase/auth'

export const errorMessage = (error: AuthError) => {
  if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
    return 'Email already in use'
  }
}
