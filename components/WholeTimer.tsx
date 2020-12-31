import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import ProgressBar from './ProgressBar'
import ProgressCircle from './ProgressCircle'
import { stopCount } from '../stores/counter'
import { useSelector } from '../stores'
import { updateAgendaStates } from '../stores/agenda-list'

const WholeTimer: React.FC = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)
  const agendaList = useSelector((state) => state.agendaList)
  const selectedAgendaId = useSelector((state) => state.selectedAgendaId)

  const [total, setTotal] = useState(0)

  // counterを監視して、全体時間に達したらカウンターを止める
  useEffect(() => {
    if (counter.time >= total) {
      dispatch(stopCount())
    }
  }, [counter])

  // counterを監視して、agenda.statusを更新する
  useEffect(() => {
    dispatch(updateAgendaStates({ time: counter.time }))
  }, [counter])

  // selectedAgendaIdを監視して、変化したら合計時間を再計算する
  useEffect(() => {
    setTotal(agendaList.reduce((sum, agenda) => sum + agenda.time, 0))
  }, [selectedAgendaId])

  const runningAgenda = agendaList.filter(
    (agenda) => agenda.status === 'running'
  )[0]

  return (
    <div>
      <h2>WholeTimer</h2>
      <ProgressBar total={total} elapsed={counter.time} />
      <ProgressCircle
        total={runningAgenda?.time || 0}
        elapsed={counter.time - runningAgenda?.startTime || 0}
        title={runningAgenda?.name || ''}
      />
    </div>
  )
}

export default WholeTimer
