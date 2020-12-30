import React, { useEffect } from 'react'
import ProgressBar from './ProgressBar'
import StartButton from './StartButton'
import { useDispatch } from 'react-redux'
import {
  resetCounter,
  startCount,
  stopCount,
  updateCount,
} from '../stores/counter'
import { useSelector } from '../stores'

const WholeTimer: React.FC = () => {
  const total = 10

  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)

  const onClickStartButton = () => {
    dispatch(resetCounter())
    const intervalID = window.setInterval(() => dispatch(updateCount()), 1000)
    dispatch(startCount({ intervalID: intervalID }))
  }

  // counterを監視して、全体時間に達したらカウンターを止める
  useEffect(() => {
    if (counter.time >= total) {
      dispatch(stopCount())
    }
  }, [counter])

  return (
    <div>
      <h2>WholeTimer</h2>
      <ProgressBar total={total} elapsed={counter.time} />
      <StartButton handleClick={onClickStartButton} />
    </div>
  )
}

export default WholeTimer
