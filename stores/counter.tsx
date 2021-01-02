import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Counter } from '../interfaces'

const initialState: Counter = {
  isStarted: false,
  time: 0,
  intervalID: null,
  total: 0,
  isFinished: false,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    startCount(state, action: PayloadAction<{ intervalID: number }>) {
      state.isStarted = true
      state.intervalID = action.payload.intervalID
      state.isFinished = false
    },
    stopCount(state) {
      if (state.intervalID) {
        window.clearInterval(state.intervalID)
      }
      state.isStarted = false
    },
    updateCount(state) {
      state.time += 1
      // totalに達したらカウンターを止める
      if (state.total > 0 && state.time >= state.total) {
        if (state.intervalID) {
          window.clearInterval(state.intervalID)
        }
        state.isStarted = false
        state.isFinished = true
        state.intervalID = null
      }
    },
    resetCount(state) {
      if (state.intervalID) {
        window.clearInterval(state.intervalID)
      }
      state.isStarted = false
      state.intervalID = null
      state.time = 0
      state.isFinished = false
    },
    setTotal(state, action: PayloadAction<{ total: number }>) {
      state.total = action.payload.total
    },
  },
})

export const {
  startCount,
  stopCount,
  updateCount,
  resetCount,
  setTotal,
} = counterSlice.actions
export default counterSlice.reducer
