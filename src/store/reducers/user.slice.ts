import { createSlice } from '@reduxjs/toolkit'

const userReducer = createSlice({
  name: 'user',
  initialState: {
    isAuth: false
  },
  reducers: {
    setAuth(state, action) {
      state.isAuth = action.payload
    }
  }
})

export default userReducer.reducer
export const { setAuth } = userReducer.actions