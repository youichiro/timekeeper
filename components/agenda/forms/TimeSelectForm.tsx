import { MenuItem, TextField } from '@material-ui/core'
import React from 'react'

type Props = {
  value: number | ''
  label: string
  suffix: string
  maxNum: number
  handleChange: (event: React.ChangeEvent<any>, name: string) => void
}

const TimeSelectForm: React.FC<Props> = ({
  value,
  label,
  suffix,
  maxNum,
  handleChange,
}) => {
  const items = [...Array(maxNum + 1).keys()].map((num) => (
    <MenuItem key={num} value={num}>
      {num}
      {suffix}
    </MenuItem>
  ))

  return (
    <TextField
      select
      value={value}
      onChange={(event) => handleChange(event, label)}
      SelectProps={{ MenuProps: { disablePortal: true } }}
      style={{ marginLeft: 8 }}
    >
      {items}
    </TextField>
  )
}

export default TimeSelectForm
