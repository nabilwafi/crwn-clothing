import { createSelector } from 'reselect'
import { RootState } from '../store'
import { User } from './user.types'

const selectedUser = (state: RootState): User => state.user

export const selectedCurrentUser = createSelector(
  [selectedUser],
  (selectedUserSlice) => selectedUserSlice.currentUser
)

export const selectedUserError = createSelector(
  [selectedUser],
  (selectedUserSlice) => selectedUserSlice.error
)
