import { get } from 'lodash'
import { RootState } from '..'

export const getUserInfo = (store: RootState) => get(store, 'user.user', null)

export const getFriends = (store: RootState) => get(store, 'user.friends', [])

export const getFriendRequests = (store: RootState) =>
  get(store, 'user.friendRequests', { sent: [], received: [] })

export const getChats = (store: RootState) => get(store, 'user.chats', [])
