import React from 'react'
import { List } from '@material-ui/core'
import AgendaListItem from './AgendaListItem'
import { Agenda } from '../interfaces'

const AgendaList: React.FC = () => {
  const agendaList: Agenda[] = [
    { id: 1, name: 'アジェンダ1', time: '05:00' },
    { id: 2, name: 'アジェンダ2', time: '10:00' },
    { id: 3, name: 'アジェンダ3', time: '00:30' },
  ]

  const listItems = agendaList.map((agenda) => (
    <AgendaListItem agenda={agenda} key={agenda.id} />
  ))

  return (
    <div>
      <h2>AgendaList</h2>
      <List>{listItems}</List>
    </div>
  )
}

export default AgendaList
