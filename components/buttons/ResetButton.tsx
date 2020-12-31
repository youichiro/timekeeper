import React from 'react'
import { useDispatch } from 'react-redux'
import { resetCounter } from '../../stores/counter'

const ResetButton: React.FC = () => {
  const dispatch = useDispatch()

  const onClickResetButton = () => {
    dispatch(resetCounter())
  }

  return (
    <div>
      <button type="submit" onClick={onClickResetButton}>
        リセット
      </button>
    </div>
  )
}

export default ResetButton
