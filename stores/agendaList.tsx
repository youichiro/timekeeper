import { createSlice } from '@reduxjs/toolkit'
import { Agenda, BlockTime } from '../interfaces'

const defaultBlockTime: BlockTime = {
  hours: 0,
  minutes: 0,
  seconds: 10,
}
const initialState: Agenda[] = [
  { id: 1, name: 'アジェンダ1', blockTime: defaultBlockTime },
  { id: 2, name: 'アジェンダ2', blockTime: defaultBlockTime },
  { id: 3, name: 'アジェンダ3', blockTime: defaultBlockTime },
]

const agendaListSlice = createSlice({
  name: 'agendaList',
  initialState,
  reducers: {
    updateAgenda(state, action) {
      const { id, name, blockTime } = action.payload
      const agenda = state.find((agenda) => agenda.id === id)
      if (agenda) {
        agenda.name = name
        agenda.blockTime = blockTime
      }
    },
  },
})

export const { updateAgenda } = agendaListSlice.actions
export default agendaListSlice.reducer
