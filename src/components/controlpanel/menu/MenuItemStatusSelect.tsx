import { useState } from 'react'
import clsx from 'clsx'
import { Status } from '../../../compiler/types'

export default function MenuItemStatusSelect() {
  const [status, setStatus] = useState<Status>('online')
  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value as Status)
  }

  return (
    <li className="hover:cursor-default flex gap-3 items-center">
      Status:
      <select
        name="status"
        onChange={(e) => handleStatusChange(e)}
        className={clsx(
          'bg-background dark:bg-backgroundDark border-none font-bold hover:cursor-pointer',
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
      </select>
    </li>
  )
}
