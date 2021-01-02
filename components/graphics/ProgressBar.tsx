import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { LinearProgress, Grid, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import {
  convertBlockTimeToDisplayTime,
  convertSecondsToBlockTime,
} from '../../utils/calc-date'
import { useSelector } from '../../stores'
import { setTotal, stopCount } from '../../stores/counter'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bar: {
      height: 10,
      borderRadius: 6,
    },
    totalText: {
      textAlign: 'right',
    },
    remainedText: {
      textAlign: 'right',
      color: theme.palette.grey[500],
    },
  })
)

const ProgressBar: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)
  const selectedAgendaId = useSelector((state) => state.selectedAgendaId)
  const agendaList = useSelector((state) => state.agendaList)

  // counterを監視して、全体時間に達したらカウンターを止める
  useEffect(() => {
    // ここ毎秒実行されてる
    if (counter.time >= counter.total) {
      dispatch(stopCount())
    }
  }, [counter])

  // selectedAgendaIdを監視して、変化したら合計時間を再計算する
  useEffect(() => {
    const total = agendaList.reduce((sum, agenda) => sum + agenda.time, 0)
    dispatch(setTotal({ total }))
  }, [selectedAgendaId])

  const progress = (counter.time / counter.total) * 100.0
  const remained = counter.total - counter.time

  const displayTime = (total: number): string => {
    const blockTime = convertSecondsToBlockTime(total)
    return convertBlockTimeToDisplayTime(blockTime)
  }

  return (
    <div style={{ flexGrow: 1 }}>
      <Grid container spacing={3} justify="space-between">
        <Grid item xs={12}>
          <Typography variant="subtitle1" className={classes.totalText}>
            {displayTime(counter.total)}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <LinearProgress
            variant="determinate"
            value={progress}
            color="primary"
            className={classes.bar}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">
            {displayTime(counter.time)}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1" className={classes.remainedText}>
            &minus; {displayTime(remained)}
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProgressBar
