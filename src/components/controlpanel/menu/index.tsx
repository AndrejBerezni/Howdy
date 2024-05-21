import { useState } from 'react'
import MenuItemsList from './MenuItemsList'
import UserProfilePicture from '../../UserProfilePicture'

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <menu className="h-[80px] px-2 w-full flex flex-row-reverse justify-between items-center relative">
      <UserProfilePicture status="online" />
      <MenuItemsList
        menuOpen={menuOpen}
        toggleMenu={() => setMenuOpen((prev) => !prev)}
      />
    </menu>
  )
}
