export default function LoginForm() {
  return (
    <form className="form-layout md:min-w-[400px]">
      <div className="relative z-0">
        <input
          type="text"
          placeholder=" "
          className="form-input peer"
          id="user"
          name="user"
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
          required
        />
        <label htmlFor="user" className="floating-label">
          Password
        </label>
      </div>
      <button type="submit" className="primary-btn">
        Sign in
      </button>
    </form>
  )
}
