import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from './auth'
import dialogReducer from './dialog'
import searchReducer from './search'
import userReducer from './user'

const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  search: searchReducer,
  dialog: dialogReducer,
})

export const store = configureStore({
  reducer,
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
