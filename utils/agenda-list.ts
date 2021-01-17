import { Agenda } from '../interfaces'

export const calcAgendaListTotalTime = (agendaList: Agenda[]): number => {
  return agendaList.reduce((sum, agenda) => sum + agenda.time, 0)
}
