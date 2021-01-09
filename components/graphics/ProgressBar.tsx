import React from 'react'
import { LinearProgress, Grid, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import { displayTime } from '../../utils/block-time'
import { useSelector } from '../../stores'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: 20,
      [theme.breakpoints.down('xs')]: {
        paddingTop: 0,
      },
    },
    bar: {
      height: 10,
      borderRadius: 6,
      [theme.breakpoints.down('xs')]: {
        height: 6,
        borderRadius: 4,
      },
    },
    totalText: {
      textAlign: 'right',
    },
    elapsedText: {
      textAlign: 'right',
    },
    remainedText: {
      textAlign: 'left',
      color: theme.palette.grey[500],
    },
  })
)

const ProgressBar: React.FC = () => {
  const classes = useStyles()
  const counter = useSelector((state) => state.counter)

  const progress = (counter.time / counter.total) * 100.0
  const remained = counter.total - counter.time

  return (
    <div className={classes.root}>
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item xs={2}>
          <Typography variant="body1" className={classes.elapsedText}>
            {displayTime(counter.time)}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <LinearProgress
            variant="determinate"
            value={progress}
            color="primary"
            className={classes.bar}
          />
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body1" className={classes.remainedText}>
            {displayTime(remained)}
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProgressBar
