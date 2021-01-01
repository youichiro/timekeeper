import React, { useEffect, useState } from 'react'
import { Box, CircularProgress, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useSelector } from '../../stores'
import { Agenda } from '../../interfaces'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bottom: {
      color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    top: {
      color: '#1a90ff',
      animationDuration: '550ms',
      position: 'absolute',
      left: 0,
    },
    circle: {
      strokeLinecap: 'round',
    },
  })
)

type RunningAgenda = Agenda | null

const ProgressCircle: React.FC = () => {
  const classes = useStyles()
  const agendaList = useSelector((state) => state.agendaList)
  const counter = useSelector((state) => state.counter)

  const [runningAgenda, setRunningAgenda] = useState<RunningAgenda>(null)

  // agendaListを監視して、進行中の項目を取得する
  useEffect(() => {
    const filtered = agendaList.filter(
      (agenda) => agenda.status === 'running'
    )[0]
    setRunningAgenda(filtered ?? null)
  }, [agendaList])

  const total = runningAgenda?.time ?? 0
  const elapsed = counter.time - (runningAgenda?.startTime ?? 0)
  const progress = (elapsed / total) * 100

  const getColor = () => {
    return total - elapsed <= 5 && elapsed > 0 ? 'secondary' : 'primary'
  }

  return (
    <div>
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          className={classes.bottom}
          value={100}
          size={200}
          thickness={2}
        />
        <CircularProgress
          variant="determinate"
          color={getColor()}
          className={classes.top}
          classes={{ circle: classes.circle }}
          value={progress}
          size={200}
          thickness={2}
        />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h5" component="div">
            {`${elapsed}s / ${total}s`}
          </Typography>
        </Box>
      </Box>
    </div>
  )
}

export default ProgressCircle
