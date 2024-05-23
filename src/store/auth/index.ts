import { createSlice } from '@reduxjs/toolkit'

interface IAuthState {
  isAuth: boolean
  isValidating: boolean
  _id: string | null
}

const initialState: IAuthState = {
  isAuth: false,
  isValidating: false,
  _id: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startValidation: (state) => {
      state.isValidating = true
    },
    endValidation: (state) => {
      state.isValidating = false
    },
    login: (state, action) => {
      state.isAuth = true
      state._id = action.payload
    },
    logout: () => initialState,
  },
})

export const { startValidation, endValidation, login, logout } =
  authSlice.actions

export default authSlice.reducer
