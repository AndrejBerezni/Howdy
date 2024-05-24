import { useState } from 'react'
import { useSelector } from 'react-redux'
import MenuItemsList from './MenuItemsList'
import { getUserInfo } from '../../../store/user/selectors'
import UserProfilePicture from '../../UserProfilePicture'

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const user = useSelector(getUserInfo)

  return (
    <menu className="h-[80px] px-4 w-full flex flex-row-reverse justify-between items-center relative">
      <UserProfilePicture status="online" img={user?.profilePicture} />
      <MenuItemsList
        menuOpen={menuOpen}
        toggleMenu={() => setMenuOpen((prev) => !prev)}
      />
    </menu>
  )
}
