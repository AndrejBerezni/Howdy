import { useContext } from 'react'
import { AuthActionType } from '../compiler/enums'
import { AuthContext } from '../context/AuthContext'

export default function useLogout() {
  const { dispatch } = useContext(AuthContext)

  const logout = () => {
    localStorage.clear()
    dispatch({ type: AuthActionType.LOGOUT, payload: null })
  }

  return { logout }
}
