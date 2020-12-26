import React, { useState, useEffect } from 'react'

const Timer: React.FC = () => {
  const durationSecond = 10
  const [elapsedSecond, setElapsedSecond] = useState(0)

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

  return (
    <>
      <p>{elapsedSecond}</p>
    </>
  )
}

export default Timer
