import LogoWithName from './LogoWithName'

export default function ChatPlaceholder() {
  return (
    <div className="sm:flex-1 hidden p-12 sm:flex flex-col justify-center items-center bg-background sm:rounded-r-lg sm:border-y-2 sm:border-r-2 dark:border-primary dark:bg-backgroundDark">
      <LogoWithName />
      <h1 className="mt-12 max-w-[400px] text-center tracking-wider lg:text-lg">
        Use the menu on the left to search for people or chats, and start the
        conversation!
      </h1>
    </div>
  )
}
