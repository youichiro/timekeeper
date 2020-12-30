import React, { createContext, useState } from 'react'
import { List } from '@material-ui/core'
import AgendaListItem from './AgendaListItem'
import AgendaForm from './AgendaForm'
import { Agenda, BlockTime } from '../interfaces'

export const AgendaListContext = createContext(
  {} as {
    agendaList: Agenda[]
    setAgendaList: (agendaList: Agenda[]) => void
  }
)

const AgendaList: React.FC = () => {
  const defaultBlockTime: BlockTime = {
    hours: 0,
    minutes: 0,
    seconds: 10,
  }
  const initialagendaList: Agenda[] = [
    { id: 1, name: 'アジェンダ1', blockTime: defaultBlockTime },
    { id: 2, name: 'アジェンダ2', blockTime: defaultBlockTime },
    { id: 3, name: 'アジェンダ3', blockTime: defaultBlockTime },
  ]
  const [agendaList, setAgendaList] = useState(initialagendaList)

  const [selectedAgendaId, setSelectedAgendaId] = useState(
    null as number | null
  )
  const handleSetSelectedAgendaId = (id: number | null): void => {
    setSelectedAgendaId(id)
  }

  const listItems = agendaList.map((agenda) =>
    selectedAgendaId !== null && agenda.id === selectedAgendaId ? (
      <AgendaListContext.Provider value={{ agendaList, setAgendaList }}>
        <AgendaForm
          key={agenda.id}
          agenda={agenda}
          handleClick={handleSetSelectedAgendaId}
        />
      </AgendaListContext.Provider>
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
