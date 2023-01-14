import { createSelector } from 'reselect'

const selectedUser = (state) => state.user

export const selectedCurrentUser = createSelector(
  [selectedUser],
  (selectedUserSlice) => selectedUserSlice.currentUser
)

export const selectedUserError = createSelector(
  [selectedUser],
  (selectedUserSlice) => selectedUserSlice.error
)
