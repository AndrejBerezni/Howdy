import { useState } from 'react'
import { useSelector } from 'react-redux'
import ListSelectButtons from './ListSelectButtons'
import Menu from './menu'
import OnlineUsersList from './OnlineUsersList'
import SearchBar from './search/SearchBar'
import SearchResultsList from './search/SearchResultsList'
import UserCard from './UserCard'
import { getSearchError, getShowResults } from '../../store/search/selectors'
import { getFriends } from '../../store/user/selectors'

export default function ControlPanel() {
  const showResults = useSelector(getShowResults)
  const searchError = useSelector(getSearchError)
  const friends = useSelector(getFriends)

  const [listInView, setListInView] = useState<'chats' | 'friends'>('chats')

  let listContent

  if (listInView === 'chats') {
    listContent = <p>chats - to be implemented</p>
  } else if (listInView === 'friends') {
    listContent = friends.map((friend) => (
      <UserCard
        key={`${friend._id}-friend-list-item`}
        user={friend}
        isFriend={true}
      />
    ))
  } else {
    listContent = null
  }

  return (
    <section className="w-screen h-full flex flex-col overflow-x-hidden sm:w-1/2 lg:w-1/3 sm:rounded-l-lg sm:border-2 dark:border-none bg-background dark:bg-backgroundDark">
      <Menu />
      <SearchBar />
      <OnlineUsersList />
      <ListSelectButtons
        listInView={listInView}
        setListInView={(list: 'chats' | 'friends') => setListInView(list)}
      />
      <div className="flex-1 relative">
        {(showResults || searchError) && <SearchResultsList />}
        <ul className="control-panel-list">{listContent}</ul>
      </div>
    </section>
  )
}
