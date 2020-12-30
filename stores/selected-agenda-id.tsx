import { createSlice } from '@reduxjs/toolkit'

const initialState: number | null = null

const selectedAgendaIdSlice = createSlice({
  name: 'selectedAgendaId',
  initialState,
  reducers: {
    setSelectedAgendaId(_, action) {
      return action.payload.id
    },
  },
})

export const { setSelectedAgendaId } = selectedAgendaIdSlice.actions
export default selectedAgendaIdSlice.reducer
