import { Agenda, BlockTime } from '../interfaces'
import { convertSeconds } from '../utils/block-time'

// テキストをAgendaListに変換する
export const convertTextToAgendaList = (text: string): Agenda[] => {
  // 改行で文分割する
  const lines = text.split('\n')
  // カンマで項目と時間に分割し、不正な行は除外する
  const items = lines
    .map((line) => line.split(','))
    .filter((line) => line[0] && line[1])

  // agendaListを作成
  let startTime = 0
  const agendaList: Agenda[] = items.map((item, i) => {
    const name = item[0].trim()
    const timeStr = item[1].trim()
    const blockTime = convertTextToBlockTime(timeStr)
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

// 文字列をBlockTimeに変換する
const convertTextToBlockTime = (str: string): BlockTime => {
  let time, hours, minutes, seconds
  time = toHankaku(str)
  if (time.includes('時間')) {
    [hours, time] = time.split('時間')
  }
  if (time.includes('分')) {
    [minutes, time] = time.split('分')
  }
  if (time.includes('秒')) {
    [seconds, time] = time.split('秒')
  }
  return {
    hours: hours ? parseInt(hours) : 0,
    minutes: minutes ? parseInt(minutes) : 0,
    seconds: seconds ? parseInt(seconds) : 0,
  }
}

const toHankaku = (str: string) => {
  return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) => {
    return String.fromCharCode(s.charCodeAt(0) - 0xfee0)
  })
}
