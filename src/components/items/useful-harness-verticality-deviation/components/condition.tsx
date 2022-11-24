import { Stack } from '@mui/material'
import { TextField } from 'mui-rff'

export interface UHVDConditionProps {
  name: string
}

export const UHVDCondition = ({ name }: UHVDConditionProps) => {
  return (
    <Stack direction="row">
      <TextField name={`${name}.left`} />
      <TextField name={`${name}.operator`} />
      <TextField name={`${name}.right`} />
    </Stack>
  )
}
