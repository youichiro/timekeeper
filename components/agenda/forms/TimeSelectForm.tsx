import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import React from 'react'

type Props = {
  value: number | ''
  label: string
  suffix: string
  maxNum: number
}

const TimeSelectForm: React.FC<Props> = ({ value, label, suffix, maxNum }) => {
  const items = [...Array(maxNum + 1).keys()].map((num) => (
    <MenuItem key={num} value={num}>
      {num}
      {suffix}
    </MenuItem>
  ))

  return (
    <FormControl variant="outlined">
      <InputLabel>{label}</InputLabel>
      <Select label={label} value={value}>
        {items}
      </Select>
    </FormControl>
  )
}

export default TimeSelectForm
