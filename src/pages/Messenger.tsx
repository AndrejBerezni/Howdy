import { useContext } from 'react'
import LogoWithName from '../components/LogoWithName'
import { AuthContext } from '../context/AuthContext'

export default function MessengerPage() {
  const { user } = useContext(AuthContext)

  return (
    <>
      <LogoWithName />
      {user && (
        <>
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
          <p>{user.nickname}</p>
          <p>{user.email}</p>
          <p>{user.uid}</p>
        </>
      )}
    </>
  )
}
