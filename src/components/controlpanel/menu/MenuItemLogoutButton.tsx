import { RiLogoutCircleRLine } from 'react-icons/ri'
import useLogout from '../../../hooks/useLogout'

export default function MenuItemLogoutButton() {
  const { logout } = useLogout()

  return (
    <li className="w-1/5 flex justify-center">
      <button
        type="button"
        onClick={logout}
        className="hover:text-primary justify-start flex flex-col items-center group sm:text-base text-xs gap-1"
      >
        <RiLogoutCircleRLine className="text-2xl group-hover:scale-105 duration-150" />
        <p className="group-hover:visible invisible text-primary">Logout</p>
      </button>
    </li>
  )
}
