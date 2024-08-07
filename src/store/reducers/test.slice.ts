import { createSlice } from '@reduxjs/toolkit'

const testReducer = createSlice({
  name: 'test',
  initialState: {
    num: 1
  },
  reducers: {
    setNum(state, action) {
      state.num = action.payload
    }
  }
})

export default testReducer.reducer
export const {
  setNum
} = testReducer.actions