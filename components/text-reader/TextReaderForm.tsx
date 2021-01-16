import React, {useContext} from 'react'
import { TextField } from '@material-ui/core'
import { TextReaderDialogContext } from './TextReaderDialog'

const TextReaderForm: React.FC = () => {
  const { text, setText } = useContext(TextReaderDialogContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <form autoComplete="off">
      <div>
        <TextField
          label=""
          multiline
          rows={8}
          placeholder="議題名, ◯時間◯分◯秒"
          onChange={handleChange}
          value={text}
          fullWidth
        />
      </div>
    </form>
  )
}

export default TextReaderForm

