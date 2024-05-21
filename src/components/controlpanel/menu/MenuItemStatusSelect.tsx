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
        <FiUserCheck className="bg-statusOnline text-background dark:text-backgroundDark text-2xl border-2 rounded-lg p-0 border-statusOnline" />
      ),
      offline: (
        <FiUserX className="bg-textSecondary text-background dark:text-backgroundDark text-2xl border-2 rounded-lg p-0 border-textSecondary" />
      ),
      busy: (
        <FiUserMinus className="bg-accent text-background dark:text-backgroundDark text-2xl border-2 rounded-lg p-0 border-accent" />
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
    <li className="group hover:cursor-default flex flex-col items-center sm:text-base text-xs gap-1 w-1/5">
      <div className="flex items-center justify-between gap-1">
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
      <p
        className={clsx('capitalize invisible group-hover:visible', {
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
