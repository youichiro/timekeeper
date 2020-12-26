import React, { useState, useCallback, useContext } from 'react'
import { TimerContext } from './Timer'

const TimeForm: React.FC = () => {
  const [input, setInput] = useState('')
  const { handleUpdateDurationSecond, handleResetElapsedSecond } = useContext(
    TimerContext
  )

  const onChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInput(event.target.value)
    },
    [input]
  )

  const onSubmitInput = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      handleUpdateDurationSecond(parseInt(input))
      handleResetElapsedSecond()
    },
    [input]
  )

  return (
    <>
      <p>input: {input}</p>
      <form onSubmit={onSubmitInput}>
        <label>
          label:
          <input type="number" value={input} onChange={onChangeInput} />
        </label>
        <input type="submit" value="Submit" disabled={input === ''} />
      </form>
    </>
  )
}

export default TimeForm
