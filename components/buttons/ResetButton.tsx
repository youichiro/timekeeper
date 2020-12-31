import React from 'react'
import { useDispatch } from 'react-redux'
import { resetCounter } from '../../stores/counter'

import RefreshIcon from '@material-ui/icons/Refresh'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import Fab from '@material-ui/core/Fab'
import { setTheme } from '../../stores/theme'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      margin: theme.spacing(2),
      padding: theme.spacing(5),
    },
  })
)

const ResetButton: React.FC = () => {
  const dispatch = useDispatch()

  const onClickResetButton = () => {
    dispatch(resetCounter())
    dispatch(setTheme({ theme: 'light' }))
  }

  const classes = useStyles()

  return (
    <Tooltip title="reset">
      <Fab className={classes.fab}>
        <RefreshIcon style={{ fontSize: 50 }} onClick={onClickResetButton} />
      </Fab>
    </Tooltip>
  )
}

export default ResetButton
