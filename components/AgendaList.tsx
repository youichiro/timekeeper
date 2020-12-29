import React from 'react'
import { List } from '@material-ui/core'
import AgendaListItem from './AgendaListItem'
import { Agenda } from '../interfaces'

const AgendaList: React.FC = () => {
  const agendaList: Agenda[] = [
    { name: 'アジェンダ1' },
    { name: 'アジェンダ2' },
    { name: 'アジェンダ3' },
  ]

  const listItems = agendaList.map((agenda, index) => (
    <AgendaListItem name={agenda.name} key={index} />
  ))

  return (
    <div>
      <h2>AgendaList</h2>
      <List>{listItems}</List>
    </div>
  )
}

export default AgendaList
