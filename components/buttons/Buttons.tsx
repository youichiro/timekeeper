import React from 'react'
import StartButton from './StartButton'
import StopButton from './StopButton'
import ResetButton from './ResetButton'
import RestartButton from './RestartButton'

const Buttons: React.FC = () => {
  return (
    <div>
      <StartButton />
      <StopButton />
      <ResetButton />
      <RestartButton />
    </div>
  )
}

export default Buttons
