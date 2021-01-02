import React from 'react'
import { useDispatch } from 'react-redux'
import { resetCount } from '../../../stores/counter'

import RefreshIcon from '@material-ui/icons/Refresh'
import Tooltip from '@material-ui/core/Tooltip'
import Fab from '@material-ui/core/Fab'
import { setTheme } from '../../../stores/theme'
import { useSelector } from '../../../stores'

type Props = {
  iconSize: number
}

const ResetButton: React.FC<Props> = ({ iconSize }) => {
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
      <Fab color={getColor()}>
        <RefreshIcon style={{ fontSize: iconSize }} />
      </Fab>
    </Tooltip>
  )
}

export default ResetButton
