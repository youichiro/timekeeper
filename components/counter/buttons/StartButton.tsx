import React from 'react'
import { useDispatch } from 'react-redux'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import Tooltip from '@material-ui/core/Tooltip'
import Fab from '@material-ui/core/Fab'

import { startCount, updateCount } from '../../../stores/counter'
import { setTheme } from '../../../stores/theme'
import { useSelector } from '../../../stores'

type Props = {
  iconSize: number
}

const StartButton: React.FC<Props> = ({ iconSize }) => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)

  const handleClickStartButton = () => {
    if (counter.isFinished || counter.total <= 0) return
    const intervalID = window.setInterval(() => dispatch(updateCount()), 1000)
    dispatch(startCount({ intervalID }))
    dispatch(setTheme({ theme: 'dark' }))
  }

  const getColor = () => {
    return counter.isFinished ? 'default' : 'primary'
  }

  return (
    <Tooltip title="start" onClick={handleClickStartButton}>
      <Fab color={getColor()}>
        <PlayArrowIcon style={{ fontSize: iconSize }} />
      </Fab>
    </Tooltip>
  )
}

export default StartButton
