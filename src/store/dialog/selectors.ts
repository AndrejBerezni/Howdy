import { get } from 'lodash'
import { RootState } from '..'

export const getDialog = (store: RootState) =>
  get(store, 'dialog', { type: '', message: '' })
