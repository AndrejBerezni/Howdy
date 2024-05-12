import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from '../pages/Login'
import MessengerPage from '../pages/Messenger'
import RegisterPage from '../pages/Register'

export default function Router() {
  const isAuth = false //temporary until we implement authentication

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
    </Routes>
  )
}
