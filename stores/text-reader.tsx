import { createSlice } from '@reduxjs/toolkit'

const textReaderSlice = createSlice({
  name: 'text-reader',
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
} = textReaderSlice.actions
export default textReaderSlice.reducer
