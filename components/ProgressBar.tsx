import React from 'react'
import { LinearProgress, Grid } from '@material-ui/core'
import {
  convertSecondsToBlockTime,
  zeroPaddingBlockTime,
} from '../utils/calc-date'

type ProgressBarProps = {
  total: number
  elapsed: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ total, elapsed }) => {
  const progress = (elapsed / total) * 100.0
  const remained = total - elapsed

  const displayTime = (totalSeconds: number): string => {
    const bt = convertSecondsToBlockTime(totalSeconds)
    const btStr = zeroPaddingBlockTime(bt, 2)
    const hours = btStr.hours !== '00' ? btStr.hours + ':' : ''
    return `${hours}${btStr.minutes}:${btStr.seconds}`
  }

  return (
    <div>
      <h3>ProgressBar</h3>
      <div style={{ flexGrow: 1 }}>
        <Grid container spacing={3} justify="space-between">
          <Grid item xs={12}>
            <p style={{ textAlign: 'center' }}>
              合計: {displayTime(total)}
            </p>
          </Grid>
          <Grid item xs={12}>
            <LinearProgress
              variant="determinate"
              value={progress}
              style={{ height: 10, borderRadius: 6 }}
              color="secondary"
            />
          </Grid>
          <Grid item xs={6}>
            <p>経過: {displayTime(elapsed)}</p>
          </Grid>
          <Grid item xs={6}>
            <p style={{ textAlign: 'right' }}>残り: {displayTime(remained)}</p>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default ProgressBar
