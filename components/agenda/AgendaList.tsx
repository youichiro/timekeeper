import React from 'react'
import { List } from '@material-ui/core'

import AgendaListItem from './AgendaListItem'
import AgendaForm from './AgendaForm'
import { useSelector } from '../../stores'

const AgendaList: React.FC = () => {
  const agendaList = useSelector((state) => state.agendaList)
  const selectedAgendaId = useSelector((state) => state.selectedAgendaId)

  const listItems = agendaList.map((agenda) =>
    selectedAgendaId !== null && agenda.id === selectedAgendaId ? (
      <AgendaForm key={agenda.id} agenda={agenda} />
    ) : (
      <AgendaListItem key={agenda.id} agenda={agenda} />
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