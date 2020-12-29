import React, { useState } from 'react'
import { List } from '@material-ui/core'
import AgendaListItem from './AgendaListItem'
import AgendaForm from './AgendaForm'
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

  const [selectedAgenda, setSelectedAgenda] = useState(null as Agenda | null)
  const handleSetSelectedAgenda = (agenda: Agenda | null): void => {
    setSelectedAgenda(agenda)
  }

  const listItems = agendaList.map((agenda) =>
    selectedAgenda !== null && agenda.id === selectedAgenda.id ? (
      <AgendaForm
        key={agenda.id}
        agenda={agenda}
        handleClick={handleSetSelectedAgenda}
      />
    ) : (
      <AgendaListItem
        key={agenda.id}
        agenda={agenda}
        handleClick={handleSetSelectedAgenda}
      />
    )
  )

  return (
    <div>
      <h2>AgendaList</h2>
      <List>{listItems}</List>
    </div>
  )
}

export default AgendaList
