import React from 'react'
import { useDispatch } from 'react-redux'
import { Agenda, BlockTime } from '../../interfaces'
import { setAgendaList } from '../../stores/agenda-list'
import { resetCount, setTotal } from '../../stores/counter'
import { calcAgendaListTotalTime } from '../../utils/agenda-list'
import { convertSeconds } from '../../utils/block-time'

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

  const convertTextToAgendaList = (text: string) => {
    // 改行で文分割
    const lines = text.split('\n')
    // カンマで項目と時間に分割
    const items = lines
      .map((line) => line.split(','))
      .filter((line) => line[0] && line[1])
    let startTime = 0
    const agendaList: Agenda[] = items.map((item, i) => {
      const name = item[0].trim()
      let time = item[1].trim()
      let hours, minutes, seconds
      if (time.includes('時間')) {
        [hours, time] = time.split('時間')
      }
      if (time.includes('分')) {
        [minutes, time] = time.split('分')
      }
      if (time.includes('秒')) {
        [seconds, time] = time.split('秒')
      }
      const blockTime: BlockTime = {
        hours: hours ? parseInt(hours) : 0,
        minutes: minutes ? parseInt(minutes) : 0,
        seconds: seconds ? parseInt(seconds) : 0,
      }
      const total = convertSeconds(blockTime)
      const agenda: Agenda = {
        id: i + 1,
        name,
        blockTime,
        time: convertSeconds(blockTime),
        startTime,
        endTime: startTime + total,
        status: 'waiting',
      }
      startTime = startTime + total
      return agenda
    })
    return agendaList
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  )
}

export default Uploader
