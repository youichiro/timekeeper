import { createSlice } from '@reduxjs/toolkit'

const initialState: boolean = false

const textReaderDialogSlice = createSlice({
  name: 'text-reader-dialog',
  initialState,
  reducers: {
    openTextReaderDialog() {
      return true
    },
    closeTextReaderDialog() {
      return false
    },
  },
})

export const {
  openTextReaderDialog,
  closeTextReaderDialog,
} = textReaderDialogSlice.actions
export default textReaderDialogSlice.reducer
