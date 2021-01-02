import React from 'react'
import { useDispatch } from 'react-redux'
import { resetCount } from '../../../stores/counter'

import RefreshIcon from '@material-ui/icons/Refresh'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import Fab from '@material-ui/core/Fab'
import { setTheme } from '../../../stores/theme'
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

const ResetButton: React.FC<StyleProps> = (props) => {
  const classes = useStyles(props)
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)

  const onClickResetButton = () => {
    dispatch(resetCount())
    dispatch(setTheme({ theme: 'light' }))
  }

  const getColor = () => {
    return counter.isFinished ? 'primary' : 'default'
  }

  return (
    <Tooltip title="reset" onClick={onClickResetButton}>
      <Fab color={getColor()} className={classes.fab}>
        <RefreshIcon className={classes.icon} />
      </Fab>
    </Tooltip>
  )
}

export default ResetButton
