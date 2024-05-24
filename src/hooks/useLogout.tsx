import { useDispatch } from 'react-redux'
import { logout as reduxLogout } from '../store/auth'
import { clearUserState } from '../store/user'

export default function useLogout() {
  const dispatch = useDispatch()

  const logout = () => {
    localStorage.clear()
    dispatch(clearUserState())
    dispatch(reduxLogout())
  }

  return { logout }
}
