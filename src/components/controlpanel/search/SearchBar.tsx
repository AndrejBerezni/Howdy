import { ChangeEvent, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { TiDelete } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'
import useSearch from '../../../hooks/useSearch'
import { clearSearch, setSearchInput } from '../../../store/search'
import { getSearchInput } from '../../../store/search/selectors'

export default function SearchBar() {
  const dispatch = useDispatch()
  const { debouncedSearch } = useSearch()
  const input = useSelector(getSearchInput)

  //if user manually deletes input, hide results and get back to previous view (chats or friends)
  useEffect(() => {
    if (input === '') {
      dispatch(clearSearch())
    }
  }, [input, dispatch])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchInput = event.target.value
    dispatch(setSearchInput(searchInput))
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
          <TiDelete onClick={() => dispatch(clearSearch())} />
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
