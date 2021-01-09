import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useSelector } from '../../stores'
import { displayTime } from '../../utils/block-time'

const AgendaListTitle: React.FC = () => {
  const counter = useSelector((state) => state.counter)

  return (
    <Grid
      container
      spacing={3}
      alignItems="flex-end"
      style={{ paddingBottom: 20 }}
    >
      <Grid item xs={6}>
        <Typography variant="h5">アジェンダ</Typography>
      </Grid>
      <Grid item xs={6} style={{ textAlign: 'right', paddingRight: 60 }}>
        {counter.isStarted || counter.isFinished ? (
          <Typography variant="subtitle1">
            全体: {displayTime(counter.total)}
          </Typography>
        ) : (
          <></>
        )}
      </Grid>
    </Grid>
  )
}

export default AgendaListTitle
