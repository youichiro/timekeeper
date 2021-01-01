import React, { useEffect, useState } from 'react'
import { LinearProgress, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import {
  convertBlockTimeToDisplayTime,
  convertSecondsToBlockTime,
} from '../../utils/calc-date'
import { useSelector } from '../../stores'
import { stopCount } from '../../stores/counter'
// import { setTheme } from '../../stores/theme'

const ProgressBar: React.FC = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)
  const selectedAgendaId = useSelector((state) => state.selectedAgendaId)
  const agendaList = useSelector((state) => state.agendaList)

  const [total, setTotal] = useState(0)

  // counterを監視して、全体時間に達したらカウンターを止める
  useEffect(() => {
    if (counter.time >= total) {
      dispatch(stopCount())
      // dispatch(setTheme({ theme: 'light' }))
    }
  }, [counter])

  // selectedAgendaIdを監視して、変化したら合計時間を再計算する
  useEffect(() => {
    setTotal(agendaList.reduce((sum, agenda) => sum + agenda.time, 0))
  }, [selectedAgendaId])

  const progress = (counter.time / total) * 100.0
  const remained = total - counter.time

  const displayTime = (totalSeconds: number): string => {
    const bt = convertSecondsToBlockTime(totalSeconds)
    return convertBlockTimeToDisplayTime(bt)
  }

  return (
    <div style={{ flexGrow: 1 }}>
      <Grid container spacing={3} justify="space-between">
        <Grid item xs={12}>
          <p style={{ textAlign: 'center' }}>合計: {displayTime(total)}</p>
        </Grid>
        <Grid item xs={12}>
          <LinearProgress
            variant="determinate"
            value={progress}
            style={{ height: 10, borderRadius: 6 }}
            color="primary"
          />
        </Grid>
        <Grid item xs={6}>
          <p>経過: {displayTime(counter.time)}</p>
        </Grid>
        <Grid item xs={6}>
          <p style={{ textAlign: 'right' }}>残り: {displayTime(remained)}</p>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProgressBar
