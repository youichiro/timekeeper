import React from 'react'
import { ListItem, ListItemText, Grid } from '@material-ui/core'
import { Agenda } from '../interfaces/index'

type Props = {
  agenda: Agenda
}

const AgendaListItem: React.FC<Props> = ({ agenda }) => {
  return (
    <ListItem button>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <ListItemText primary={agenda.name} />
        </Grid>
        <Grid item xs={6}>
          <ListItemText style={{ textAlign: 'right' }} primary={agenda.time} />
        </Grid>
      </Grid>
    </ListItem>
  )
}

export default AgendaListItem
