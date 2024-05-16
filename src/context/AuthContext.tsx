import { createContext, useReducer, Dispatch, useEffect } from 'react'
import { IUser } from '../compiler/interfaces'

interface IAuthContext {
  isAuth: boolean
  user: IUser | null
  dispatch: Dispatch<IAuthAction>
}

export const AuthContext = createContext<IAuthContext>({
  isAuth: false,
  user: null,
  dispatch: () => {},
})

enum AuthActionType {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

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
          console.log('not authorized')
          return
        }

        const response = await fetch(
          'http://localhost:3000/api/v1/auth/validate',
          {
            headers: {
              Authorization: token,
              'Content-Type': 'application/json',
            },
          }
        )
        if (response.ok) {
          dispatch({ type: AuthActionType.LOGIN, payload: user })
        } else {
          dispatch({ type: AuthActionType.LOGOUT, payload: null })
          localStorage.clear()
        }
      } catch (error) {
        //[to be updated]
        console.log(error)
      }
    }

    validateAccess()
  }, [])

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
