import clsx from 'clsx'
import MenuItemCloseMenu from './MenuItemCloseMenu'
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
        'w-full h-full absolute top-0 sm:rounded-tl-lg pt-2 font-bold items-center justify-around font-montserrat border-b-2 dark:border-none tracking-wider flex origin-left duration-500 bg-background dark:bg-backgroundDark divide-textSecondary',
        { 'right-0': menuOpen, 'right-full': !menuOpen }
      )}
    >
      <MenuItemProfile />
      <MenuItemFriendRequests />
      <MenuItemStatusSelect />
      <MenuItemLogoutButton />
      <MenuItemCloseMenu closeMenu={closeMenu} />
    </ul>
  )
}
