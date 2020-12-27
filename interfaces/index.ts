export interface SetTime {
  hours: number
  minutes: number
  seconds: number
}

export interface WholeProgress {
  isStarted: boolean
  totalSeconds: number
  start: Date
  end: Date
}
