import { createSlice } from '@reduxjs/toolkit'

const textReaderDialogSlice = createSlice({
  name: 'text-reader-dialog',
  initialState: false,
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
