import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Counter } from '../interfaces'

const initialState: Counter = {
  isStarted: false,
  time: 0,
  intervalID: null,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    start(state, action: PayloadAction<{ intervalID: number }>) {
      state.isStarted = true
      state.intervalID = action.payload.intervalID
    },
    stop(state, action: PayloadAction<{ intervalID: number }>) {
      clearInterval(action.payload.intervalID)
      state.isStarted = false
      state.intervalID = null
    },
    update(state) {
      state.time += 1
    },
  },
})

export const { start, stop, update } = counterSlice.actions
export default counterSlice.reducer
