import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@material-ui/core'

import AgendaListItem from './AgendaListItem'
import AgendaForm from './AgendaForm'
import AddButton from './buttons/AddButton'
import { useSelector } from '../../stores'
import { updateAgendaStates } from '../../stores/agenda-list'
import { displayTime } from '../../utils/calc-date'

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

  const addButtonListItem = (
    <ListItem>
      <ListItemText style={{ textAlign: 'center' }}>
        <AddButton iconSize={30} />
      </ListItemText>
    </ListItem>
  )

  return (
    <div style={{ height: '100%' }}>
      <div style={{ height: '10%' }}>
        <Grid container spacing={3} alignItems="flex-end">
          <Grid item xs={6}>
            <Typography variant="h4">アジェンダ</Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right', paddingRight: 78 }}>
            <Typography variant="subtitle1">
              合計: {displayTime(counter.total)}
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Paper variant="outlined" style={{ height: '90%', overflowY: 'auto' }}>
        <List>
          {listItems}
          {addButtonListItem}
        </List>
      </Paper>
    </div>
  )
}

export default AgendaList
