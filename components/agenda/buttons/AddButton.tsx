import React from 'react'
import { useDispatch } from 'react-redux'
import { Tooltip } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import AddCircleIcon from '@material-ui/icons/AddCircle'

import { addAgenda, AddAgendaPayload } from '../../../stores/agenda-list'
import { BlockTime } from '../../../interfaces'
import { useSelector } from '../../../stores'
import { setSelectedAgendaId } from '../../../stores/selected-agenda-id'

type StyleProps = {
  iconSize: number
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    icon: {
      fontSize: ({ iconSize }) => iconSize,
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
  })
)

const AddButton: React.FC<StyleProps> = (props) => {
  const classes = useStyles(props)

  const dispatch = useDispatch()
  const agendaList = useSelector((state) => state.agendaList)

  const defaultBlockTime: BlockTime = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  const onClickAddButton = () => {
    const id = agendaList.slice(-1)[0].id + 1
    const payload: AddAgendaPayload = {
      id,
      name: '',
      blockTime: defaultBlockTime,
    }
    dispatch(addAgenda(payload))
    dispatch(setSelectedAgendaId({ id }))
  }

  return (
    <Tooltip title="add" onClick={onClickAddButton}>
      <AddCircleIcon color="disabled" className={classes.icon} />
    </Tooltip>
  )
}

export default AddButton
