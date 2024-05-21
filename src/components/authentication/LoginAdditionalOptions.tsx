import { useMemo } from 'react'
import { FaDiscord } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import OAuthLoginButton from './OAuthLoginButton'

export default function LoginAdditionalOptions() {
  const oAuthButtons = useMemo(
    () => [
      {
        authMethod: 'Discord',
        url: `${import.meta.env.VITE_API_BASE_URL}/auth/discord/login`,
        icon: (
          <FaDiscord className="md:text-3xl rounded-full bg-[#5865F2] group-hover:drop-shadow-[0_0_2px_#0A0606] group-hover:dark:drop-shadow-[0_0_2px_#F4EBEB] p-1 duration-150 text-white group-hover:scale-110" />
        ),
      },
      {
        authMethod: 'Google',
        url: `${import.meta.env.VITE_API_BASE_URL}/auth/google/login`,
        icon: (
          <FcGoogle className="md:text-3xl group-hover:drop-shadow-[0_0_2px_#0A0606] group-hover:dark:drop-shadow-[0_0_2px_#F4EBEB] group-hover:scale-110 duration-150" />
        ),
      },
    ],
    []
  )

  return (
    <>
      <div className="w-full flex px-2 items-center text-lg md:text-xl text-primary uppercase gap-3 font-bold before:block before:h-[3px] before:flex-1 before:bg-primary after:block after:h-[3px] after:flex-1 after:bg-primary hover:cursor-default">
        <p className="mx-6">or</p>
      </div>
      {oAuthButtons.map((btn) => (
        <OAuthLoginButton
          key={`${btn.authMethod}-oAuth-btn`}
          authMethod={btn.authMethod}
          url={btn.url}
          icon={btn.icon}
        />
      ))}
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
