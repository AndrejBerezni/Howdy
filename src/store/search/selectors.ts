import { get } from 'lodash'
import { RootState } from '..'

export const getUsersSearchResults = (store: RootState) =>
  get(store, 'search.usersResults', [])

export const getShowResults = (store: RootState) =>
  get(store, 'search.showResults', false)

export const getResultsLoading = (store: RootState) =>
  get(store, 'search.resultsLoading', false)

export const getSearchError = (store: RootState) =>
  get(store, 'search.searchError', null)

export const getSearchPage = (store: RootState) => get(store, 'search.page', 1)
