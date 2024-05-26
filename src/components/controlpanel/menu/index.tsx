import { useState } from 'react'
import { useSelector } from 'react-redux'
import MenuItemsList from './MenuItemsList'
import ToggleMenuButton from './ToggleMenuButton'
import { getUserInfo } from '../../../store/user/selectors'
import UserProfilePicture from '../../UserProfilePicture'

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const user = useSelector(getUserInfo)

  return (
    <menu className="h-[80px] pr-4 pl-2 w-full flex justify-between items-center relative">
      <UserProfilePicture status="online" img={user?.profilePicture} />
      <div className="mr-auto ml-2 flex items-start h-full flex-col justify-center overflow-x-hidden">
        <p>{user?.nickname}</p>
        {user?.firstName && user?.lastName && (
          <p className="text-nowrap text-secondary font-semibold">
            @{user.firstName} {user.lastName}
            {user.firstName?.length + user.lastName?.length > 25 ? '...' : ''}
          </p>
        )}
      </div>
      <ToggleMenuButton
        toggleMenu={() => setMenuOpen((prev) => !prev)}
        menuOpen={menuOpen}
      />
      <MenuItemsList menuOpen={menuOpen} />
    </menu>
  )
}
