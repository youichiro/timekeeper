import React, { useState } from 'react'
import { List } from '@material-ui/core'

import AgendaListItem from './AgendaListItem'
import AgendaForm from './AgendaForm'
import { useSelector } from '../stores'

const AgendaList: React.FC = () => {
  const [selectedAgendaId, setSelectedAgendaId] = useState(
    null as number | null
  )
  const handleSetSelectedAgendaId = (id: number | null): void => {
    setSelectedAgendaId(id)
  }

  const agendaList = useSelector((state) => state.agendaList)

  const listItems = agendaList.map((agenda) =>
    selectedAgendaId !== null && agenda.id === selectedAgendaId ? (
      <AgendaForm
        key={agenda.id}
        agenda={agenda}
        handleClick={handleSetSelectedAgendaId}
      />
    ) : (
      <AgendaListItem
        key={agenda.id}
        agenda={agenda}
        handleClick={handleSetSelectedAgendaId}
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
