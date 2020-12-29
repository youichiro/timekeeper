import React from 'react'
import { Grid, ListItem, ListItemText } from '@material-ui/core'
import { convertBlockTimeToDisplayTime } from '../utils/calc-date'
import { Agenda } from '../interfaces/index'

type Props = {
  agenda: Agenda | null
}

const AgendaForm: React.FC<Props> = ({ agenda }) => {
  if (agenda === null) {
    return null
  }

  const displayTime = convertBlockTimeToDisplayTime(agenda.blockTime)

  return (
    <ListItem>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <ListItemText primary={`* ${agenda.name}`} />
        </Grid>
        <Grid item xs={6}>
          <ListItemText style={{ textAlign: 'right' }} primary={displayTime} />
        </Grid>
      </Grid>
    </ListItem>
  )
}

export default AgendaForm
