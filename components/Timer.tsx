import React, { useState, useEffect, createContext, useCallback } from 'react'
import TimeForm from './TimeForm'

export const TimerContext = createContext(
  {} as {
    handleRestartTimer: (_: number) => void
  }
)

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

  const handleRestartTimer = useCallback(
    (newDurationSecond: number) => {
      setDurationSecond(newDurationSecond)
      setElapsedSecond(0)
    },
    [setDurationSecond, setElapsedSecond]
  )

  return (
    <TimerContext.Provider value={{ handleRestartTimer }}>
      <p>durationSecond: {durationSecond}</p>
      <p>elapsedSecond: {elapsedSecond}</p>
      <TimeForm />
    </TimerContext.Provider>
  )
}

export default Timer
