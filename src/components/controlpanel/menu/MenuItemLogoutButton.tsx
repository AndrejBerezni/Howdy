import { RiLogoutCircleRLine } from 'react-icons/ri'
import useLogout from '../../../hooks/useLogout'

export default function MenuItemLogoutButton() {
  const { logout } = useLogout()

  return (
    <li>
      <button
        type="button"
        onClick={logout}
        className="hover:text-primary justify-start duration-150 flex flex-col items-center group sm:text-base text-xs"
      >
        <RiLogoutCircleRLine className="text-3xl" />
        <p className="group-hover:visible invisible">Logout</p>
      </button>
    </li>
  )
}
