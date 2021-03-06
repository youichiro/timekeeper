import { add } from 'date-fns'
import { BlockTime, BlockTimeString } from '../interfaces'

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

// 数値を0で桁埋めした文字列を返す
export const zeroPaddingBlockTime = (
  blockTime: BlockTime,
  length = 2
): BlockTimeString => {
  const zeroPadding = (num: number, length: number): string =>
    ('00000000' + num).slice(-length)
  return {
    hours: zeroPadding(blockTime.hours || 0, length),
    minutes: zeroPadding(blockTime.minutes || 0, length),
    seconds: zeroPadding(blockTime.seconds || 0, length),
  }
}

// BlockTimeを表示用の文字列に変換する
export const convertBlockTimeToDisplayTime = (blockTime: BlockTime): string => {
  const btStr = zeroPaddingBlockTime(blockTime)
  const hours = btStr.hours !== '00' ? btStr.hours + ':' : ''
  return `${hours}${btStr.minutes}:${btStr.seconds}`
}

// 秒を表示用テキストに変換する
export const displayTime = (total: number): string => {
  const blockTime = convertSecondsToBlockTime(total)
  return convertBlockTimeToDisplayTime(blockTime)
}
