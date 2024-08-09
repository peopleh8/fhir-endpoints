import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './reducers/user.slice'

const rootReducer = combineReducers({
  user: userReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']