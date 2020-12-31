import React from 'react'
import StartButton from './StartButton'
import StopButton from './StopButton'
import ResetButton from './ResetButton'

const Buttons: React.FC = () => {
  return (
    <div>
      <StartButton />
      <StopButton />
      <ResetButton />
    </div>
  )
}

export default Buttons
