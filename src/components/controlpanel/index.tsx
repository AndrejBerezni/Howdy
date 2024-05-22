import { useState } from 'react'
import ListSelectButtons from './ListSelectButtons'
import Menu from './menu'
import OnlineUsersList from './OnlineUsersList'
import SearchBar from './SearchBar'
import { IUser } from '../../compiler/interfaces'

export default function ControlPanel() {
  const [searchResults, setSearchResults] = useState<IUser[]>([])
  const [showResults, setShowResults] = useState<boolean>(false)
  const [listInView, setListInView] = useState<'chats' | 'friends'>('chats')

  return (
    <section className="w-screen h-full overflow-x-hidden sm:w-1/2 lg:w-1/3 sm:rounded-l-lg sm:border-2 dark:border-none bg-background dark:bg-backgroundDark">
      <Menu />
      <SearchBar />
      <OnlineUsersList />
      <ListSelectButtons
        listInView={listInView}
        setListInView={(list: 'chats' | 'friends') => setListInView(list)}
      />
    </section>
  )
}
