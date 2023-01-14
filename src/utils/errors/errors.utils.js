export const errorMessage = (error) => {
  if (error.code === 'auth/email-already-in-use') {
    return 'Email already in use'
  }
}
