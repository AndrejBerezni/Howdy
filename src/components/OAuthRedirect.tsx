import { useEffect, useContext, useState } from 'react'
import { useSearchParams, Link, useNavigate } from 'react-router-dom'
import { AuthActionType } from '../compiler/enums'
import Loader from './Loader'
import LogoWithName from './LogoWithName'
import { AuthContext } from '../context/AuthContext'

//this component extracts token and user info from search params (if info does not exists - it displays error)
//that data is saved in local storage and login is dispatched,
//after which, user is redirected to '/', being authenticated and able to access it now

export default function OAuthRedirect() {
  const navigate = useNavigate()
  const { dispatch } = useContext(AuthContext)
  const [error, setError] = useState<string | null>(null)
  const [searchParams] = useSearchParams()

  useEffect(() => {
    //extract info from search params
    const token = searchParams.get('token')
    const uid = searchParams.get('uid')
    const nickname = searchParams.get('nickname')
    const email = searchParams.get('email')

    //if some information is missing, display error
    if (!token || !uid || !nickname || !email) {
      setError(
        'Unable to complete login using this authentication method, please try again with different method.'
      )
      return
    }

    const user = {
      uid,
      nickname,
      email,
    }

    //save info in local storage and login user
    localStorage.setItem('auth', token.replace('%20', ' '))
    localStorage.setItem('user', JSON.stringify(user))

    dispatch({ type: AuthActionType.LOGIN, payload: user })

    //redirect to home page that now should be accessible since user is authenticated
    navigate('/')
  }, [dispatch, navigate, searchParams])

  return (
    <>
      {error ? (
        <section className="flex flex-col items-center">
          <LogoWithName />
          <p className="my-8 max-w-[400px] text-center font-bold text-text md:text-xl">
            {error}
          </p>
          <Link to="/login" className="primary-btn">
            Back to Login
          </Link>
        </section>
      ) : (
        <Loader size="page" />
      )}
    </>
  )
}
