import React, { useState, useEffect } from 'react'

const Timer: React.FC = () => {
  const [elapsedSecond, setElapsedSecond] = useState(0)
  const [durationSecond, setDurationSecond] = useState(10)
  const [inputNumber, setInputNumber] = useState('')

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputNumber(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setDurationSecond(parseInt(inputNumber))
    setElapsedSecond(0)
  }

  return (
    <>
      <p>durationSecond: {durationSecond}</p>
      <p>elapsedSecond: {elapsedSecond}</p>
      <p>inputNumber: {inputNumber}</p>
      <form onSubmit={handleSubmit}>
        <label>
          durationSecond:
          <input type="number" value={inputNumber} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default Timer
