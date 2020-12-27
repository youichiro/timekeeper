import React from 'react'
import { LinearProgress, Grid } from '@material-ui/core'

const WholeProgressBar: React.FC = () => {
  const total = 30
  const elapsed = 10
  const remained = total - elapsed
  const progress = (elapsed / total) * 100.0

  return (
    <div>
      <h2>WholeProgressBar</h2>
      <div style={{ flexGrow: 1 }}>
        <Grid container spacing={3} justify="space-between">
          <Grid item xs={12}>
            <p style={{ textAlign: 'center' }}>total: {total}</p>
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
            <p>elapsed: {elapsed}</p>
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
