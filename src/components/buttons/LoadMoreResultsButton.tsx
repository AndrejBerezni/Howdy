import { IoReload } from 'react-icons/io5'
export default function LoadMoreResultsButton({
  handleClick,
}: {
  handleClick: () => void
}) {
  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center gap-2 text-text hover:text-primary dark:text-textDark"
    >
      <IoReload />
      <p>Load More Results</p>
    </button>
  )
}
