import React, { useState, useEffect, useCallback } from 'react'

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

  const onChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputNumber(event.target.value)
    },
    [inputNumber]
  )

  const onSubmitInput = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setDurationSecond(parseInt(inputNumber))
      setElapsedSecond(0)
    },
    [inputNumber]
  )

  return (
    <>
      <p>durationSecond: {durationSecond}</p>
      <p>elapsedSecond: {elapsedSecond}</p>
      <p>inputNumber: {inputNumber}</p>
      <form onSubmit={onSubmitInput}>
        <label>
          durationSecond:
          <input type="number" value={inputNumber} onChange={onChangeInput} />
        </label>
        <input type="submit" value="Submit" disabled={inputNumber === ''} />
      </form>
    </>
  )
}

export default Timer
