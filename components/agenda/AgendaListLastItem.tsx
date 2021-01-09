import React from 'react'
import { Grid, ListItem, ListItemText, Typography } from '@material-ui/core'
import AddButton from './buttons/AddButton'
import { useSelector } from '../../stores'
import { displayTime } from '../../utils/block-time'

const AgendaListLastItem: React.FC = () => {
  const counter = useSelector((state) => state.counter)

  return (
    <ListItem>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <ListItemText style={{ textAlign: 'center' }}>
            <AddButton iconSize={20} />
          </ListItemText>
        </Grid>
        <Grid item xs={3} style={{ textAlign: 'right' }}>
          {counter.isStarted || counter.isFinished ? (
            <></>
          ) : (
            <Typography variant="subtitle2">
              合計: {displayTime(counter.total)}
            </Typography>
          )}
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </ListItem>
  )
}

export default AgendaListLastItem
