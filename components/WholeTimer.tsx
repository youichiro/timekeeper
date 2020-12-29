import React, { useState, useEffect, useCallback, createContext } from 'react'

import WholeProgressBar from './WholeProgressBar'
import WholeTimeForm from './WholeTimeForm'
import StartButton from './StartButton'
import { BlockTime, WholeProgress } from '../interfaces'
import { convertSeconds, calcEndDate } from '../utils/calc-date'

export const WholeTimerContext = createContext(
  {} as {
    wholeBlockTime: BlockTime
    setWholeBlockTime: (blockTime: BlockTime) => void
  }
)

const WholeTimer: React.FC = () => {
  const initialWholeBlockTime: BlockTime = {
    hours: 0,
    minutes: 0,
    seconds: 8,
  }
  const [wholeBlockTime, setWholeBlockTime] = useState(initialWholeBlockTime)

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
      totalSeconds: convertSeconds(wholeBlockTime),
      start: new Date(),
      end: calcEndDate(new Date(), wholeBlockTime),
    })
  }, [wholeBlockTime])

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
    <div>
      <h2>WholeTimer</h2>
      <WholeProgressBar
        total={wholeProgress.totalSeconds}
        elapsed={elapsedSeconds}
      />
      <WholeTimerContext.Provider value={{ wholeBlockTime, setWholeBlockTime }}>
        <WholeTimeForm />
      </WholeTimerContext.Provider>
      <StartButton handleClick={onClickStartButton} />
    </div>
  )
}

export default WholeTimer
