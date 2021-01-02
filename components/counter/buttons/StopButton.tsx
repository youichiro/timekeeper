import React from 'react'
import { useDispatch } from 'react-redux'
import PauseIcon from '@material-ui/icons/Pause'
import Tooltip from '@material-ui/core/Tooltip'
import Fab from '@material-ui/core/Fab'

import { setTheme } from '../../../stores/theme'
import { stopCount } from '../../../stores/counter'
import { useSelector } from '../../../stores'

type Props = {
  iconSize: number
}

const StopButton: React.FC<Props> = ({ iconSize }) => {
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
      <Fab color={getColor()}>
        <PauseIcon style={{ fontSize: iconSize }} />
      </Fab>
    </Tooltip>
  )
}

export default StopButton
