import UserProfilePicture from '../UserProfilePicture'

export default function OnlineUsersList() {
  const placeholdersArray = Array.from({ length: 20 }, (_, index) => index)
  return (
    <ul className="flex overflow-x-scroll gap-2 justify-start px-4 py-2 scrollbar-thin scrollbar-thumb-secondary scrollbar-track-transparent">
      {placeholdersArray.map((placeholder) => (
        <li key={`${placeholder}-placeholder`}>
          <UserProfilePicture status="online" />
        </li>
      ))}
    </ul>
  )
}
