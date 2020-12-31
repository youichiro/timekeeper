import React from 'react'
import { useDispatch } from 'react-redux'
import { resetCounter, startCount, updateCount } from '../../stores/counter'

const StartButton: React.FC = () => {
  const dispatch = useDispatch()

  const onClickStartButton = () => {
    dispatch(resetCounter())
    const intervalID = window.setInterval(() => dispatch(updateCount()), 1000)
    dispatch(startCount({ intervalID }))
  }

  return (
    <div>
      <button type="submit" onClick={onClickStartButton}>
        開始
      </button>
    </div>
  )
}

export default StartButton
