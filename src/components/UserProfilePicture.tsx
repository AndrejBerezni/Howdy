import clsx from 'clsx'
import { Status } from '../compiler/types'

export default function UserProfilePicture({
  img,
  status,
}: {
  img?: string
  status: Status
}) {
  return (
    <div className="relative lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] lg:min-w-[60px] min-w-[50px] lg:min-h-[60px] min-h-[50px] drop-shadow-md">
      <img
        src={img ?? '/profile-img-placeholder.png'}
        alt="User profile picture"
        className="lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] lg:min-w-[60px] min-w-[50px] lg:min-h-[60px] min-h-[50px] rounded-full"
      />
      <div
        className={clsx(
          'absolute right-0 bottom-0 lg:w-[18px] w-[15px] lg:h-[18px] h-[15px] rounded-full border-2 border-background dark:border-backgroundDark',
          {
            'bg-statusOnline': status === 'online',
            'bg-accent': status === 'busy',
            'bg-textSecondary': status === 'offline',
          }
        )}
      ></div>
    </div>
  )
}
