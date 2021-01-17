import React from 'react'
import { IconButton, Tooltip } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

const MoreButton: React.FC = () => {
  return (
    <Tooltip title="more">
      <IconButton size="small">
        <MoreHorizIcon />
      </IconButton>
    </Tooltip>
  )
}

export default MoreButton
