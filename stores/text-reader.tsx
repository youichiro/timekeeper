import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TextReader } from '../interfaces'

const initialState: TextReader = {
  open: false,
  text: '',
}

const textReaderSlice = createSlice({
  name: 'text-reader',
  initialState,
  reducers: {
    openTextReaderDialog(state, actions: PayloadAction<string>) {
      const text = actions.payload
      state.text = text
      state.open = true
    },
    closeTextReaderDialog(state) {
      state.open = false
    },
    setTextReaderText(state, actions: PayloadAction<string>) {
      const text = actions.payload
      state.text = text
    },
  },
})

export const {
  openTextReaderDialog,
  closeTextReaderDialog,
  setTextReaderText,
} = textReaderSlice.actions
export default textReaderSlice.reducer
