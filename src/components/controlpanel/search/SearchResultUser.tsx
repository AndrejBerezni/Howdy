import { FiUserPlus } from 'react-icons/fi'
import { IUser } from '../../../compiler/interfaces'
import UserProfilePicture from '../../UserProfilePicture'

export default function SearchResultUser({ user }: { user: IUser }) {
  // to check if user is friend, when I implement friends functionality, and display appropriate buttons (add friend or message and remove friend)

  return (
    <li className="flex items-center pr-4 pb-2 border-b-[1px] gap-2 border-b-textSecondary">
      <UserProfilePicture
        img={user.profilePicture ?? '/profile-img-placeholder.png'}
        status="online"
      />
      <div className="overflow-x-hidden">
        <p className="font-bold text-nowrap">{user.nickname}</p>
        {(user.firstName || user.lastName) && (
          <p className="text-nowrap text-secondary font-semibold">
            @ {user.firstName} {user.lastName}
          </p>
        )}
      </div>
      <button className="group ml-auto flex flex-col items-center hover:text-secondary duration-150">
        <FiUserPlus className=" text-3xl" />
        <p className="text-xs invisible group-hover:visible">Add friend</p>
      </button>
    </li>
  )
}
