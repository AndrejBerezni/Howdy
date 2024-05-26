import { FiUserX } from 'react-icons/fi'
export default function RemoveFriendButton() {
  return (
    <button className="group -mx-3 flex flex-col items-center hover:text-secondary duration-150">
      <FiUserX className=" text-3xl" />
      <p className="text-xs invisible group-hover:visible text-nowrap">
        Remove Friend
      </p>
    </button>
  )
}
