import { add } from 'date-fns'
import React, { useState, useEffect, useCallback } from 'react'
import { SetTime, WholeProgress } from '../interfaces'

const convertSeconds = (setTime: SetTime): number => {
  return setTime.hours * 60 * 60 + setTime.minutes * 60 + setTime.seconds
}

const calcEndDate = (start: Date, setTime: SetTime): Date => {
  return add(start, {
    hours: setTime.hours,
    minutes: setTime.minutes,
    seconds: setTime.seconds,
  })
}

const WholeTimer: React.FC = () => {
  const wholeSetTime: SetTime = {
    hours: 0,
    minutes: 0,
    seconds: 8,
  }

  const initialWholeProgress: WholeProgress = {
    isStarted: false,
    totalSeconds: 0,
    start: new Date(),
    end: new Date(),
  }
  const [wholeProgress, setWholeProgress] = useState(initialWholeProgress)

  // 開始ボタンをクリックしたらタイマーをスタートさせる
  const onClickStartButton = useCallback(() => {
    setElapsedSeconds(0)
    setWholeProgress({
      isStarted: true,
      totalSeconds: convertSeconds(wholeSetTime),
      start: new Date(),
      end: calcEndDate(new Date(), wholeSetTime),
    })
  }, [])

  // 経過時間をカウントし、設定時間に達したらストップする
  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  useEffect(() => {
    if (wholeProgress.isStarted === true) {
      const intervalID = setInterval(
        () => setElapsedSeconds(elapsedSeconds + 1),
        1000
      )
      if (elapsedSeconds >= wholeProgress.totalSeconds) {
        clearInterval(intervalID)
      }
      return () => clearInterval(intervalID)
    }
  })

  return (
    <>
      <h2>WholeTimer</h2>
      <p>totalSeconds: {wholeProgress.totalSeconds}</p>
      <p>elapsedSecond: {elapsedSeconds}</p>
      <button type="button" onClick={onClickStartButton}>
        開始
      </button>
    </>
  )
}

export default WholeTimer
