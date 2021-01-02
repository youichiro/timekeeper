import React from 'react'
import { Grid } from '@material-ui/core'
import StartButton from './buttons/StartButton'
import StopButton from './buttons/StopButton'
import ResetButton from './buttons/ResetButton'
import { useSelector } from '../../stores'

const Buttons: React.FC = () => {
  const counter = useSelector((state) => state.counter)

  return (
    <Grid container spacing={3} style={{ paddingTop: 20 }}>
      <Grid item xs={12}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={4}></Grid>
          <Grid item xs={4} style={{ textAlign: 'center' }}>
            {counter.isStarted ? (
              <StopButton iconSize={30} />
            ) : (
              <StartButton iconSize={30} />
            )}
          </Grid>
          <Grid item xs={4} style={{ textAlign: 'left' }}>
            <ResetButton iconSize={22} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Buttons
