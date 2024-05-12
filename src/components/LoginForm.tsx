export default function LoginForm() {
  return (
    <form className="flex flex-col gap-8 font-lato px-2 md:min-w-[400px]">
      <div className="relative z-0">
        <input
          type="text"
          placeholder=" "
          className="form-input peer"
          id="user"
          name="user"
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
        />
        <label htmlFor="user" className="floating-label">
          Password
        </label>
      </div>
    </form>
  )
}
