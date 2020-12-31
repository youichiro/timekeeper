import React from 'react'
import { useDispatch } from 'react-redux'
import { ListItem, TextField } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'

import { Agenda } from '../../interfaces/index'
import { updateAgenda, updateAgendaBorders } from '../../stores/agenda-list'
import { setSelectedAgendaId } from '../../stores/selected-agenda-id'

type Props = {
  agenda: Agenda | null
}

const AgendaForm: React.FC<Props> = ({ agenda }) => {
  if (agenda === null) {
    return null
  }

  const dispatch = useDispatch()

  const onChangeNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAgenda = {
      ...agenda,
      name: event.target.value,
    }
    dispatch(updateAgenda(newAgenda))
  }

  const onChangeTimeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      event.target.value !== '' ? parseInt(event.target.value) : null
    const name = event.target.name
    const newAgenda = {
      ...agenda,
      blockTime: {
        hours: name === 'hours' ? value : agenda.blockTime.hours,
        minutes: name === 'minutes' ? value : agenda.blockTime.minutes,
        seconds: name === 'seconds' ? value : agenda.blockTime.seconds,
      },
    }
    dispatch(updateAgenda(newAgenda))
  }

  const onClickCheckButton = () => {
    dispatch(setSelectedAgendaId({ id: null }))
    dispatch(updateAgendaBorders())
  }

  const inputValue = (value: number | null): number | '' => {
    return value !== null ? value : ''
  }

  return (
    <ListItem>
      <form>
        <TextField
          name="name"
          label="name"
          value={agenda.name}
          onChange={onChangeNameInput}
          error={agenda.name === ''}
        />
        <TextField
          name="hours"
          type="number"
          label="hours"
          value={inputValue(agenda.blockTime.hours)}
          onChange={onChangeTimeInput}
        />
        <TextField
          name="minutes"
          type="number"
          label="minutes"
          value={inputValue(agenda.blockTime.minutes)}
          onChange={onChangeTimeInput}
        />
        <TextField
          name="seconds"
          type="number"
          label="seconds"
          value={inputValue(agenda.blockTime.seconds)}
          onChange={onChangeTimeInput}
        />
        <DoneIcon color="primary" onClick={() => onClickCheckButton()} />
      </form>
    </ListItem>
  )
}

export default AgendaForm
