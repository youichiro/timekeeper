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
    border: 10,
  },
  {
    id: 2,
    name: 'アジェンダ2',
    blockTime: defaultBlockTime,
    time: totalTime,
    border: 20,
  },
  {
    id: 3,
    name: 'アジェンダ3',
    blockTime: defaultBlockTime,
    time: totalTime,
    border: 30,
  },
]

type UpdateAgendaPayload = {
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
      state.forEach(
        (agenda) =>
          (agenda.border = state
            .filter((a) => a.id <= agenda.id)
            .reduce((sum, b) => sum + b.time, 0))
      )
    },
  },
})

export const { updateAgenda, updateAgendaBorders } = agendaListSlice.actions
export default agendaListSlice.reducer
