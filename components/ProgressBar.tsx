import React from 'react'
import { LinearProgress, Grid } from '@material-ui/core'
import { convertSecondsToBlockTime } from '../utils/calc-date'

type ProgressBarProps = {
  total: number
  elapsed: number
}

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const progress = (props.elapsed / props.total) * 100.0
  const remained = props.total - props.elapsed

  const displayTime = (totalSeconds: number): string => {
    const blockTime = convertSecondsToBlockTime(totalSeconds)
    const hours = blockTime.hours !== 0 ? `${blockTime.hours}時間` : ''
    const minutes = blockTime.minutes !== 0 ? `${blockTime.minutes}分` : ''
    const seconds = blockTime.seconds !== 0 ? `${blockTime.seconds}秒` : ''
    return `${hours} ${minutes} ${seconds}`
  }

  return (
    <div>
      <h3>ProgressBar</h3>
      <div style={{ flexGrow: 1 }}>
        <Grid container spacing={3} justify="space-between">
          <Grid item xs={12}>
            <p style={{ textAlign: 'center' }}>
              合計: {displayTime(props.total)}
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
            <p>経過: {displayTime(props.elapsed)}</p>
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
