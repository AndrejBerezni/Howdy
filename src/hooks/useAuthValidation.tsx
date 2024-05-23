import { useDispatch } from 'react-redux'
import { startValidation, endValidation, login, logout } from '../store/auth'

export default function useAccessValidation() {
  const dispatch = useDispatch()

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
        dispatch(login(user))
      } else {
        dispatch(logout())
        localStorage.clear()
      }

      dispatch(endValidation())
    } catch (error) {
      //[to be updated - error handling]
      console.log(error)
    }
  }

  return { validateAccess }
}
