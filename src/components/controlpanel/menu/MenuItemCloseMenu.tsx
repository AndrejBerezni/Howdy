import { RiCloseLargeLine } from 'react-icons/ri'

export default function MenuItemCloseMenu({
  closeMenu,
}: {
  closeMenu: () => void
}) {
  return (
    <li>
      <button
        className="group hover:text-primary duration-300 flex flex-col items-center sm:text-base text-xs"
        onClick={closeMenu}
      >
        <RiCloseLargeLine className="text-3xl" />
        <p className="group-hover:visible invisible">Close</p>
      </button>
    </li>
  )
}
