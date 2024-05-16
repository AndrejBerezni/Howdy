import { useState } from 'react'
import { BiError } from 'react-icons/bi'
import Loader from './Loader'
import useLogin from '../hooks/useLogin'

export default function LoginForm() {
  const { login, isLoading, error } = useLogin()
  const [user, setUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await login(user, password)
  }

  return (
    <form className="form-layout md:min-w-[400px]" onSubmit={handleSubmit}>
      <div className="relative z-0">
        <input
          type="text"
          placeholder=" "
          className="form-input peer"
          id="user"
          name="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <label htmlFor="user" className="floating-label">
          Email or nickname
        </label>
      </div>
      <div className="relative z-0">
        <input
          type="password"
          placeholder=" "
          className="form-input peer"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="password" className="floating-label">
          Password
        </label>
      </div>

      {error && (
        <div className="flex gap-2 items-center justify-center text-xl text-primary font-bold tracking-wider">
          <BiError />
          <p>{error}</p>
        </div>
      )}

      <button type="submit" className="primary-btn">
        {isLoading ? <Loader size="button" /> : 'Sign in'}
      </button>
    </form>
  )
}
