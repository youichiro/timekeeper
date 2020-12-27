import { add } from 'date-fns'
import { SetTime } from '../interfaces'

// 設定時間を秒に変換する
export const convertSeconds = (setTime: SetTime): number => {
  return setTime.hours * 60 * 60 + setTime.minutes * 60 + setTime.seconds
}

// 開始時刻と設定時間から終了時刻を計算する
export const calcEndDate = (start: Date, setTime: SetTime): Date => {
  return add(start, {
    hours: setTime.hours,
    minutes: setTime.minutes,
    seconds: setTime.seconds,
  })
}
