import React from 'react'
import { LinearProgress } from '@material-ui/core'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'

const WholeProgressBar: React.FC = () => {
  const BorderLinearProgress = withStyles((theme: Theme) =>
    createStyles({
      root: {
        height: 14,
        borderRadius: 8,
      },
      colorPrimary: {
        backgroundColor: theme.palette.grey[200],
      },
      bar: {
        borderRadius: 8,
        backgroundColor: '#1a90ff',
      },
    }),
  )(LinearProgress);

  const total = 30
  const elapsed = 10
  const remained = total - elapsed
  const progress = elapsed / total * 100.0

  return (
    <>
      <h2>WholeProgressBar</h2>
      <BorderLinearProgress variant="determinate" value={progress} />
      <p>total: {total}</p>
      <p>elapsed: {elapsed}</p>
      <p>remained: {remained}</p>
    </>
  )
}

export default WholeProgressBar
