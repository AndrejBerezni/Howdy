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
    <div className="relative lg:w-[75px] w-[50px] lg:h-[75px] h-[50px]">
      <img
        src={img ?? '/profile-img-placeholder.png'}
        className="lg:w-[75px] w-[50px] lg:h-[75px] h-[50px] rounded-full"
      />
      <div
        className={clsx(
          'absolute right-0 bottom-0 lg:w-[20px] w-[15px] lg:h-[20px] h-[15px] rounded-full border-2 border-background dark:border-backgroundDark',
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
