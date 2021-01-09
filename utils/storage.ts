import { Agenda } from '../interfaces/index'

const KEY = 'agendaList'

// localStorageにagendaListを保存する
export const saveAgendaList = (agendaList: Agenda[]): void => {
  localStorage.setItem(KEY, JSON.stringify(agendaList))
}

// localStorageからagendaListを取り出す
export const loadAgendaList = (): Agenda[] | null => {
  const item = localStorage.getItem(KEY)
  if (item === null) {
    return null
  }
  const parsedItem: Agenda[] = JSON.parse(item)
  // statusをwaitingに上書きする
  return parsedItem.map((agenda) => {
    return { ...agenda, status: 'waiting' }
  })
}
