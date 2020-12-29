import React from 'react'
import { List } from '@material-ui/core'
import AgendaListItem from './AgendaListItem'
import { Agenda } from '../interfaces'

const AgendaList: React.FC = () => {
  const agendaList: Agenda[] = [
    { name: 'アジェンダ1', time: '05:00' },
    { name: 'アジェンダ2', time: '10:00' },
    { name: 'アジェンダ3', time: '00:30' },
  ]

  const listItems = agendaList.map((agenda, index) => (
    <AgendaListItem agenda={agenda} key={index} />
  ))

  return (
    <div>
      <h2>AgendaList</h2>
      <List>{listItems}</List>
    </div>
  )
}

export default AgendaList
