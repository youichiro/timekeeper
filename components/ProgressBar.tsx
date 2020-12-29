import React from 'react'
import { LinearProgress, Grid } from '@material-ui/core'

type ProgressBarProps = {
  total: number
  elapsed: number
}

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const progress = (props.elapsed / props.total) * 100.0
  const remained = props.total - props.elapsed

  return (
    <div>
      <h3>ProgressBar</h3>
      <div style={{ flexGrow: 1 }}>
        <Grid container spacing={3} justify="space-between">
          <Grid item xs={12}>
            <p style={{ textAlign: 'center' }}>合計: {props.total}秒</p>
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
            <p>経過: {props.elapsed}秒</p>
          </Grid>
          <Grid item xs={6}>
            <p style={{ textAlign: 'right' }}>残り: {remained}秒</p>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default ProgressBar
