import { useState } from 'react'
import FormError from './FormError'
import Loader from './Loader'
import useRegister from '../hooks/useRegister'

export default function RegisterForm() {
  const { register, isLoading, error } = useRegister()

  const [email, setEmail] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [nickname, setNickname] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [localError, setLocalError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setLocalError(null)
    if (password !== confirmPassword) {
      setLocalError('Entered passwords do not match')
      return
    }
    await register(firstName, lastName, nickname, email, password)
  }

  return (
    <form className="form-layout" onSubmit={handleSubmit}>
      <h2 className="-mt-4 font-semibold text-base md:text-xl text-center text-primary dark:text-secondary">
        Let&apos;s create your account!
      </h2>
      <div className="relative z-0">
        <input
          type="email"
          placeholder=" "
          className="form-input peer"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="email" className="floating-label">
          Your email
        </label>
      </div>
      <fieldset className="flex gap-8 md:gap-4 md:flex-row flex-col">
        <div className="relative z-0">
          <input
            type="text"
            placeholder=" "
            className="form-input peer"
            id="first-name"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label htmlFor="first-name" className="floating-label">
            First Name
          </label>
        </div>
        <div className="relative z-0">
          <input
            type="text"
            placeholder=" "
            className="form-input peer"
            id="last-name"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <label htmlFor="last-name" className="floating-label">
            Last Name
          </label>
        </div>
      </fieldset>
      <div className="relative z-0">
        <input
          type="text"
          placeholder=" "
          className="form-input peer"
          id="nickname"
          name="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
          maxLength={32}
        />
        <label htmlFor="nickname" className="floating-label">
          Choose a nickname
        </label>
      </div>
      <fieldset className="flex flex-col gap-8">
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
            Create password
          </label>
        </div>
        <div className="relative z-0">
          <input
            type="password"
            placeholder=" "
            className="form-input peer"
            id="confirm-password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <label htmlFor="confirm-password" className="floating-label">
            Confirm Password
          </label>
        </div>
      </fieldset>

      {(error || localError) && (
        <FormError message={(localError as string) ?? error} />
      )}

      <button className="primary-btn" disabled={isLoading}>
        {isLoading ? <Loader size="button" /> : 'Ready!'}
      </button>
    </form>
  )
}
