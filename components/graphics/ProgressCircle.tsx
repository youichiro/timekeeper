import React from 'react'
import { Box, CircularProgress, Typography } from '@material-ui/core'

type Props = {
  total: number
  elapsed: number
}

const ProgressCircle: React.FC<Props> = ({ total, elapsed }) => {
  const progress = (elapsed / total) * 100
  const size = 200

  return (
    <div>
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="determinate" size={size} value={progress} />
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
