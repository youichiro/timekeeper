import React from 'react'
import { Box, CircularProgress, Typography } from '@material-ui/core'
import {argv0} from 'process'

const ProgressCircle: React.FC = () => {
  const size = 200
  const value = 40

  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" size={size} value={value} />
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
        <Typography variant="h5" component="div">{`${value}s`}</Typography>
      </Box>
    </Box>
  )
}

export default ProgressCircle
