import { ListItem, ListItemText } from '@material-ui/core'
import React from 'react'

type Props = {
  name: string
}

const AgendaListItem: React.FC<Props> = ({ name }) => {
  return (
    <ListItem button>
      <ListItemText primary={name} />
    </ListItem>
  )
}

export default AgendaListItem
