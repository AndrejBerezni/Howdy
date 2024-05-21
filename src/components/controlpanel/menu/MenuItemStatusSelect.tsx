import { useMemo, useState } from 'react'
import clsx from 'clsx'
import { FiUserCheck, FiUserMinus, FiUserX } from 'react-icons/fi'
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md'

export default function MenuItemStatusSelect() {
  const [status, setStatus] = useState<number>(0)
  const statuses = ['online', 'busy', 'offline']

  const statusIcons = useMemo(
    () => ({
      online: (
        <FiUserCheck className="bg-statusOnline text-background dark:text-backgroundDark text-3xl border-2 rounded-lg p-1 border-statusOnline" />
      ),
      offline: (
        <FiUserX className="bg-textSecondary text-background dark:text-backgroundDark text-3xl border-2 rounded-lg p-1 border-textSecondary" />
      ),
      busy: (
        <FiUserMinus className="bg-accent text-background dark:text-backgroundDark text-3xl border-2 rounded-lg p-1 border-accent" />
      ),
    }),
    []
  )

  const changeStatus = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      status > 0
        ? setStatus((prev) => prev - 1)
        : setStatus(statuses.length - 1)
    } else if (direction === 'right') {
      status < statuses.length - 1
        ? setStatus((prev) => prev + 1)
        : setStatus(0)
    }
  }

  return (
    <li className="group hover:cursor-default flex flex-col items-center sm:text-base text-xs">
      <div className="flex items-center justify-between">
        <button
          className="hover:scale-125 duration-150"
          onClick={() => changeStatus('left')}
        >
          <MdArrowBackIos />
        </button>
        {statusIcons[statuses[status] as keyof typeof statusIcons]}
        <button
          className="hover:scale-125 duration-150"
          onClick={() => changeStatus('right')}
        >
          <MdArrowForwardIos />
        </button>
      </div>
      {/* <select
        name="status"
        onChange={(e) => handleStatusChange(e)}
        className={clsx(
          'bg-background dark:bg-backgroundDark border-none font-bold hover:cursor-pointer my-[1px]',
          {
            'text-statusOnline': status === 'online',
            'text-accent': status === 'busy',
            'text-textSecondary': status === 'offline',
          }
        )}
      >
        <option value="online" className="text-statusOnline">
          online
        </option>
        <option value="offline" className="text-textSecondary">
          offline
        </option>
        <option value="busy" className="text-accent">
          busy
        </option>
      </select> */}
      <p
        className={clsx('capitalize', {
          'text-statusOnline': statuses[status] === 'online',
          'text-accent': statuses[status] === 'busy',
          'text-textSecondary': statuses[status] === 'offline',
        })}
      >
        {statuses[status]}
      </p>
    </li>
  )
}
