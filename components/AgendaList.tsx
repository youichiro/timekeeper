import React from 'react'
import { List } from '@material-ui/core'
import AgendaListItem from './AgendaListItem'
import { Agenda, BlockTime } from '../interfaces'

const AgendaList: React.FC = () => {
  const defaultBlockTime: BlockTime = {
    hours: 0,
    minutes: 0,
    seconds: 10,
  }
  const agendaList: Agenda[] = [
    { id: 1, name: 'アジェンダ1', blockTime: defaultBlockTime },
    { id: 2, name: 'アジェンダ2', blockTime: defaultBlockTime },
    { id: 3, name: 'アジェンダ3', blockTime: defaultBlockTime },
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
