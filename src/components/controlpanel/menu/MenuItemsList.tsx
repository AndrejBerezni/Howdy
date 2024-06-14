import clsx from 'clsx'
import MenuItemFriendRequests from './MenuItemFriendRequests'
import MenuItemLogoutButton from './MenuItemLogoutButton'
import MenuItemProfile from './MenuItemProfile'
import MenuItemStatusSelect from './MenuItemStatusSelect'

//each items in this menu has unique functionality and dependencies, so it was no use in putting them in array and then mapping over it to generate <li>s

export default function MenuItemsList({
  menuOpen,
}: Readonly<{ menuOpen: boolean }>) {
  return (
    <ul
      className={clsx(
        'w-4/5 h-full z-10 absolute top-0 pt-4 font-bold sm:text-sm text-xs items-center justify-between font-montserrat tracking-wider flex origin-right duration-1000 bg-background dark:bg-backgroundDark',
        {
          'right-[20%]': menuOpen,
          'right-full': !menuOpen,
        }
      )}
    >
      <MenuItemProfile />
      <MenuItemFriendRequests />
      <MenuItemStatusSelect />
      <MenuItemLogoutButton />
    </ul>
  )
}
