import { useState, ChangeEvent, useEffect, useCallback } from 'react'
import { debounce } from 'lodash'
import { FaSearch } from 'react-icons/fa'
import { TiDelete } from 'react-icons/ti'
import { useSelector } from 'react-redux'
import { IUser } from '../../../compiler/interfaces'
import { getUserInfo } from '../../../store/user/selectors'
import generateRequestHeaders from '../../../utils/generateRequestHeaders'

export default function SearchBar({
  setSearchResults,
  setShowResults,
  setResultsLoading,
  setSearchError,
}: {
  setSearchResults: (results: IUser[]) => void
  setShowResults: (show: boolean) => void
  setResultsLoading: (isLoading: boolean) => void
  setSearchError: (error: string | null) => void
}) {
  const user = useSelector(getUserInfo)
  const [input, setInput] = useState<string>('')

  //since handleClear is dependency of useEffect, it will trigger it on every render if not wrapped in useCallback
  const handleClear = useCallback(() => {
    setInput('')
    setSearchError(null)
    setResultsLoading(false)
    setShowResults(false)
  }, [setSearchError, setResultsLoading, setShowResults])

  //if user manually deletes input, hide results and get back to previous view (chats or friends)
  useEffect(() => {
    if (input === '') {
      handleClear()
    }
  }, [input, handleClear])

  const debouncedSearch = debounce(async (input: string) => {
    try {
      setResultsLoading(true)

      const headers = generateRequestHeaders()
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/users/search?query=${input}`,
        {
          headers,
        }
      )

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message)
      }

      const searchResults = await response.json()

      if (searchResults.numberOfResults === 0) {
        throw new Error('No results to show')
      }

      setSearchResults(
        searchResults.results.filter(
          (result: IUser) => result._id !== user?._id
        ) // filter to don't show user to itself
      )
      setSearchError(null)
      setShowResults(true)
      setResultsLoading(false)
    } catch (err) {
      setResultsLoading(false)
      if (err instanceof Error) {
        setSearchError(err.message)
      } else {
        setSearchError('Something went wrong')
      }
    }
  }, 1000)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchInput = event.target.value
    setInput(searchInput)
    if (searchInput.length > 1) {
      debouncedSearch(searchInput)
    }
  }

  return (
    <div className="w-full px-2 sm:px-4 flex relative pt-5 pb-4">
      <FaSearch className="text-primary text-2xl absolute top-7 left-6" />
      {input && (
        <button
          type="button"
          className="text-primary text-2xl absolute top-7 right-6 hover:scale-125 duration-150 hover:text-background dark:hover:text-backgroundDark"
        >
          <TiDelete onClick={handleClear} />
        </button>
      )}
      <input
        type="text"
        name="search"
        id="search-bar"
        value={input}
        onChange={(e) => handleChange(e)}
        placeholder="Search users or chats"
        className="border-box flex-1 shadow-md h-[40px] border-2 border-secondary focus:outline-none focus:border-primary font-semibold rounded-3xl pl-12 pr-8 bg-secondary text-primary placeholder:text-primary"
      />
    </div>
  )
}
