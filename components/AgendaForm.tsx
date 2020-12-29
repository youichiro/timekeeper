import React from 'react'
import { Agenda } from '../interfaces/index'

type Props = {
  agenda: Agenda | null
}

const AgendaForm: React.FC<Props> = ({ agenda }) => {
  if (agenda !== null) {
    return (
      <div>
        <h3>AgendaForm</h3>
        <p>agenda.name: {agenda.name}</p>
      </div>
    )
  } else {
    return null
  }
}

export default AgendaForm
