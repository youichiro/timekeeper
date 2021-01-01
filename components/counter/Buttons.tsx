import React from 'react'
import { Grid } from '@material-ui/core'
import StartButton from './buttons/StartButton'
import StopButton from './buttons/StopButton'
import ResetButton from './buttons/ResetButton'
import { useSelector } from '../../stores'

const Buttons: React.FC = () => {
  const counter = useSelector((state) => state.counter)

  return (
    <Grid container style={{ flexGrow: 1 }} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={2}></Grid>
          <Grid item xs={2} style={{ textAlign: 'center' }}>
            {counter.isStarted ? (
              <StopButton margin={2} padding={5} iconSize={50} />
            ) : (
              <StartButton margin={2} padding={5} iconSize={50} />
            )}
          </Grid>
          <Grid item xs={2} style={{ textAlign: 'center' }}>
            <ResetButton margin={2} padding={2} iconSize={30} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Buttons
