import { createContext, useReducer, Dispatch, useEffect, useState } from 'react'
import { AuthActionType } from '../compiler/enums'
import { IUser } from '../compiler/interfaces'

interface IAuthContext {
  isAuth: boolean
  user: IUser | null
  dispatch: Dispatch<IAuthAction>
  isValidating: boolean
}

export const AuthContext = createContext<IAuthContext>({
  isAuth: false,
  user: null,
  dispatch: () => {},
  isValidating: true,
})

interface IAuthAction {
  type: AuthActionType
  payload: IUser | null
}

const authReducer = (
  state: { isAuth: boolean; user: IUser | null },
  action: IAuthAction
) => {
  switch (action.type) {
    case AuthActionType.LOGIN:
      return { isAuth: true, user: action.payload }
    case AuthActionType.LOGOUT:
      return {
        isAuth: false,
        user: null,
      }
    default:
      return state
  }
}

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  // isValidating is used to display Loader until we validate authentication status with server
  const [isValidating, setIsValidating] = useState<boolean>(true)

  const [state, dispatch] = useReducer(authReducer, {
    isAuth: false,
    user: null,
  })

  useEffect(() => {
    const validateAccess = async () => {
      try {
        const userString = localStorage.getItem('user')
        const user = userString ? JSON.parse(userString) : null
        const token = localStorage.getItem('auth')

        if (!user || !token) {
          dispatch({ type: AuthActionType.LOGOUT, payload: null })
          setIsValidating(false)
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
          dispatch({ type: AuthActionType.LOGIN, payload: user })
          setIsValidating(false)
        } else {
          dispatch({ type: AuthActionType.LOGOUT, payload: null })
          localStorage.clear()
          setIsValidating(false)
        }
      } catch (error) {
        //[to be updated - error handling]
        console.log(error)
      }
    }

    validateAccess()
  }, [])

  return (
    <AuthContext.Provider value={{ ...state, dispatch, isValidating }}>
      {children}
    </AuthContext.Provider>
  )
}
