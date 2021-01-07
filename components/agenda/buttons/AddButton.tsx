import React from 'react'
import { useDispatch } from 'react-redux'
import { Tooltip } from '@material-ui/core'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

import { addAgenda, AddAgendaPayload } from '../../../stores/agenda-list'
import { BlockTime } from '../../../interfaces'
import { useSelector } from '../../../stores'
import { setSelectedAgendaId } from '../../../stores/selected-agenda-id'

type StyleProps = {
  iconSize: number
}

const AddButton: React.FC<StyleProps> = ({ iconSize }) => {
  const dispatch = useDispatch()
  const agendaList = useSelector((state) => state.agendaList)
  const counter = useSelector((state) => state.counter)

  const defaultBlockTime: BlockTime = {
    hours: 0,
    minutes: 1,
    seconds: 0,
  }

  const onClickAddButton = () => {
    if (counter.isFinished) return
    const id = agendaList.length > 0 ? agendaList.slice(-1)[0].id + 1 : 1
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
      <Fab color="default" size="small" disabled={counter.isFinished}>
        <AddIcon style={{ fontSize: iconSize }} />
      </Fab>
    </Tooltip>
  )
}

export default AddButton
