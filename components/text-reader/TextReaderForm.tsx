import React from 'react'
import { TextField } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { setTextReaderText } from '../../stores/text-reader'
import { useSelector } from '../../stores'

const TextReaderForm: React.FC = () => {
  const dispatch = useDispatch()
  const textReader = useSelector((state) => state.textReader)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTextReaderText(e.target.value))
  }

  return (
    <form autoComplete="off">
      <div>
        <TextField
          label=""
          multiline
          rows={10}
          placeholder="議題名, ◯時間◯分◯秒"
          autoFocus
          onChange={handleChange}
          value={textReader.text}
          fullWidth
        />
      </div>
    </form>
  )
}

export default TextReaderForm
