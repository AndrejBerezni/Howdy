import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../compiler/interfaces'

interface IUserState {
  user: IUser | null
  friends: string[]
  friendRequests: string[]
  chats: string[]
}

const initialState: IUserState = {
  user: null,
  friends: [],
  friendRequests: [],
  chats: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setInitialUserState: (state, action) => {
      // 'return {...action.payload}' would leave state unused and show ts warning/error
      state.user = action.payload.user
      state.friends = action.payload.friends
      state.friendRequests = action.payload.friendRequests
      state.chats = action.payload.chats
    },
    clearUserState: () => initialState,
  },
})

export const { setInitialUserState, clearUserState } = userSlice.actions

export default userSlice.reducer
