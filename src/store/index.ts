import { configureStore, combineReducers } from '@reduxjs/toolkit'
import testReducer from './reducers/test.slice'

const rootReducer = combineReducers({
  test: testReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']