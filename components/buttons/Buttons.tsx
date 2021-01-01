import React from 'react'
import StartButton from './StartButton'
import StopButton from './StopButton'
import ResetButton from './ResetButton'
import { useSelector } from '../../stores'

const Buttons: React.FC = () => {
  const counter = useSelector((state) => state.counter)

  return (
    <div style={{ textAlign: 'center' }}>
      {counter.isStarted ? <StopButton /> : <StartButton />}
      <ResetButton />
    </div>
  )
}

export default Buttons
