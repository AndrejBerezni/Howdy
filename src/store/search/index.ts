import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../compiler/interfaces'

interface ISearchState {
  searchInput: ''
  usersResults: IUser[]
  showResults: boolean
  resultsLoading: boolean
  searchError: string | null
  page: number
  allResultsDisplayed: boolean
}

const initialState: ISearchState = {
  searchInput: '',
  usersResults: [],
  showResults: false,
  resultsLoading: false,
  searchError: null,
  page: 1,
  allResultsDisplayed: false,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchInput: (state, action) => {
      state.searchInput = action.payload
    },
    setUsersResults: (state, action) => {
      state.usersResults = action.payload
    },
    addUsersResults: (state, action) => {
      state.usersResults.push(...action.payload)
    },
    setShowResults: (state, action) => {
      state.showResults = action.payload
    },
    setResultsLoading: (state, action) => {
      state.resultsLoading = action.payload
    },
    setSearchError: (state, action) => {
      state.searchError = action.payload
    },
    setSearchPage: (state, action) => {
      state.page = action.payload
    },
    setAllResultsDisplayed: (state, action) => {
      state.allResultsDisplayed = action.payload
    },
    clearSearch: () => initialState,
  },
})

export const {
  setSearchInput,
  setUsersResults,
  addUsersResults,
  setShowResults,
  setResultsLoading,
  setSearchError,
  setSearchPage,
  setAllResultsDisplayed,
  clearSearch,
} = searchSlice.actions

export default searchSlice.reducer
