import { useSelector } from 'react-redux'
import SearchResultUser from './SearchResultUser'
import useSearch from '../../../hooks/useSearch'
import {
  getUsersSearchResults,
  getResultsLoading,
  getSearchError,
  getAllResultsDisplayed,
  getSearchInput,
} from '../../../store/search/selectors'
import { getFriends } from '../../../store/user/selectors'
import LoadMoreResultsButton from '../../buttons/LoadMoreResultsButton'
import Loader from '../../Loader'

export default function SearchResultsList() {
  const { loadMoreResults } = useSearch()
  const usersSearchResults = useSelector(getUsersSearchResults)
  const resultsLoading = useSelector(getResultsLoading)
  const searchError = useSelector(getSearchError)
  const allResultsDisplayed = useSelector(getAllResultsDisplayed)
  const friends: string[] = useSelector(getFriends)
  const input = useSelector(getSearchInput)

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
        <>
          {usersSearchResults.map((result) => (
            <SearchResultUser
              key={`${result._id}-search-result-user`}
              user={result}
              isFriend={friends.includes(result._id)}
            />
          ))}
          {allResultsDisplayed ? (
            <p className="text-center text-textSecondary">All Results Shown</p>
          ) : (
            <LoadMoreResultsButton handleClick={() => loadMoreResults(input)} />
          )}
        </>
      )}
    </ul>
  )
}
