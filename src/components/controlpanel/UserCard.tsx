import { IUser } from '../../compiler/interfaces'
import AddFriendButton from '../buttons/AddFriendButton'
import MessageButton from '../buttons/MessageButton'
import RemoveFriendButton from '../buttons/RemoveFriendButton'
import UserProfilePicture from '../UserProfilePicture'

export default function UserCard({
  user,
  isFriend,
}: Readonly<{
  user: IUser
  isFriend: boolean
}>) {
  // to check if user is friend, when I implement friends functionality, and display appropriate buttons (add friend or message and remove friend)

  return (
    <li className="flex items-center pr-4 pb-2 gap-3">
      <UserProfilePicture
        img={user.profilePicture ?? '/profile-img-placeholder.png'}
        status={user.status}
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
