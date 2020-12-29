import React, { useState } from 'react'
import { ListItem, TextField } from '@material-ui/core'
import { Agenda } from '../interfaces/index'
import DoneIcon from '@material-ui/icons/Done'

type Props = {
  agenda: Agenda | null
  handleClick: (agenda: Agenda | null) => void
}

const AgendaForm: React.FC<Props> = ({ agenda, handleClick }) => {
  if (agenda === null) {
    return null
  }

  const [newAgenda, setNewAgenda] = useState(agenda)

  const onChangeNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewAgenda({
      ...newAgenda,
      name: event.target.value,
    })
  }

  const onChangeTimeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      event.target.value !== '' ? parseInt(event.target.value) : null
    const name = event.target.name
    setNewAgenda({
      ...newAgenda,
      blockTime: {
        hours: name === 'hours' ? value : newAgenda.blockTime.hours,
        minutes: name === 'minutes' ? value : newAgenda.blockTime.minutes,
        seconds: name === 'seconds' ? value : newAgenda.blockTime.seconds,
      },
    })
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
          value={newAgenda.name}
          onChange={onChangeNameInput}
          error={newAgenda.name === ''}
        />
        <TextField
          name="hours"
          type="number"
          label="hours"
          value={inputValue(newAgenda.blockTime.hours)}
          onChange={onChangeTimeInput}
        />
        <TextField
          name="minutes"
          type="number"
          label="minutes"
          value={inputValue(newAgenda.blockTime.minutes)}
          onChange={onChangeTimeInput}
        />
        <TextField
          name="seconds"
          type="number"
          label="seconds"
          value={inputValue(newAgenda.blockTime.seconds)}
          onChange={onChangeTimeInput}
        />
        <DoneIcon color="primary" onClick={() => handleClick(null)} />
      </form>
    </ListItem>
  )
}

export default AgendaForm
