import { Link } from 'react-router-dom'
import LogoWithName from '../components/LogoWithName'

export default function NotFoundPage() {
  return (
    <>
      <LogoWithName />
      <h2 className="text-lg mt-4 mb-12 md:text-2xl font-semibold">
        Ooops! The page you are looking for could not be found.
      </h2>
      <Link to="/" className="primary-btn">
        Back to home page
      </Link>
    </>
  )
}
