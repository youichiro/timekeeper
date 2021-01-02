import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { LinearProgress, Grid, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import { displayTime } from '../../utils/calc-date'
import { useSelector } from '../../stores'
import { setTotal, finishCount } from '../../stores/counter'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bar: {
      height: 10,
      borderRadius: 6,
    },
    totalText: {
      textAlign: 'right',
    },
    elapsedText: {
      textAlign: 'right',
    },
    remainedText: {
      textAlign: 'left',
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
    if (counter.total > 0 && counter.time >= counter.total) {
      dispatch(finishCount())
    }
  }, [counter])

  // selectedAgendaIdを監視して、変化したら合計時間を再計算する
  useEffect(() => {
    const total = agendaList.reduce((sum, agenda) => sum + agenda.time, 0)
    dispatch(setTotal({ total }))
  }, [selectedAgendaId])

  const progress = (counter.time / counter.total) * 100.0
  const remained = counter.total - counter.time

  return (
    <div style={{ flexGrow: 1, paddingTop: 20 }}>
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item xs={2}>
          <Typography variant="body1" className={classes.elapsedText}>
            {displayTime(counter.time)}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <LinearProgress
            variant="determinate"
            value={progress}
            color="primary"
            className={classes.bar}
          />
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body1" className={classes.remainedText}>
            &minus; {displayTime(remained)}
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProgressBar
