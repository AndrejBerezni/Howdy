import { useSelector } from 'react-redux'
import { getFriends } from '../../store/user/selectors'
import UserProfilePicture from '../UserProfilePicture'

export default function OnlineUsersList() {
  const friends = useSelector(getFriends).filter(
    (friend) => friend.status === 'online'
  )

  return (
    <ul className="flex overflow-x-auto mx-4 gap-2 justify-start px-4 py-2 scrollbar-thin scrollbar-thumb-secondary scrollbar-track-transparent">
      {friends.length > 0 ? (
        friends.map((friend) => (
          <li key={`${friend._id}-online-user`}>
            <UserProfilePicture status="online" />
          </li>
        ))
      ) : (
        <p className="text-center w-full my-2 text-textSecondary">
          No friends are online at the moment
        </p>
      )}
    </ul>
  )
}
