import React, { useState, useCallback, useContext } from 'react'
import { TimerContext } from './Timer'

const TimeForm: React.FC = () => {
  const [input, setInput] = useState('')
  const { handleRestartTimer } = useContext(TimerContext)

  const onChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInput(event.target.value)
    },
    [input]
  )

  const onSubmitInput = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      handleRestartTimer(parseInt(input))
    },
    [input]
  )

  return (
    <div>
      <p>input: {input}</p>
      <form onSubmit={onSubmitInput}>
        <label>
          label:
          <input type="number" value={input} onChange={onChangeInput} />
        </label>
        <input type="submit" value="Submit" disabled={input === ''} />
      </form>
    </div>
  )
}

export default TimeForm
