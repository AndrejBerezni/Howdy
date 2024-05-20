import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import OAuthRedirect from '../components/authentication/OAuthRedirect'
import Chat from '../components/chat'
import ChatPlaceholder from '../components/chat/ChatPlaceholder'
import Loader from '../components/Loader'
import { AuthContext } from '../context/AuthContext'
import LoginPage from '../pages/Login'
import MessengerPage from '../pages/Messenger'
import NotFoundPage from '../pages/NotFound'
import RegisterPage from '../pages/Register'

export default function Router() {
  //for each route, display Loader while validating authentication status, and then, according to that status, display correct page
  const { isAuth, isValidating } = useContext(AuthContext)

  return (
    <Routes>
      <Route
        path="/"
        element={
          isValidating ? (
            <Loader size="page" />
          ) : isAuth ? (
            <MessengerPage />
          ) : (
            <Navigate to="/login" />
          )
        }
      >
        <Route index element={<ChatPlaceholder />} />
        <Route path="/:chatId" element={<Chat />} />
      </Route>
      <Route
        path="/login"
        element={
          isValidating ? (
            <Loader size="page" />
          ) : !isAuth ? (
            <LoginPage />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/register"
        element={
          isValidating ? (
            <Loader size="page" />
          ) : !isAuth ? (
            <RegisterPage />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route path="/oauth" element={<OAuthRedirect />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
