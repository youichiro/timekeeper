import React from 'react'
import { LinearProgress } from '@material-ui/core'

const WholeProgressBar: React.FC = () => {
  const total = 30
  const elapsed = 10
  const remained = total - elapsed
  const progress = (elapsed / total) * 100.0

  return (
    <div>
      <h2>WholeProgressBar</h2>
      <LinearProgress variant="determinate" value={progress} />
      <p>total: {total}</p>
      <p>elapsed: {elapsed}</p>
      <p>remained: {remained}</p>
    </div>
  )
}

export default WholeProgressBar
