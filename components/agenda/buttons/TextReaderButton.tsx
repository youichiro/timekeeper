import React from 'react'
import { useDispatch } from 'react-redux'
import { Tooltip, IconButton } from '@material-ui/core'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile'
import { openTextReaderDialog } from '../../../stores/text-reader-dialog'

const TextReaderButton: React.FC = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(openTextReaderDialog())
  }

  return (
    <Tooltip title="open text-reader" onClick={handleClick}>
      <IconButton size="small">
        <InsertDriveFileIcon />
      </IconButton>
    </Tooltip>
  )
}

export default TextReaderButton
