import React, { useEffect, useState } from 'react'
import { Box, CircularProgress, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { useSelector } from '../../stores'
import { Agenda } from '../../interfaces'
import { displayTime } from '../../utils/calc-date'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bottom: {
      color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    top: {
      position: 'absolute',
      left: 0,
    },
    circle: {
      strokeLinecap: 'round',
    },
    textBox: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
    },
    remainedText: {
      color: theme.palette.grey[500],
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
  const progress = elapsed <= total && total !== 0 ? (elapsed / total) * 100 : 0
  const remained = total - elapsed

  const getColor = () => {
    return remained <= 5 && elapsed > 0 ? 'secondary' : 'primary'
  }

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const circleSize = matches ? 160 : 200

  return (
    <div>
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          className={classes.bottom}
          classes={{ circle: classes.circle }}
          value={100}
          size={circleSize}
          thickness={2}
        />
        <CircularProgress
          variant="determinate"
          color={getColor()}
          className={classes.top}
          classes={{ circle: classes.circle }}
          value={progress}
          size={circleSize}
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
          <div className={classes.textBox}>
            <Typography variant="h5">{displayTime(elapsed)}</Typography>
            <Typography variant="subtitle1" className={classes.remainedText}>
              {displayTime(remained)}
            </Typography>
          </div>
        </Box>
      </Box>
    </div>
  )
}

export default ProgressCircle
