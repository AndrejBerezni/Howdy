import { debounce } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { IUser } from '../compiler/interfaces'
import {
  setUsersResults,
  addUsersResults,
  setShowResults,
  setResultsLoading,
  setSearchError,
  setSearchPage,
  setAllResultsDisplayed,
} from '../store/search'
import { getSearchPage } from '../store/search/selectors'
import { getUserInfo } from '../store/user/selectors'
import generateRequestHeaders from '../utils/generateRequestHeaders'

export default function useSearch() {
  const dispatch = useDispatch()
  const user = useSelector(getUserInfo)
  const page = useSelector(getSearchPage)
  const headers = generateRequestHeaders()

  const debouncedSearch = debounce(async (input: string) => {
    try {
      dispatch(setResultsLoading(true))
      dispatch(setSearchPage(1))

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

      const results = searchResults.results.filter(
        (result: IUser) => result._id !== user?._id
      ) // filter to don't show user to itself

      //checking length after filtering because current user might be among results and then we will have 4 results displayed with 'load more' button:
      if (results.length < 5) {
        dispatch(setAllResultsDisplayed(true))
      }

      dispatch(setUsersResults(results))
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

  const loadMoreResults = async (input: string) => {
    try {
      const newPage = page + 1
      dispatch(setSearchPage(newPage))

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/users/search?query=${input}&page=${newPage}`,
        {
          headers,
        }
      )

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message)
      }

      const searchResults = await response.json()

      if (searchResults.numberOfResults < 5) {
        dispatch(setAllResultsDisplayed(true))
      }

      dispatch(
        addUsersResults(
          searchResults.results.filter(
            (result: IUser) => result._id !== user?._id
          )
        )
      )
    } catch (err) {
      if (err instanceof Error) {
        dispatch(setSearchError(err.message))
      } else {
        dispatch(setSearchError('Something went wrong'))
      }
    }
  }

  return { debouncedSearch, loadMoreResults }
}
