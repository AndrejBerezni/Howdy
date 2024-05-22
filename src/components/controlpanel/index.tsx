import { useState } from 'react'
import ListSelectButtons from './ListSelectButtons'
import Menu from './menu'
import OnlineUsersList from './OnlineUsersList'
import SearchBar from './search/SearchBar'
import SearchResultsList from './search/SearchResultsList'
import { IUser } from '../../compiler/interfaces'

export default function ControlPanel() {
  const [searchResults, setSearchResults] = useState<IUser[]>([])
  const [showResults, setShowResults] = useState<boolean>(true)
  const [resultsLoading, setResultsLoading] = useState<boolean>(false)
  const [searchError, setSearchError] = useState<string | null>(null)

  const [listInView, setListInView] = useState<'chats' | 'friends'>('chats')

  return (
    <section className="w-screen h-full flex flex-col overflow-x-hidden sm:w-1/2 lg:w-1/3 sm:rounded-l-lg sm:border-2 dark:border-none bg-background dark:bg-backgroundDark">
      <Menu />
      <SearchBar
        setSearchResults={(results: IUser[]) => setSearchResults(results)}
        setShowResults={(show: boolean) => setShowResults(show)}
        setResultsLoading={(isLoading: boolean) => setResultsLoading(isLoading)}
        setSearchError={(error: string | null) => setSearchError(error)}
      />
      <OnlineUsersList />
      <ListSelectButtons
        listInView={listInView}
        setListInView={(list: 'chats' | 'friends') => setListInView(list)}
      />
      <div className="flex-1 relative">
        {(showResults || searchError) && (
          <SearchResultsList
            searchResults={searchResults}
            resultsLoading={resultsLoading}
            searchError={searchError}
          />
        )}
      </div>
    </section>
  )
}
