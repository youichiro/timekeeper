import React from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import Tooltip from '@material-ui/core/Tooltip'
import Fab from '@material-ui/core/Fab'
import { startCount, updateCount } from '../../stores/counter'
import { setTheme } from '../../stores/theme'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      margin: theme.spacing(2),
      padding: theme.spacing(5),
    },
  })
)

const StartButton: React.FC = () => {
  const dispatch = useDispatch()

  const onClickStartButton = () => {
    const intervalID = window.setInterval(() => dispatch(updateCount()), 1000)
    dispatch(startCount({ intervalID }))
    dispatch(setTheme({ theme: 'dark' }))
  }

  const classes = useStyles()

  return (
    <Tooltip title="start">
      <Fab color="primary" className={classes.fab}>
        <PlayArrowIcon style={{ fontSize: 50 }} onClick={onClickStartButton} />
      </Fab>
    </Tooltip>
  )
}

export default StartButton
