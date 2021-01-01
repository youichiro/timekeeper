import React from 'react'
import { Tooltip } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import DeleteIcon from '@material-ui/icons/Delete'
import { useSelector } from '../../../stores'
import { deleteAgenda } from '../../../stores/agenda-list'
import { setSelectedAgendaId } from '../../../stores/selected-agenda-id'

const DeleteButton: React.FC = () => {
  const dispatch = useDispatch()
  const selectedAgendaId = useSelector((state) => state.selectedAgendaId)

  const onClickDeleteButton = () => {
    if (selectedAgendaId !== null) {
      dispatch(deleteAgenda({ id: selectedAgendaId }))
      dispatch(setSelectedAgendaId({ id: null }))
    }
  }

  return (
    <Tooltip
      title="delete"
      style={{ cursor: 'pointer' }}
      onClick={onClickDeleteButton}
    >
      <DeleteIcon />
    </Tooltip>
  )
}

export default DeleteButton
