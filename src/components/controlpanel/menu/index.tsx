import { useState } from 'react'
import MenuItemsList from './MenuItemsList'
import UserProfilePicture from '../../UserProfilePicture'

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <menu className="lg:h-[100px] h-[66px] p-2 w-full flex justify-between items-center relative">
      <button onClick={() => setMenuOpen(true)}>
        <img
          src="/Logo-no-bg.png"
          className="lg:w-[75px] w-[50px] lg:h-[75px] h-[50px]"
        />
      </button>
      <UserProfilePicture status="online" />
      <MenuItemsList menuOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
    </menu>
  )
}
