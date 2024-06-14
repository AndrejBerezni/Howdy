import clsx from 'clsx'
import { RiCloseLargeLine } from 'react-icons/ri'

export default function ToggleMenuButton({
  toggleMenu,
  menuOpen,
}: Readonly<{
  toggleMenu: () => void
  menuOpen: boolean
}>) {
  return (
    <li className="z-20 w-1/5 h-full flex justify-center items-center pt-4 font-bold sm:text-sm text-xs font-montserrat tracking-wider">
      <button
        className="group hover:text-primary flex flex-col items-center gap-1"
        onClick={toggleMenu}
      >
        {menuOpen ? (
          <RiCloseLargeLine className="text-2xl group-hover:scale-105 duration-150" />
        ) : (
          <img
            src="/Logo-no-bg.png"
            className="flex-1 lg:h-[30px] h-[24px]"
            alt="Howdy logo"
          />
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
