import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core'
import { Agenda } from '../interfaces/index'

type Props = {
  agenda: Agenda
}

const AgendaListItem: React.FC<Props> = ({ agenda }) => {
  return (
    <ListItem button>
      <ListItemText primary={agenda.name} />
    </ListItem>
  )
}

export default AgendaListItem
