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
    startCount(state, action: PayloadAction<{ intervalID: number }>) {
      state.isStarted = true
      state.intervalID = action.payload.intervalID
    },
    stopCount(state) {
      if (state.intervalID) {
        window.clearInterval(state.intervalID)
      }
      state.isStarted = false
    },
    updateCount(state) {
      state.time += 1
    },
    resetCount(state) {
      if (state.intervalID) {
        window.clearInterval(state.intervalID)
      }
      state.isStarted = false
      state.intervalID = null
      state.time = 0
    },
  },
})

export const {
  startCount,
  stopCount,
  updateCount,
  resetCount,
} = counterSlice.actions
export default counterSlice.reducer
