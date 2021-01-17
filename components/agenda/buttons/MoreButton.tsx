import React, { useState } from 'react'
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
} from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { useDispatch } from 'react-redux'
import { openTextReaderDialog } from '../../../stores/text-reader-dialog'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile'

const MoreButton: React.FC = () => {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleOpenTextReader = () => {
    dispatch(openTextReaderDialog())
    handleClose()
  }

  return (
    <div>
      <Tooltip title="more" onClick={handleClick}>
        <IconButton size="small">
          <MoreHorizIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleOpenTextReader}>
          <ListItemIcon>
            <InsertDriveFileIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="open text-reader" />
        </MenuItem>
      </Menu>
    </div>
  )
}

export default MoreButton
