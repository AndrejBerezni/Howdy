import { Link } from 'react-router-dom'

export default function MenuItemProfile() {
  return (
    <li>
      <Link to="/profile" className="hover:text-primary duration-150">
        Profile
      </Link>
    </li>
  )
}
