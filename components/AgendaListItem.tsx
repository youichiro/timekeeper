import React from 'react'
import { ListItem, ListItemText, Grid } from '@material-ui/core'
import { Agenda } from '../interfaces/index'
import { convertBlockTimeToDisplayTime } from '../utils/calc-date'

type Props = {
  agenda: Agenda
}

const AgendaListItem: React.FC<Props> = ({ agenda }) => {
  const displayTime = convertBlockTimeToDisplayTime(agenda.blockTime)

  return (
    <ListItem button>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <ListItemText primary={agenda.name} />
        </Grid>
        <Grid item xs={6}>
          <ListItemText style={{ textAlign: 'right' }} primary={displayTime} />
        </Grid>
      </Grid>
    </ListItem>
  )
}

export default AgendaListItem
