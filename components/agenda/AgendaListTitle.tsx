import React from 'react'
import { Grid, IconButton, Tooltip, Typography } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
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
      <Grid item xs={6} style={{ textAlign: 'right', paddingRight: 30 }}>
        {counter.isStarted || counter.isFinished ? (
          <Typography variant="subtitle1">
            全体: {displayTime(counter.total)}
          </Typography>
        ) : (
          <Tooltip title="more">
            <IconButton size="small">
              <MoreHorizIcon />
            </IconButton>
          </Tooltip>
        )}
      </Grid>
    </Grid>
  )
}

export default AgendaListTitle
