import React from 'react'
import { useDispatch } from 'react-redux'
import { stopCount } from '../../stores/counter'

const StopButton: React.FC = () => {
  const dispatch = useDispatch()

  const onClickStopButton = () => {
    dispatch(stopCount())
  }

  return (
    <div>
      <button type="submit" onClick={onClickStopButton}>
        停止
      </button>
    </div>
  )
}

export default StopButton
