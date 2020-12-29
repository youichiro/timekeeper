import React, { useState } from 'react'
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

  const [selectedAgenda, setSelectedAgenda] = useState({} as Agenda)
  const handleSetSelectedAgenda = (agenda: Agenda): void => {
    setSelectedAgenda(agenda)
  }

  const listItems = agendaList.map((agenda) => (
    <AgendaListItem
      key={agenda.id}
      agenda={agenda}
      handleClick={handleSetSelectedAgenda}
    />
  ))

  return (
    <div>
      <h2>AgendaList</h2>
      <List>{listItems}</List>
      <p>{selectedAgenda.name}</p>
    </div>
  )
}

export default AgendaList
