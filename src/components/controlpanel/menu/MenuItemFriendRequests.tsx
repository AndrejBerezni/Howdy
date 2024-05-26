import { FiUserPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function MenuItemFriendRequests() {
  return (
    <li className="w-1/4">
      <Link
        to="/requests"
        className="hover:text-primary relative group flex flex-col items-center group gap-1"
      >
        <FiUserPlus className="text-2xl p-0 border-text dark:border-textDark border-2 rounded-lg group-hover:scale-105 duration-150 group-hover:border-primary" />
        <p className="group-hover:visible invisible text-primary">Requests</p>

        {/* Display number of friend requests received: */}
        <div className="absolute bottom-[90%] left-[50%] rounded-full hover:cursor-default bg-primary w-fit min-w-[15px] max-h-[15px] flex items-center justify-center p-1 text-xs font-extrabold text-background dark:text-backgroundDark">
          99+
        </div>
      </Link>
    </li>
  )
}
