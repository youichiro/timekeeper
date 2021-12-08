import React from 'react'
import { useDispatch } from 'react-redux'
import { ListItem, ListItemText, Grid } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'

import { Agenda } from '../../interfaces/index'
import { convertBlockTimeToDisplayTime } from '../../utils/block-time'
import { setSelectedAgendaId } from '../../stores/selected-agenda-id'
import { useSelector } from '../../stores'

type Props = {
  agenda: Agenda
}

const AgendaListItem: React.FC<Props> = ({ agenda }) => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)

  const handleClickItem = (id: number) => {
    dispatch(setSelectedAgendaId({ id }))
  }

  const displayTime = convertBlockTimeToDisplayTime(agenda.blockTime)

  const isDone =
    agenda.status === 'done' ||
    (agenda.status === 'running' && counter.isFinished)
  const isRunning = agenda.status === 'running'

  const icon = isDone ? (
    <DoneIcon />
  ) : isRunning ? (
    counter.isStarted ? (
      <PlayArrowIcon color="action" />
    ) : (
      <PauseIcon style={{ fontSize: 20 }} color="action" />
    )
  ) : (
    <></>
  )

  return (
    <ListItem
      button
      divider={true}
      disabled={isDone}
      selected={isRunning}
      onClick={() => handleClickItem(agenda.id)}
    >
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={1}>
          {icon}
        </Grid>
        <Grid item xs={5}>
          <ListItemText primary={agenda.name} />
        </Grid>
        <Grid item xs={6} style={{ paddingRight: 20 }}>
          <ListItemText style={{ textAlign: 'right' }} primary={displayTime} />
        </Grid>
      </Grid>
    </ListItem>
  )
}

export default AgendaListItem
