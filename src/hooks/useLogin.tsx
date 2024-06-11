import { useState } from 'react'
import { useDispatch } from 'react-redux'
import useUserData from './useUserData'
import { login as reduxLogin } from '../store/auth'

export default function useLogin() {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const { setUserData } = useUserData()

  const login = async (login: string, password: string) => {
    try {
      setIsLoading(true)
      setError(null)
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ login, password }),
        }
      )

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message)
      }

      //server is returning json with two properties: token and user
      const data = await response.json()

      //save response data to local storage to be used by app
      localStorage.setItem('auth', data.token.token)
      localStorage.setItem('user', data.user)

      //update state
      dispatch(reduxLogin(data.user))
      await setUserData(data.user)

      setIsLoading(false)
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('Something went wrong, please try again later!')
      }
      setIsLoading(false)
    }
  }

  return { login, isLoading, error }
}
