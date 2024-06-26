import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login as reduxLogin } from '../store/auth'

export default function useRegister() {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const register = async (
    firstName: string,
    lastName: string,
    nickname: string,
    email: string,
    password: string
  ) => {
    try {
      setIsLoading(true)
      setError(null)

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/auth/register`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName,
            lastName,
            nickname,
            email,
            password,
          }),
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

  return { register, isLoading, error }
}
