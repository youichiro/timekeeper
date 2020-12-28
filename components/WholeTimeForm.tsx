import React, { useContext } from 'react'
import { WholeTimerContext } from './WholeTimer'

const WholeTimeForm: React.FC = () => {
  const { wholeBlockTime, setWholeBlockTime } = useContext(WholeTimerContext)

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      event.target.value !== '' ? parseInt(event.target.value) : null
    const name = event.target.name
    setWholeBlockTime({
      hours: name === 'hours' ? value : wholeBlockTime.hours,
      minutes: name === 'minutes' ? value : wholeBlockTime.minutes,
      seconds: name === 'seconds' ? value : wholeBlockTime.seconds,
    })
  }

  return (
    <div>
      <h2>WholeTimeForm</h2>
      <form>
        <label>
          {' '}
          hours:
          <input
            name="hours"
            type="number"
            value={wholeBlockTime.hours || ''}
            onChange={onChangeInput}
          />
        </label>
        <label>
          {' '}
          minutes:
          <input
            name="minutes"
            type="number"
            value={wholeBlockTime.minutes || ''}
            onChange={onChangeInput}
          />
        </label>
        <label>
          {' '}
          seconds:
          <input
            name="seconds"
            type="number"
            value={wholeBlockTime.seconds || ''}
            onChange={onChangeInput}
          />
        </label>
      </form>
    </div>
  )
}

export default WholeTimeForm
