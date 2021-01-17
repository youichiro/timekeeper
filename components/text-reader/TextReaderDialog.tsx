import React, { useState, createContext } from 'react'
import { useDispatch } from 'react-redux'
import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  DialogContentText,
} from '@material-ui/core'

import TextReaderForm from './TextReaderForm'
import { convertTextToAgendaList } from '../../utils/input-text'
import { calcAgendaListTotalTime } from '../../utils/agenda-list'
import { resetCount, setTotal } from '../../stores/counter'
import { setAgendaList } from '../../stores/agenda-list'
import { useSelector } from '../../stores'
import { closeTextReaderDialog } from '../../stores/text-reader-dialog'

export const TextReaderDialogContext = createContext(
  {} as {
    text: string
    setText: (text: string) => void
  }
)

const TextReaderDialog: React.FC = () => {
  const dispatch = useDispatch()
  const open = useSelector((state) => state.textReaderDialog)

  const [text, setText] = useState('')

  const handleClickCancel = () => {
    dispatch(closeTextReaderDialog())
  }

  const handleClickOk = () => {
    const agendaList = convertTextToAgendaList(text)
    const total = calcAgendaListTotalTime(agendaList)
    dispatch(resetCount())
    dispatch(setAgendaList(agendaList))
    dispatch(setTotal({ total }))
    dispatch(closeTextReaderDialog())
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => dispatch(closeTextReaderDialog())}
        fullWidth={true}
        maxWidth="sm"
      >
        <DialogContent>
          <DialogContentText style={{ paddingBottom: 20 }}>
            議題名と時間をカンマ区切りで入力してください
          </DialogContentText>
          <TextReaderDialogContext.Provider value={{ text, setText }}>
            <TextReaderForm />
          </TextReaderDialogContext.Provider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickCancel}>cancel</Button>
          <Button onClick={handleClickOk}>ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default TextReaderDialog
