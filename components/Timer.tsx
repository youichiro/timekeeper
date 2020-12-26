import React, { useState, useEffect, createContext, useCallback } from 'react'
import TimeForm from './TimeForm'

type TimerContextValue = {
  handleUpdateDurationSecond: (_: number) => void
  handleResetElapsedSecond: () => void
}

export const TimerContext = createContext({} as TimerContextValue)

const Timer: React.FC = () => {
  const [elapsedSecond, setElapsedSecond] = useState(0)
  const [durationSecond, setDurationSecond] = useState(10)

  useEffect(() => {
    const countUp = () => {
      setElapsedSecond(elapsedSecond + 1)
    }
    const intervalID = setInterval(countUp, 1000)
    if (elapsedSecond >= durationSecond) {
      clearInterval(intervalID)
    }
    return () => {
      clearInterval(intervalID)
    }
  })

  const handleUpdateDurationSecond = useCallback(
    (num: number) => {
      setDurationSecond(num)
    },
    [setDurationSecond]
  )

  const handleResetElapsedSecond = useCallback(() => {
    setElapsedSecond(0)
  }, [setElapsedSecond])

  return (
    <TimerContext.Provider
      value={{ handleUpdateDurationSecond, handleResetElapsedSecond }}
    >
      <p>durationSecond: {durationSecond}</p>
      <p>elapsedSecond: {elapsedSecond}</p>
      <TimeForm />
    </TimerContext.Provider>
  )
}

export default Timer
