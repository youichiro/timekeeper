import React from 'react'
import { Box, CircularProgress, Typography } from '@material-ui/core'
import { useSelector } from '../../stores'

const ProgressCircle: React.FC = () => {
  const agendaList = useSelector((state) => state.agendaList)
  const counter = useSelector((state) => state.counter)

  const runningAgenda = agendaList.filter(
    (agenda) => agenda.status === 'running'
  )[0]

  const total = runningAgenda?.time || 0
  const elapsed = counter.time - runningAgenda?.startTime || 0

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
