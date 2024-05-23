import { get } from 'lodash'
import { RootState } from '..'

export const getAuthStatus = (store: RootState) =>
  get(store, 'auth.isAuth', false)

export const getUserID = (store: RootState) => get(store, 'auth._id', null)

export const getValidationStatus = (store: RootState) =>
  get(store, 'auth.isValidating', false)
