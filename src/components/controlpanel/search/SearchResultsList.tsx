import { useSelector } from 'react-redux'
import { IUser } from '../../../compiler/interfaces'
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
import UserCard from '../UserCard'

export default function SearchResultsList() {
  const { loadMoreResults } = useSearch()
  const usersSearchResults = useSelector(getUsersSearchResults)
  const resultsLoading = useSelector(getResultsLoading)
  const searchError = useSelector(getSearchError)
  const allResultsDisplayed = useSelector(getAllResultsDisplayed)
  const friends: IUser[] = useSelector(getFriends)
  const input = useSelector(getSearchInput)

  let content

  if (resultsLoading) {
    content = (
      <div className="h-full flex justify-center items-center">
        <Loader size="button" />
      </div>
    )
  } else if (searchError) {
    content = (
      <p className="self-center font-semibold text-accent mt-12">
        {searchError}
      </p>
    )
  } else {
    content = (
      <>
        {usersSearchResults.map((result) => (
          <UserCard
            key={`${result._id}-search-result-user`}
            user={result}
            isFriend={friends.some((friend) => friend._id === result._id)}
          />
        ))}
        {allResultsDisplayed ? (
          <p className="text-center text-textSecondary">All Results Shown</p>
        ) : (
          <LoadMoreResultsButton handleClick={() => loadMoreResults(input)} />
        )}
      </>
    )
  }

  return (
    <ul className="z-10 absolute control-panel-list top-0 left-0">{content}</ul>
  )
}
