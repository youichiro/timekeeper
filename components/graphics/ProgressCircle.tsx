import React, { useEffect, useState } from 'react'
import { Box, CircularProgress, Typography } from '@material-ui/core'
import { useSelector } from '../../stores'
import { Agenda } from '../../interfaces'

type RunningAgenda = Agenda | null

const ProgressCircle: React.FC = () => {
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
  const size = 200

  return (
    <div>
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          color="secondary"
          size={size}
          value={progress}
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
