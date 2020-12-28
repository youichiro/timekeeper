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

  const inputValue = (value: number | null): number | '' => {
    return value !== null ? value : ''
  }

  return (
    <div>
      <h3>WholeTimeForm</h3>
      <form>
        <label>
          <input
            name="hours"
            type="number"
            value={inputValue(wholeBlockTime.hours)}
            onChange={onChangeInput}
          />
          時間
        </label>
        <label>
          <input
            name="minutes"
            type="number"
            value={inputValue(wholeBlockTime.minutes)}
            onChange={onChangeInput}
          />
          分
        </label>
        <label>
          <input
            name="seconds"
            type="number"
            value={inputValue(wholeBlockTime.seconds)}
            onChange={onChangeInput}
          />
          秒
        </label>
      </form>
    </div>
  )
}

export default WholeTimeForm
