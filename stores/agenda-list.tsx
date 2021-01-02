import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Agenda, BlockTime } from '../interfaces'
import { convertSeconds } from '../utils/calc-date'

const defaultBlockTime: BlockTime = {
  hours: 0,
  minutes: 0,
  seconds: 30,
}
const initialState: Agenda[] = [
  {
    id: 1,
    name: '項目を入力してね',
    blockTime: defaultBlockTime,
    time: convertSeconds(defaultBlockTime),
    startTime: 0,
    endTime: 10,
    status: 'waiting',
  },
]

export type UpdateAgendaPayload = {
  id: number
  name: string
  blockTime: BlockTime
}

export type AddAgendaPayload = {
  id: number
  name: string
  blockTime: BlockTime
}

const agendaListSlice = createSlice({
  name: 'agendaList',
  initialState,
  reducers: {
    updateAgenda(state, action: PayloadAction<UpdateAgendaPayload>) {
      const { id, name, blockTime } = action.payload
      const agenda = state.find((agenda) => agenda.id === id)
      if (agenda) {
        agenda.name = name
        agenda.blockTime = blockTime
        agenda.time = convertSeconds(blockTime)
      }
    },
    updateAgendaBorders(state) {
      state.forEach((agenda) => {
        agenda.startTime = state
          .filter((a) => a.id < agenda.id)
          .reduce((sum, b) => sum + b.time, 0)
        agenda.endTime = state
          .filter((a) => a.id <= agenda.id)
          .reduce((sum, b) => sum + b.time, 0)
      })
    },
    updateAgendaStates(state, action: PayloadAction<{ time: number }>) {
      const { time } = action.payload
      state.forEach((agenda) => {
        // 1sからrunningとする
        if (agenda.startTime < time && time <= agenda.endTime) {
          agenda.status = 'running'
        } else if (time <= agenda.startTime) {
          agenda.status = 'waiting'
        } else {
          agenda.status = 'done'
        }
      })
    },
    addAgenda(state, action: PayloadAction<AddAgendaPayload>) {
      const { id, name, blockTime } = action.payload
      const lastAgenda = state.length > 0 ? state.slice(-1)[0] : null
      const time = convertSeconds(blockTime)
      const agenda: Agenda = {
        id,
        name,
        blockTime,
        time,
        startTime: lastAgenda ? lastAgenda.endTime : 0,
        endTime: lastAgenda ? lastAgenda.endTime + time : time,
        status: 'waiting',
      }
      state.push(agenda)
    },
    deleteAgenda(state, action: PayloadAction<{ id: number | null }>) {
      const { id } = action.payload
      if (id === null) {
        return
      }
      return state.filter((agenda) => agenda.id !== id)
    },
  },
})

export const {
  updateAgenda,
  updateAgendaBorders,
  updateAgendaStates,
  addAgenda,
  deleteAgenda,
} = agendaListSlice.actions
export default agendaListSlice.reducer
