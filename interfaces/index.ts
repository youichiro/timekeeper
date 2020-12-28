export interface BlockTime {
  hours: number | null
  minutes: number | null
  seconds: number | null
}

export interface WholeProgress {
  isStarted: boolean
  totalSeconds: number
  start: Date
  end: Date
}
