import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import useLogout from '../hooks/useLogout'
export default function ControlPanel() {
  const { user } = useContext(AuthContext)
  const { logout } = useLogout()
  return (
    <section className="w-screen h-full sm:w-1/2 lg:w-1/3 sm:rounded-l-lg sm:border-2 dark:border-primary bg-background dark:bg-backgroundDark">
      {user && (
        <>
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
          <p>{user.nickname}</p>
          <p>{user.email}</p>
          <p>{user.uid}</p>
        </>
      )}
      <button onClick={logout} className="primary-btn">
        Logout
      </button>
    </section>
  )
}
