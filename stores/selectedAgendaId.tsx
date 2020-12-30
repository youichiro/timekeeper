import { createSlice } from '@reduxjs/toolkit'

const initialState: number | null = null

const selectedAgendaIdSlice = createSlice({
  name: 'selectedAgendaId',
  initialState,
  reducers: {
    setSelectedAgendaId(_, action) {
      const { id } = action.payload
      return id
    },
  },
})

export const { setSelectedAgendaId } = selectedAgendaIdSlice.actions
export default selectedAgendaIdSlice.reducer
