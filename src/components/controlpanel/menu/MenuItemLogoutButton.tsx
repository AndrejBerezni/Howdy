import useLogout from '../../../hooks/useLogout'

export default function MenuItemLogoutButton() {
  const { logout } = useLogout()

  return (
    <li>
      <button
        type="button"
        onClick={logout}
        className="hover:text-primary duration-150"
      >
        Logout
      </button>
    </li>
  )
}
