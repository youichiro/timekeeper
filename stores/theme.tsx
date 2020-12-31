import { createSlice } from '@reduxjs/toolkit'
import {Theme} from '../interfaces'

const initialState: Theme = 'dark'

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(_, action) {
      return action.payload.theme
    }
  }
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
