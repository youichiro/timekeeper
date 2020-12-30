import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from 'react-redux'
import agendaListReducer from './agenda-list'
import selectedAgendaIdReducer from './selected-agenda-id'

const reducer = combineReducers({
  agendaList: agendaListReducer,
  selectedAgendaId: selectedAgendaIdReducer,
})

const store = configureStore({ reducer })

export default store

// 型情報付きのuseSelectorを定義
export type RootState = ReturnType<typeof store.getState>
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector
