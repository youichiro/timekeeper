import React, { useState, createContext } from 'react'
import { useDispatch } from 'react-redux'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from '@material-ui/core'

import TextReaderForm from './TextReaderForm'
import { convertTextToAgendaList } from '../../utils/input-text'
import { calcAgendaListTotalTime } from '../../utils/agenda-list'
import { resetCount, setTotal } from '../../stores/counter'
import { setAgendaList } from '../../stores/agenda-list'

export const TextReaderDialogContext = createContext(
  {} as {
    text: string
    setText: (text: string) => void
  }
)

const TextReaderDialog: React.FC = () => {
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')

  const handleSend = () => {
    const agendaList = convertTextToAgendaList(text)
    const total = calcAgendaListTotalTime(agendaList)
    dispatch(resetCount)
    dispatch(setAgendaList(agendaList))
    dispatch(setTotal({ total }))
    setOpen(false)
  }

  return (
    <div>
      <button type="button" onClick={() => setOpen(true)}>
        open
      </button>
      <p>{text}</p>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth={true}
        maxWidth="lg"
      >
        <DialogTitle>title</DialogTitle>
        <DialogContent>
          <TextReaderDialogContext.Provider value={{ text, setText }}>
            <TextReaderForm />
          </TextReaderDialogContext.Provider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSend}>send</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default TextReaderDialog
