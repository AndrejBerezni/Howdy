import { useDispatch } from 'react-redux'
import { logout as reduxLogout } from '../store/auth'

export default function useLogout() {
  const dispatch = useDispatch()

  const logout = () => {
    localStorage.clear()
    dispatch(reduxLogout())
  }

  return { logout }
}
