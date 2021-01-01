import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { List, ListItem, Paper, Typography } from '@material-ui/core'

import AgendaListItem from './AgendaListItem'
import AgendaForm from './AgendaForm'
import AgendaItemAddButton from './AgendaItemAddButton'
import { useSelector } from '../../stores'
import { updateAgendaStates } from '../../stores/agenda-list'

const AgendaList: React.FC = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)
  const agendaList = useSelector((state) => state.agendaList)
  const selectedAgendaId = useSelector((state) => state.selectedAgendaId)

  // counterを監視して、agenda.statusを更新する
  useEffect(() => {
    dispatch(updateAgendaStates({ time: counter.time }))
  }, [counter])

  const listItems = agendaList.map((agenda) =>
    selectedAgendaId !== null && agenda.id === selectedAgendaId ? (
      <AgendaForm key={agenda.id} agenda={agenda} />
    ) : (
      <AgendaListItem key={agenda.id} agenda={agenda} />
    )
  )

  return (
    <div style={{ height: '100%' }}>
      <Typography variant="h4" style={{ height: '10%' }}>
        アジェンダ
      </Typography>
      <Paper variant="outlined" style={{ height: '90%' }}>
        <List>
          {listItems}
          <ListItem>
            <AgendaItemAddButton />
          </ListItem>
        </List>
      </Paper>
    </div>
  )
}

export default AgendaList
