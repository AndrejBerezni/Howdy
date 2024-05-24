import { useDispatch } from 'react-redux'
import { setInitialUserState } from '../store/user'
import generateRequestHeaders from '../utils/generateRequestHeaders'

export default function useUserData() {
  const dispatch = useDispatch()

  const setUserData = async (id: string) => {
    try {
      const headers = generateRequestHeaders()
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/users/${id}`,
        {
          headers,
        }
      )
      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message)
      }
      const data = await response.json()

      dispatch(
        setInitialUserState({
          user: data.user,
          friends: data.friends,
          friendRequests: data.friendRequests,
          chats: data.chats,
        })
      )
    } catch (error) {
      return error
    }
  }

  return { setUserData }
}
