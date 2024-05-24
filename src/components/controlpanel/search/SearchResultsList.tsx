import { useSelector } from 'react-redux'
import SearchResultUser from './SearchResultUser'
import { IUser } from '../../../compiler/interfaces'
import { getFriends } from '../../../store/user/selectors'
import Loader from '../../Loader'

export default function SearchResultsList({
  searchResults,
  resultsLoading,
  searchError,
}: {
  searchResults: IUser[]
  resultsLoading: boolean
  searchError: string | null
}) {
  const friends: string[] = useSelector(getFriends)

  return (
    <ul className="absolute w-full h-full top-0 left-0 flex-1 px-4 py-4 bg-background dark:bg-backgroundDark flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-track-transparent gap-4">
      {resultsLoading ? (
        <div className="h-full flex justify-center items-center">
          <Loader size="button" />
        </div>
      ) : searchError ? (
        <p className="self-center font-semibold text-accent mt-12">
          {searchError}
        </p>
      ) : (
        searchResults.map((result) => (
          <SearchResultUser
            key={`${result._id}-search-result-user`}
            user={result}
            isFriend={friends.includes(result._id)}
          />
        ))
      )}
    </ul>
  )
}
