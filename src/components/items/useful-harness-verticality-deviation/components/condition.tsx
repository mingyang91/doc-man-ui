import { Stack } from '@mui/material'
import { TextField } from 'mui-rff'

export interface UHVDConditionProps {
  name: string
}

export const UHVDCondition = ({ name }: UHVDConditionProps) => {
  return (
    <Stack direction="row">
      <TextField variant="standard" name={`${name}.left`} />
      <TextField variant="standard" name={`${name}.operator`} />
      <TextField variant="standard" name={`${name}.right`} />
    </Stack>
  )
}
