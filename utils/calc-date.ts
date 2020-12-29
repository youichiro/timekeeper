import { add } from 'date-fns'
import { BlockTime } from '../interfaces'

// 設定時間を秒に変換する
export const convertSeconds = (blockTime: BlockTime): number => {
  return (
    (blockTime.hours || 0) * 60 * 60 +
    (blockTime.minutes || 0) * 60 +
    (blockTime.seconds || 0)
  )
}

// 開始時刻と設定時間から終了時刻を計算する
export const calcEndDate = (start: Date, blockTime: BlockTime): Date => {
  return add(start, {
    hours: blockTime.hours || 0,
    minutes: blockTime.minutes || 0,
    seconds: blockTime.seconds || 0,
  })
}

// 秒を時間分秒に変換する
export const convertSecondsToBlockTime = (seconds: number): BlockTime => {
  return {
    hours: Math.floor((seconds % (24 * 60 * 60)) / (60 * 60)),
    minutes: Math.floor(((seconds % (24 * 60 * 60)) % (60 * 60)) / 60),
    seconds: ((seconds % (24 * 60 * 60)) % (60 * 60)) % 60,
  }
}
