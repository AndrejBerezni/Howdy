import { Link } from 'react-router-dom'

//creating separate component to write logic for fetching and counting friend requests here

export default function MenuItemFriendRequests() {
  return (
    <li className="flex gap-3 items-center ">
      <Link to="/requests" className="hover:text-primary duration-150">
        Friend requests
      </Link>
      {/* Display number of friend requests received: */}
      <div className="rounded-full hover:cursor-default bg-primary mt-[2px] w-fit min-w-[20px] max-h-[20px] flex items-center justify-center p-1 text-sm font-extrabold text-background dark:text-backgroundDark">
        6
      </div>
    </li>
  )
}
