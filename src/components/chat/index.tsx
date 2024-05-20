import { useParams } from 'react-router'

export default function Chat() {
  const { chatId } = useParams()
  return (
    <div className="sm:flex-1 sm:static fixed top-0 left-0 h-screen sm:h-auto w-screen bg-background border-r-0 border-y-0 sm:rounded-r-lg sm:border-y-2 sm:border-r-2 dark:bg-backgroundDark dark:border-none">
      <h1>Chat ID: {chatId}</h1>
    </div>
  )
}
