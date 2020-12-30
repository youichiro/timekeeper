import React, { useContext } from 'react'
import { ListItem, TextField } from '@material-ui/core'
import { Agenda } from '../interfaces/index'
import DoneIcon from '@material-ui/icons/Done'
import { AgendaListContext } from './AgendaList'

type Props = {
  agenda: Agenda | null
  handleClick: (agenda: Agenda | null) => void
}

const AgendaForm: React.FC<Props> = ({ agenda, handleClick }) => {
  if (agenda === null) {
    return null
  }

  const { agendaList, setAgendaList } = useContext(AgendaListContext)

  const updateAgenda = (newAgenda: Agenda) => {
    setAgendaList(
      agendaList.map((a) => (a.id !== newAgenda.id ? a : newAgenda))
    )
  }

  const onChangeNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAgenda = {
      ...agenda,
      name: event.target.value,
    }
    updateAgenda(newAgenda)
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
    updateAgenda(newAgenda)
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
        <DoneIcon color="primary" onClick={() => handleClick(null)} />
      </form>
    </ListItem>
  )
}

export default AgendaForm
