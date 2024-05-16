import { Link } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import LogoWithName from '../components/LogoWithName'

export default function LoginPage() {
  return (
    <section className="flex flex-col items-center gap-8 py-8">
      <LogoWithName />
      <LoginForm />
      <div className="w-full flex px-2 items-center text-lg md:text-xl text-primary uppercase gap-3 font-bold before:block before:h-[3px] before:flex-1 before:bg-primary after:block after:h-[3px] after:flex-1 after:bg-primary hover:cursor-default">
        <p className="mx-6">or</p>
      </div>
      <button className="secondary-btn w-[calc(100%-1rem)]">
        Continue with Google
      </button>
      <p className="md:text-lg text-text dark:text-textDark">
        Don't have an account?
        <Link
          to="/register"
          className="ml-2 font-bold text-primary hover:text-accent duration-75"
        >
          Sign up
        </Link>
      </p>
    </section>
  )
}
