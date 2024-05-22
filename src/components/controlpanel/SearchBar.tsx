import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { TiDelete } from 'react-icons/ti'

export default function SearchBar() {
  const [input, setInput] = useState<string>('')

  return (
    <div className="w-full px-2 sm:px-4 flex relative pt-5 pb-4">
      <FaSearch className="text-primary text-2xl absolute top-7 left-6" />
      {input && (
        <button
          type="button"
          className="text-primary text-2xl absolute top-7 right-6 hover:scale-125 duration-150 hover:text-background dark:hover:text-backgroundDark"
        >
          <TiDelete onClick={() => setInput('')} />
        </button>
      )}
      <input
        type="text"
        name="search"
        id="search-bar"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search users or chats"
        className="border-box flex-1 shadow-md h-[40px] border-2 border-secondary focus:outline-none focus:border-primary font-semibold rounded-3xl pl-12 pr-8 bg-secondary text-primary placeholder:text-primary"
      />
    </div>
  )
}
