import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Agenda, BlockTime } from '../interfaces'
import { convertSeconds } from '../utils/calc-date'

const defaultBlockTime: BlockTime = {
  hours: 0,
  minutes: 0,
  seconds: 10,
}
const totalTime = convertSeconds(defaultBlockTime)
const initialState: Agenda[] = [
  {
    id: 1,
    name: 'アジェンダ1',
    blockTime: defaultBlockTime,
    time: totalTime,
    startTime: 0,
    endTime: 10,
    status: 'waiting',
  },
  {
    id: 2,
    name: 'アジェンダ2',
    blockTime: defaultBlockTime,
    time: totalTime,
    startTime: 10,
    endTime: 20,
    status: 'waiting',
  },
  {
    id: 3,
    name: 'アジェンダ3',
    blockTime: defaultBlockTime,
    time: totalTime,
    startTime: 20,
    endTime: 30,
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
      const lastAgenda = state.slice(-1)[0]
      const time = convertSeconds(blockTime)
      const agenda: Agenda = {
        id,
        name,
        blockTime,
        time,
        startTime: lastAgenda.endTime,
        endTime: lastAgenda.endTime + time,
        status: 'waiting',
      }
      state.push(agenda)
    },
  },
})

export const {
  updateAgenda,
  updateAgendaBorders,
  updateAgendaStates,
  addAgenda,
} = agendaListSlice.actions
export default agendaListSlice.reducer
