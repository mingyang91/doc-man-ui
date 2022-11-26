import { Stack } from '@mui/material'
import { TextField } from 'mui-rff'

export interface DBLFAIFConditionProps {
  name: string
}

export const DBLFAIFCondition = ({ name }: DBLFAIFConditionProps) => {
  return (
    <Stack direction="row">
      <TextField variant="standard" name={`${name}.left`} />
      <TextField variant="standard" name={`${name}.operator`} />
      <TextField variant="standard" name={`${name}.right`} />
    </Stack>
  )
}
