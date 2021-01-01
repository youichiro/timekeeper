import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import React from 'react'

type Props = {
  value: number | ''
  label: string
  suffix: string
  maxNum: number
  handleChange: (event: React.ChangeEvent<any>) => void
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
    <FormControl variant="outlined">
      <InputLabel>{label}</InputLabel>
      <Select label={label} name={label} value={value} onChange={handleChange}>
        {items}
      </Select>
    </FormControl>
  )
}

export default TimeSelectForm
