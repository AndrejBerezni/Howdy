import { FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function MenuItemProfile() {
  return (
    <li className="w-1/4">
      <Link
        to="/profile"
        className="hover:text-primary justify-start flex flex-col items-center group gap-1"
      >
        <FiUser className="text-2xl border-2 rounded-lg p-0 border-text dark:border-textDark group-hover:scale-105 duration-150 group-hover:border-primary" />
        <p className="text-primary group-hover:visible invisible">Profile</p>
      </Link>
    </li>
  )
}
