import { useState, useContext } from 'react'
import { AuthActionType } from '../compiler/enums'
import { AuthContext } from '../context/AuthContext'

export default function useLogin() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const { dispatch } = useContext(AuthContext)

  const login = async (login: string, password: string) => {
    try {
      setIsLoading(true)
      setError(null)
      // console.log(import.meta.env.VITE_API_BASE_URL)
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
      localStorage.setItem('user', JSON.stringify(data.user))

      //update state
      dispatch({ type: AuthActionType.LOGIN, payload: data.user })

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
