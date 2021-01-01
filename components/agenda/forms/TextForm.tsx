import { TextField } from '@material-ui/core'
import React from 'react'

type Props = {
  label: string
  value: string
  handleChange: (event: React.ChangeEvent<any>) => void
}

const TextForm: React.FC<Props> = ({ label, value, handleChange }) => {
  return <TextField name={label} value={value} onChange={handleChange} />
}

export default TextForm