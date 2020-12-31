import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ProgressBar from './graphics/ProgressBar'
import ProgressCircle from './graphics/ProgressCircle'
import { useSelector } from '../stores'
import { updateAgendaStates } from '../stores/agenda-list'

const WholeTimer: React.FC = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)

  // counterを監視して、agenda.statusを更新する
  useEffect(() => {
    dispatch(updateAgendaStates({ time: counter.time }))
  }, [counter])

  return (
    <div>
      <h2>WholeTimer</h2>
      <ProgressBar />
      <ProgressCircle />
    </div>
  )
}

export default WholeTimer
