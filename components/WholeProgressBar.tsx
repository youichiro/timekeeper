import React from 'react'
import { LinearProgress, Grid } from '@material-ui/core'

type WholeProgressBarProps = {
  total: number
  elapsed: number
}

const WholeProgressBar: React.FC<WholeProgressBarProps> = (props) => {
  const progress = (props.elapsed / props.total) * 100.0
  const remained = props.total - props.elapsed

  return (
    <div>
      <h3>WholeProgressBar</h3>
      <div style={{ flexGrow: 1 }}>
        <Grid container spacing={3} justify="space-between">
          <Grid item xs={12}>
            <p style={{ textAlign: 'center' }}>total: {props.total}</p>
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
            <p>elapsed: {props.elapsed}</p>
          </Grid>
          <Grid item xs={6}>
            <p style={{ textAlign: 'right' }}>remained: {remained}</p>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default WholeProgressBar
