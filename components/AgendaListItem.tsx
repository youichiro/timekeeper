import React from 'react'
import { useDispatch } from 'react-redux'
import { ListItem, ListItemText, Grid } from '@material-ui/core'
import { Agenda } from '../interfaces/index'
import { convertBlockTimeToDisplayTime } from '../utils/calc-date'
import { setSelectedAgendaId } from '../stores/selected-agenda-id'

type Props = {
  agenda: Agenda
}

const AgendaListItem: React.FC<Props> = ({ agenda }) => {
  const dispatch = useDispatch()

  const onClickItem = (id: number) => {
    dispatch(setSelectedAgendaId({ id }))
  }

  const displayTime = convertBlockTimeToDisplayTime(agenda.blockTime)

  return (
    <ListItem button onClick={() => onClickItem(agenda.id)}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <ListItemText primary={agenda.name} />
        </Grid>
        <Grid item xs={6}>
          <ListItemText style={{ textAlign: 'right' }} primary={displayTime} />
          <p>
            {agenda.startTime} {agenda.endTime}
          </p>
        </Grid>
      </Grid>
    </ListItem>
  )
}

export default AgendaListItem
