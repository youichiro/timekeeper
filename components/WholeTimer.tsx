import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import ProgressBar from './ProgressBar'
import StartButton from './StartButton'
import ProgressCircle from './ProgressCircle'
import {
  resetCounter,
  startCount,
  stopCount,
  updateCount,
} from '../stores/counter'
import { useSelector } from '../stores'

const WholeTimer: React.FC = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)
  const agendaList = useSelector((state) => state.agendaList)
  const selectedAgendaId = useSelector((state) => state.selectedAgendaId)

  const [total, setTotal] = useState(0)

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

  // selectedAgendaIdを監視して、変化したら合計時間を再計算する
  useEffect(() => {
    setTotal(agendaList.reduce((sum, agenda) => sum + agenda.time, 0))
  }, [selectedAgendaId])

  return (
    <div>
      <h2>WholeTimer</h2>
      <ProgressBar total={total} elapsed={counter.time} />
      <StartButton handleClick={onClickStartButton} />
      <ProgressCircle total={total} elapsed={counter.time} />
    </div>
  )
}

export default WholeTimer
