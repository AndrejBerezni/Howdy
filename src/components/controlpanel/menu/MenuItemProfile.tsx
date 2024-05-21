import { FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function MenuItemProfile() {
  return (
    <li>
      <Link
        to="/profile"
        className="hover:text-primary justify-start flex flex-col items-center group sm:text-base text-xs"
      >
        <FiUser className="text-3xl border-2 rounded-lg p-1 border-text dark:border-textDark group-hover:scale-105 duration-150 group-hover:border-primary" />
        <p className="group-hover:visible invisible">Profile</p>
      </Link>
    </li>
  )
}
