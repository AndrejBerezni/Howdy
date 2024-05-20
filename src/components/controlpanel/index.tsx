import Menu from './menu'

export default function ControlPanel() {
  return (
    <section className="w-screen h-full overflow-x-hidden sm:w-1/2 lg:w-1/3 sm:rounded-l-lg sm:border-2 dark:border-none relative bg-background dark:bg-backgroundDark">
      <Menu />
    </section>
  )
}
