import clsx from 'clsx'
import { IoClose } from 'react-icons/io5'
import MenuItemFriendRequests from './MenuItemFriendRequests'
import MenuItemLogoutButton from './MenuItemLogoutButton'
import MenuItemProfile from './MenuItemProfile'
import MenuItemStatusSelect from './MenuItemStatusSelect'

//each items in this menu has unique functionality and dependencies, so it was no use in putting them in array and then mapping over it to generate <li>s

export default function MenuItemsList({
  closeMenu,
  menuOpen,
}: {
  closeMenu: () => void
  menuOpen: boolean
}) {
  return (
    <ul
      className={clsx(
        'w-full h-full absolute top-0 sm:rounded-l-lg font-bold font-montserrat tracking-wider flex flex-col gap-8 text-2xl origin-left duration-500 bg-background dark:bg-backgroundDark px-8 divide-textSecondary py-12',
        { 'right-0': menuOpen, 'right-full': !menuOpen }
      )}
    >
      <MenuItemProfile />
      <MenuItemFriendRequests />
      <MenuItemStatusSelect />
      <MenuItemLogoutButton />
      <button
        className="absolute right-4 top-4 text-3xl lg:text-4xl text-primary hover:-rotate-90 hover:text-secondary duration-300"
        onClick={closeMenu}
      >
        <IoClose />
      </button>
    </ul>
  )
}
