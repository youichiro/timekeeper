import React from 'react'
import { useDispatch } from 'react-redux'
import { stopCount } from '../../stores/counter'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import PauseIcon from '@material-ui/icons/Pause'
import Tooltip from '@material-ui/core/Tooltip'
import Fab from '@material-ui/core/Fab'
import { setTheme } from '../../stores/theme'

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

  const onClickStopButton = () => {
    dispatch(stopCount())
    dispatch(setTheme({ theme: 'light' }))
  }

  return (
    <Tooltip title="stop">
      <Fab color="primary" className={classes.fab}>
        <PauseIcon className={classes.icon} onClick={onClickStopButton} />
      </Fab>
    </Tooltip>
  )
}

export default StopButton
