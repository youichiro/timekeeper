import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from 'react-redux'
import { save, load } from 'redux-localstorage-simple'

import agendaListReducer from './agenda-list'
import selectedAgendaIdReducer from './selected-agenda-id'
import counterReducer from './counter'
import themeReducer from './theme'

const reducer = combineReducers({
  agendaList: agendaListReducer,
  selectedAgendaId: selectedAgendaIdReducer,
  counter: counterReducer,
  theme: themeReducer,
})

const store = configureStore({
  reducer,
  preloadedState: load(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(save()),
})

export default store

// 型情報付きのuseSelectorを定義
export type RootState = ReturnType<typeof store.getState>
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector
