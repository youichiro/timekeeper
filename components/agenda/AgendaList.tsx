import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { List, Paper } from '@material-ui/core'

import AgendaListTitle from './AgendaListTitle'
import AgendaListItem from './AgendaListItem'
import AgendaForm from './AgendaForm'
import AgendaListLastItem from './AgendaListLastItem'
import { useSelector } from '../../stores'
import { setTotal } from '../../stores/counter'
import { updateAgendaStates } from '../../stores/agenda-list'
import { calcAgendaListTotalTime } from '../../utils/agenda-list'

const AgendaList: React.FC = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)
  const agendaList = useSelector((state) => state.agendaList)
  const selectedAgendaId = useSelector((state) => state.selectedAgendaId)

  // counterを監視して、agenda.statusを更新する
  useEffect(() => {
    dispatch(updateAgendaStates({ time: counter.time }))
  }, [counter])

  // selectedAgendaIdを監視して、変化したら合計時間を再計算する
  useEffect(() => {
    const total = calcAgendaListTotalTime(agendaList)
    dispatch(setTotal({ total }))
  }, [selectedAgendaId])

  const listItems = agendaList.map((agenda) =>
    selectedAgendaId !== null && agenda.id === selectedAgendaId ? (
      <AgendaForm key={agenda.id} agenda={agenda} />
    ) : (
      <AgendaListItem key={agenda.id} agenda={agenda} />
    )
  )

  return (
    <div style={{ height: '100%', paddingBottom: 40 }}>
      <AgendaListTitle />
      <Paper variant="outlined" style={{ height: '100%', overflowY: 'auto' }}>
        <List>
          {listItems}
          <AgendaListLastItem />
        </List>
      </Paper>
    </div>
  )
}

export default AgendaList
