import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../compiler/interfaces'

interface ISearchState {
  usersResults: IUser[]
  showResults: boolean
  resultsLoading: boolean
  searchError: string | null
  page: number
}

const initialState: ISearchState = {
  usersResults: [],
  showResults: false,
  resultsLoading: false,
  searchError: null,
  page: 1,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setUsersResults: (state, action) => {
      state.usersResults = action.payload
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
    clearSearch: () => initialState,
  },
})

export const {
  setUsersResults,
  setShowResults,
  setResultsLoading,
  setSearchError,
  setSearchPage,
  clearSearch,
} = searchSlice.actions

export default searchSlice.reducer
