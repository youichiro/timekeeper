import React from 'react'
import { useDispatch } from 'react-redux'
import {
  ClickAwayListener,
  Grid,
  ListItem,
  ListItemIcon,
} from '@material-ui/core'

import { Agenda } from '../../interfaces/index'
import {
  updateAgenda,
  updateAgendaBorders,
  UpdateAgendaPayload,
} from '../../stores/agenda-list'
import { setSelectedAgendaId } from '../../stores/selected-agenda-id'
import DeleteButton from './buttons/DeleteButton'
import TimeSelectForm from './forms/TimeSelectForm'
import TextForm from './forms/TextForm'

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

  const onChangeTimeInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const value =
      event.target.value !== '' ? parseInt(event.target.value) : null
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

  const handleClickAway = () => {
    dispatch(setSelectedAgendaId({ id: null }))
    dispatch(updateAgendaBorders())
  }

  const inputValue = (value: number | null): number | '' => {
    return value !== null ? value : ''
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <ListItem divider={true}>
        <ListItemIcon>
          <DeleteButton />
        </ListItemIcon>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextForm
              label="name"
              value={agenda.name}
              handleChange={onChangeNameInput}
            />
          </Grid>
          <Grid item xs={6}>
            <div style={{ textAlign: 'right' }}>
              <TimeSelectForm
                value={inputValue(agenda.blockTime.hours)}
                label="hours"
                suffix="時間"
                maxNum={24}
                handleChange={onChangeTimeInput}
              />
              <TimeSelectForm
                value={inputValue(agenda.blockTime.minutes)}
                label="minutes"
                suffix="分"
                maxNum={60}
                handleChange={onChangeTimeInput}
              />
              <TimeSelectForm
                value={inputValue(agenda.blockTime.seconds)}
                label="seconds"
                suffix="秒"
                maxNum={60}
                handleChange={onChangeTimeInput}
              />
            </div>
          </Grid>
        </Grid>
      </ListItem>
    </ClickAwayListener>
  )
}

export default AgendaForm
