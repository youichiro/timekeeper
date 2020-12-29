import React from 'react'
import { Grid, ListItem, ListItemText } from '@material-ui/core'
import { convertBlockTimeToDisplayTime } from '../utils/calc-date'
import { Agenda } from '../interfaces/index'
import DoneIcon from '@material-ui/icons/Done'

type Props = {
  agenda: Agenda | null
  handleClick: (agenda: Agenda | null) => void
}

const AgendaForm: React.FC<Props> = ({ agenda, handleClick }) => {
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
        <Grid item xs={4} style={{ textAlign: 'right' }}>
          <ListItemText primary={displayTime} />
        </Grid>
        <Grid item xs={2} style={{ textAlign: 'right' }}>
          <DoneIcon color="primary" onClick={() => handleClick(null)} />
        </Grid>
      </Grid>
    </ListItem>
  )
}

export default AgendaForm
