export interface BlockTime {
  hours: number | null
  minutes: number | null
  seconds: number | null
}

export interface BlockTimeString {
  hours: string
  minutes: string
  seconds: string
}

export type Status = 'waiting' | 'running' | 'done'

export interface Agenda {
  id: number
  name: string
  blockTime: BlockTime
  time: number
  startTime: number
  endTime: number
  status: Status
}

export interface Counter {
  isStarted: boolean
  time: number
  intervalID: number | null
}

export type Theme = 'dark' | 'light'

