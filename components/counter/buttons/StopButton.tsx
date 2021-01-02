import React from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import PauseIcon from '@material-ui/icons/Pause'
import Tooltip from '@material-ui/core/Tooltip'
import Fab from '@material-ui/core/Fab'

import { setTheme } from '../../../stores/theme'
import { stopCount } from '../../../stores/counter'
import { useSelector } from '../../../stores'

type StyleProps = {
  margin: number
  padding: number
  iconSize: number
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    fab: {
      margin: ({ margin }) => theme.spacing(margin),
      padding: ({ padding }) => theme.spacing(padding),
    },
    icon: {
      fontSize: ({ iconSize }) => iconSize,
    },
  })
)

const StopButton: React.FC<StyleProps> = (props) => {
  const classes = useStyles(props)
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)

  const onClickStopButton = () => {
    if (counter.isFinished) {
      return
    }
    dispatch(stopCount())
    dispatch(setTheme({ theme: 'light' }))
  }

  const getColor = () => {
    return counter.isFinished ? 'default' : 'primary'
  }

  return (
    <Tooltip title="stop" onClick={onClickStopButton}>
      <Fab color={getColor()} className={classes.fab}>
        <PauseIcon className={classes.icon} />
      </Fab>
    </Tooltip>
  )
}

export default StopButton
