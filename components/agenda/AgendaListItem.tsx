import React from 'react'
import { useDispatch } from 'react-redux'
import { ListItem, ListItemText, Grid, ListItemIcon } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'

import { Agenda } from '../../interfaces/index'
import { convertBlockTimeToDisplayTime } from '../../utils/calc-date'
import { setSelectedAgendaId } from '../../stores/selected-agenda-id'

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
    <ListItem
      button
      divider={true}
      disabled={agenda.status === 'done'}
      selected={agenda.status === 'running'}
      onClick={() => onClickItem(agenda.id)}
    >
      <ListItemIcon>
        {agenda.status === 'done' ? <DoneIcon /> : <></>}
      </ListItemIcon>
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
