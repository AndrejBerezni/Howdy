import { useDispatch } from 'react-redux'
import useUserData from './useUserData'
import { startValidation, endValidation, login, logout } from '../store/auth'
import { showDialog } from '../store/dialog'

export default function useAccessValidation() {
  const dispatch = useDispatch()
  const { setUserData } = useUserData()

  const validateAccess = async () => {
    try {
      dispatch(startValidation())

      const user = localStorage.getItem('user')
      const token = localStorage.getItem('auth')

      if (!user || !token) {
        dispatch(logout())
        dispatch(endValidation())
        return
      }

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/auth/validate`,
        {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        }
      )

      if (response.ok) {
        await setUserData(user)
        dispatch(login(user))
      } else {
        dispatch(logout())
        localStorage.clear()
      }

      dispatch(endValidation())
    } catch (error) {
      let message
      if (error instanceof Error) {
        message = error.message
      } else {
        message = 'Something went wrong, please try again later.'
      }
      dispatch(showDialog({ type: 'error', message }))
    }
  }

  return { validateAccess }
}
