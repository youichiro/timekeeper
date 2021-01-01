import React from 'react'
import { useDispatch } from 'react-redux'
import { ListItem, TextField } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'

import { Agenda } from '../../interfaces/index'
import {
  updateAgenda,
  updateAgendaBorders,
  UpdateAgendaPayload,
} from '../../stores/agenda-list'
import { setSelectedAgendaId } from '../../stores/selected-agenda-id'
import AgendaDeleteButton from './buttons/AgendaDeleteButton'
import TimeSelectForm from './forms/TimeSelectForm'

type Props = {
  agenda: Agenda | null
}

const AgendaForm: React.FC<Props> = ({ agenda }) => {
  if (agenda === null) {
    return null
  }

  const dispatch = useDispatch()

  const onChangeNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const payload: UpdateAgendaPayload = {
      id: agenda.id,
      name: event.target.value,
      blockTime: agenda.blockTime,
    }
    dispatch(updateAgenda(payload))
  }

  const onChangeTimeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      event.target.value !== '' ? parseInt(event.target.value) : null
    const name = event.target.name
    const payload: UpdateAgendaPayload = {
      id: agenda.id,
      name: agenda.name,
      blockTime: {
        hours: name === 'hours' ? value : agenda.blockTime.hours,
        minutes: name === 'minutes' ? value : agenda.blockTime.minutes,
        seconds: name === 'seconds' ? value : agenda.blockTime.seconds,
      },
    }
    dispatch(updateAgenda(payload))
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
        <AgendaDeleteButton />
        <TimeSelectForm
          value={inputValue(agenda.blockTime.seconds)}
          label="seconds"
          suffix="秒"
          maxNum={60}
          handleChange={onChangeTimeInput}
        />
      </form>
    </ListItem>
  )
}

export default AgendaForm
