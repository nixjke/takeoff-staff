import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
  id: null,
  accessToken: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email
      state.id = action.payload.id
      state.accessToken = action.payload.accessToken
    }
  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
