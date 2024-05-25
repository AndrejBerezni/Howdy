import { useState, ChangeEvent, useEffect, useCallback } from 'react'
import { FaSearch } from 'react-icons/fa'
import { TiDelete } from 'react-icons/ti'
import { useDispatch } from 'react-redux'
import useSearch from '../../../hooks/useSearch'
import { clearSearch } from '../../../store/search'

export default function SearchBar() {
  const dispatch = useDispatch()
  const { debouncedSearch } = useSearch()
  const [input, setInput] = useState<string>('')

  //since handleClear is dependency of useEffect, it will trigger it on every render if not wrapped in useCallback
  const handleClear = useCallback(() => {
    setInput('')
    dispatch(clearSearch())
  }, [dispatch])

  //if user manually deletes input, hide results and get back to previous view (chats or friends)
  useEffect(() => {
    if (input === '') {
      handleClear()
    }
  }, [input, handleClear])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchInput = event.target.value
    setInput(searchInput)
    // if (searchInput.length > 1) {
    debouncedSearch(searchInput)
    // }
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
