import clsx from 'clsx'
import MenuItemFriendRequests from './MenuItemFriendRequests'
import MenuItemLogoutButton from './MenuItemLogoutButton'
import MenuItemProfile from './MenuItemProfile'
import MenuItemStatusSelect from './MenuItemStatusSelect'
import MenuItemToggleMenu from './MenuItemToggleMenu'

//each items in this menu has unique functionality and dependencies, so it was no use in putting them in array and then mapping over it to generate <li>s

export default function MenuItemsList({
  toggleMenu,
  menuOpen,
}: {
  toggleMenu: () => void
  menuOpen: boolean
}) {
  return (
    <ul
      className={clsx(
        'w-full h-full absolute top-0 sm:rounded-tl-lg pt-4 font-bold items-center justify-between font-montserrat tracking-wider flex origin-left duration-500 bg-background dark:bg-backgroundDark',
        {
          'right-0': menuOpen,
          'right-[80%]': !menuOpen,
        }
      )}
    >
      <MenuItemProfile />
      <MenuItemFriendRequests />
      <MenuItemStatusSelect />
      <MenuItemLogoutButton />
      <MenuItemToggleMenu toggleMenu={toggleMenu} menuOpen={menuOpen} />
    </ul>
  )
}
