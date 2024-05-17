import { Link } from 'react-router-dom'

export default function LoginAdditionalOptions() {
  return (
    <>
      <div className="w-full flex px-2 items-center text-lg md:text-xl text-primary uppercase gap-3 font-bold before:block before:h-[3px] before:flex-1 before:bg-primary after:block after:h-[3px] after:flex-1 after:bg-primary hover:cursor-default">
        <p className="mx-6">or</p>
      </div>
      <Link
        to="http://localhost:3000/api/v1/auth/discord/login"
        className="secondary-btn w-[calc(100%-1rem)] text-center"
      >
        Continue with Discord
      </Link>
      <p className="md:text-lg text-text dark:text-textDark">
        Don't have an account?
        <Link
          to="/register"
          className="ml-2 font-bold text-primary hover:text-accent duration-75"
        >
          Sign up
        </Link>
      </p>
    </>
  )
}
