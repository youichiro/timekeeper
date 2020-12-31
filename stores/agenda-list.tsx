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
  { id: 1, name: 'アジェンダ1', blockTime: defaultBlockTime, time: totalTime },
  { id: 2, name: 'アジェンダ2', blockTime: defaultBlockTime, time: totalTime },
  { id: 3, name: 'アジェンダ3', blockTime: defaultBlockTime, time: totalTime },
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
  },
})

export const { updateAgenda } = agendaListSlice.actions
export default agendaListSlice.reducer
