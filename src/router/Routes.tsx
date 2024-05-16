import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import LoginPage from '../pages/Login'
import MessengerPage from '../pages/Messenger'
import NotFoundPage from '../pages/NotFound'
import RegisterPage from '../pages/Register'

export default function Router() {
  const { isAuth } = useContext(AuthContext)

  return (
    <Routes>
      <Route
        path="/"
        element={isAuth ? <MessengerPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={!isAuth ? <LoginPage /> : <Navigate to="/" />}
      />
      <Route
        path="/register"
        element={!isAuth ? <RegisterPage /> : <Navigate to="/" />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
