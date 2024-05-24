import { FiUserPlus } from 'react-icons/fi'

export default function SearchResultAddFriendButton() {
  return (
    <button className="group flex flex-col items-center hover:text-secondary duration-150">
      <FiUserPlus className=" text-3xl" />
      <p className="text-xs invisible group-hover:visible text-nowrap">
        Add friend
      </p>
    </button>
  )
}
