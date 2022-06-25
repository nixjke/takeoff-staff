import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
  id: null,
  accessToken: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email
      state.id = action.payload.id
      state.accessToken = action.payload.accessToken
    },
    removeUser(state) {
      state.email = null
      state.id = null
      state.accessToken = null
    },
  },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
