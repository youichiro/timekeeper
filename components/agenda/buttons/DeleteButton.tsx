import React from 'react'
import { useDispatch } from 'react-redux'
import { Tooltip } from '@material-ui/core'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

import { useSelector } from '../../../stores'
import { deleteAgenda } from '../../../stores/agenda-list'
import { setSelectedAgendaId } from '../../../stores/selected-agenda-id'

const useStyles = makeStyles<Theme>((theme: Theme) =>
  createStyles({
    icon: {
      fontSize: 28,
      '&:hover': {
        color: theme.palette.secondary.main,
      },
      paddingTop: 5,
    },
  })
)

const DeleteButton: React.FC = () => {
  const classes = useStyles()

  const dispatch = useDispatch()
  const selectedAgendaId = useSelector((state) => state.selectedAgendaId)

  const onClickDeleteButton = () => {
    if (selectedAgendaId !== null) {
      dispatch(deleteAgenda({ id: selectedAgendaId }))
      dispatch(setSelectedAgendaId({ id: null }))
    }
  }

  return (
    <Tooltip
      title="delete"
      style={{ cursor: 'pointer' }}
      onClick={onClickDeleteButton}
    >
      <RemoveCircleIcon color="disabled" className={classes.icon} />
    </Tooltip>
  )
}

export default DeleteButton
