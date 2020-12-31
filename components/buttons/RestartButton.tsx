import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from '../../stores'
import { startCount, updateCount } from '../../stores/counter'

const RestartButton: React.FC = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)

  const onClickRestartButton = () => {
    if (counter.intervalID) {
      const intervalID = window.setInterval(() => dispatch(updateCount()), 1000)
      dispatch(startCount({ intervalID }))
    }
  }

  return (
    <div>
      <button type="submit" onClick={onClickRestartButton}>
        再開
      </button>
    </div>
  )
}

export default RestartButton
