import clsx from 'clsx'
import { RiCloseLargeLine } from 'react-icons/ri'

export default function MenuItemToggleMenu({
  toggleMenu,
  menuOpen,
}: {
  toggleMenu: () => void
  menuOpen: boolean
}) {
  return (
    <li className="w-1/5 flex justify-center">
      <button
        className="group hover:text-primary flex flex-col items-center sm:text-base text-xs gap-1"
        onClick={toggleMenu}
      >
        {menuOpen ? (
          <RiCloseLargeLine className="text-2xl group-hover:scale-105 duration-150" />
        ) : (
          <img src="/Logo-no-bg.png" className="flex-1 lg:h-[30px] h-[24px]" />
        )}
        <p
          className={clsx('', {
            'group-hover:visible invisible text-primary': menuOpen,
          })}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </p>
      </button>
    </li>
  )
}
