import React from 'react'

type Props = {
  handleClick: () => void
}

const Buttons: React.FC<Props> = (props) => {
  return (
    <div>
      <h3>Buttons</h3>
      <button type="submit" onClick={props.handleClick}>
        開始
      </button>
    </div>
  )
}

export default Buttons
