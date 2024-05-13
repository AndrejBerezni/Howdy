export default function RegisterForm() {
  return (
    <form className="form-layout">
      <h2 className="-mt-4 font-semibold text-base md:text-xl text-center text-secondary">
        Let&apos;s create your account!
      </h2>
      <fieldset className="flex gap-8 md:gap-4 md:flex-row flex-col">
        <div className="relative z-0">
          <input
            type="text"
            placeholder=" "
            className="form-input peer"
            id="first-name"
            name="firstName"
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
            required
          />
          <label htmlFor="nickname" className="floating-label">
            Confirm Password
          </label>
        </div>
      </fieldset>
      <button className="primary-btn">Ready!</button>
    </form>
  )
}
