import React from 'react'
import StartButton from './StartButton'
import StopButton from './StopButton'
import ResetButton from './ResetButton'
import { useSelector } from '../../stores'

const Buttons: React.FC = () => {
  const counter = useSelector((state) => state.counter)

  return (
    <div style={{ textAlign: 'center' }}>
      {counter.isStarted ? (
        <StopButton margin={2} padding={5} iconSize={50} />
      ) : (
        <StartButton margin={2} padding={5} iconSize={50} />
      )}
      <ResetButton margin={2} padding={2} iconSize={30} />
    </div>
  )
}

export default Buttons
