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
import { openTextReaderDialog } from '../../../stores/text-reader'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile'
import { useSelector } from '../../../stores'
import { convertAgendaListToText } from '../../../utils/input-text'

const MoreButton: React.FC = () => {
  const dispatch = useDispatch()
  const agendaList = useSelector((state) => state.agendaList)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleOpenTextReader = () => {
    const text = convertAgendaListToText(agendaList)
    dispatch(openTextReaderDialog(text))
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
          <ListItemText primary="text-reader" />
        </MenuItem>
      </Menu>
    </div>
  )
}

export default MoreButton
