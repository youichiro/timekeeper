import React from 'react'
import { Fab, Tooltip } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { useDispatch } from 'react-redux'
import { addAgenda, AddAgendaPayload } from '../../../stores/agenda-list'
import { BlockTime } from '../../../interfaces'
import { useSelector } from '../../../stores'
import { setSelectedAgendaId } from '../../../stores/selected-agenda-id'

const AgendaItemAddButton: React.FC = () => {
  const dispatch = useDispatch()
  const agendaList = useSelector((state) => state.agendaList)

  const defaultBlockTime: BlockTime = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  const onClickAddButton = () => {
    const id = agendaList.slice(-1)[0].id + 1
    const payload: AddAgendaPayload = {
      id,
      name: '',
      blockTime: defaultBlockTime,
    }
    dispatch(addAgenda(payload))
    dispatch(setSelectedAgendaId({ id }))
  }

  return (
    <Tooltip title="add" onClick={onClickAddButton}>
      <Fab color="primary">
        <AddIcon />
      </Fab>
    </Tooltip>
  )
}

export default AgendaItemAddButton
