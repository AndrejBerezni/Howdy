import { Link } from 'react-router-dom'

export default function OAuthLoginButton({
  authMethod,
  url,
  icon,
}: Readonly<{
  authMethod: string
  url: string
  icon: React.ReactNode
}>) {
  return (
    <Link
      to={url}
      className="group secondary-btn w-[calc(100%-1rem)] text-center flex items-center justify-center gap-4"
    >
      {icon}
      Continue with {authMethod}
    </Link>
  )
}
