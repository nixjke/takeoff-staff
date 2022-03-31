import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  login: null,
  token: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.login = action.payload.login
      state.token = action.payload.token
    }
  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer