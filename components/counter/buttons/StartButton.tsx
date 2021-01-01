import React from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import Tooltip from '@material-ui/core/Tooltip'
import Fab from '@material-ui/core/Fab'

import { startCount, updateCount } from '../../../stores/counter'
import { setTheme } from '../../../stores/theme'

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

const StartButton: React.FC<StyleProps> = (props) => {
  const classes = useStyles(props)

  const dispatch = useDispatch()

  const onClickStartButton = () => {
    const intervalID = window.setInterval(() => dispatch(updateCount()), 1000)
    dispatch(startCount({ intervalID }))
    dispatch(setTheme({ theme: 'dark' }))
  }

  return (
    <Tooltip title="start">
      <Fab color="primary" className={classes.fab}>
        <PlayArrowIcon className={classes.icon} onClick={onClickStartButton} />
      </Fab>
    </Tooltip>
  )
}

export default StartButton
