import React from 'react'
import { useDispatch } from 'react-redux'
import { setAgendaList } from '../../stores/agenda-list'
import { resetCount, setTotal } from '../../stores/counter'
import { calcAgendaListTotalTime } from '../../utils/agenda-list'
import { convertTextToAgendaList } from '../../utils/input-text'

const Uploader: React.FC = () => {
  const dispatch = useDispatch()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const reader = new FileReader()
    const file = e.target.files![0]
    reader.onloadend = () => {
      if (reader.result) {
        const agendaList = convertTextToAgendaList(reader.result as string)
        const total = calcAgendaListTotalTime(agendaList)
        dispatch(resetCount)
        dispatch(setAgendaList(agendaList))
        dispatch(setTotal({ total }))
      }
    }
    reader.readAsText(file)
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  )
}

export default Uploader
