import { IUser } from '../../../compiler/interfaces'
import AddFriendButton from '../../buttons/AddFriendButton'
import MessageButton from '../../buttons/MessageButton'
import RemoveFriendButton from '../../buttons/RemoveFriendButton'
import UserProfilePicture from '../../UserProfilePicture'

export default function SearchResultUser({
  user,
  isFriend,
}: {
  user: IUser
  isFriend: boolean
}) {
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
      <div className="ml-auto h-full flex justify-end items-end">
        {isFriend ? (
          <>
            <MessageButton />
            <RemoveFriendButton />
          </>
        ) : (
          <AddFriendButton />
        )}
      </div>
    </li>
  )
}
