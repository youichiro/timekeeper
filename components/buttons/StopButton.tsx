import React from 'react'
import { useDispatch } from 'react-redux'
import { stopCount } from '../../stores/counter'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import PauseIcon from '@material-ui/icons/Pause'
import Tooltip from '@material-ui/core/Tooltip'
import Fab from '@material-ui/core/Fab'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      margin: theme.spacing(2),
      padding: theme.spacing(5),
    },
  })
)

const StopButton: React.FC = () => {
  const dispatch = useDispatch()

  const onClickStopButton = () => {
    dispatch(stopCount())
  }

  const classes = useStyles()

  return (
    <Tooltip title="stop">
      <Fab color="primary" className={classes.fab}>
        <PauseIcon style={{ fontSize: 50 }} onClick={onClickStopButton} />
      </Fab>
    </Tooltip>
  )
}

export default StopButton
