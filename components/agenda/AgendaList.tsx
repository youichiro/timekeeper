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

  const lastListItem = (
    <ListItem>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <ListItemText style={{ textAlign: 'center' }}>
            <AddButton iconSize={20} />
          </ListItemText>
        </Grid>
        <Grid item xs={3} style={{ textAlign: 'right' }}>
          {counter.isStarted || counter.isFinished ? (
            <></>
          ) : (
            <Typography variant="subtitle2">
              合計: {displayTime(counter.total)}
            </Typography>
          )}
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </ListItem>
  )

  return (
    <div style={{ height: '100%', paddingBottom: 40 }}>
      <Grid
        container
        spacing={3}
        alignItems="flex-end"
        style={{ paddingBottom: 20 }}
      >
        <Grid item xs={6}>
          <Typography variant="h5">アジェンダ</Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right', paddingRight: 60 }}>
          {counter.isStarted || counter.isFinished ? (
            <Typography variant="subtitle1">
              全体: {displayTime(counter.total)}
            </Typography>
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
      <Paper variant="outlined" style={{ height: '100%', overflowY: 'auto' }}>
        <List>
          {listItems}
          {lastListItem}
        </List>
      </Paper>
    </div>
  )
}

export default AgendaList
