import React from 'react'

type Props = {
  handleClick: () => void
}

const StartButton: React.FC<Props> = (props) => {
  return (
    <div>
      <h3>StartButton</h3>
      <button type="submit" onClick={props.handleClick}>
        開始
      </button>
    </div>
  )
}

export default StartButton