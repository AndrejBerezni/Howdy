import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../compiler/interfaces'

interface IUserState {
  user: IUser | null
  friends: string[]
  friendRequests: {
    sent: { _id: string; recipient: string }[]
    received: { _id: string; sender: string }[]
  }
  chats: string[]
}

const initialState: IUserState = {
  user: null,
  friends: [],
  friendRequests: { sent: [], received: [] },
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
