import { debounce } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { IUser } from '../compiler/interfaces'
import {
  setUsersResults,
  setShowResults,
  setResultsLoading,
  setSearchError,
} from '../store/search'
import { getUserInfo } from '../store/user/selectors'
import generateRequestHeaders from '../utils/generateRequestHeaders'

export default function useSearch() {
  const dispatch = useDispatch()
  const user = useSelector(getUserInfo)

  const debouncedSearch = debounce(async (input: string) => {
    try {
      dispatch(setResultsLoading(true))

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

      dispatch(
        setUsersResults(
          searchResults.results.filter(
            (result: IUser) => result._id !== user?._id
          ) // filter to don't show user to itself
        )
      )
      dispatch(setSearchError(null))
      dispatch(setShowResults(true))
      dispatch(setResultsLoading(false))
    } catch (err) {
      dispatch(setResultsLoading(false))
      if (err instanceof Error) {
        dispatch(setSearchError(err.message))
      } else {
        dispatch(setSearchError('Something went wrong'))
      }
    }
  }, 1000)

  return { debouncedSearch }
}
