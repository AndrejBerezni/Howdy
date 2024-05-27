import { createSlice } from '@reduxjs/toolkit'

interface IDialogState {
  type: 'info' | 'error' | ''
  message: string
}

const initialState: IDialogState = {
  type: '',
  message: '',
}

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    showDialog: (state, action) => {
      state.type = action.payload.type
      state.message = action.payload.message
    },
    hideDialog: () => initialState,
  },
})

export const { showDialog, hideDialog } = dialogSlice.actions

export default dialogSlice.reducer
