/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  OutlinedInputProps,
  styled,
  TextField,
  TextFieldProps,
} from '@mui/material'

export const SelectTextField = styled(
  ({ InputProps = {}, ...restProps }: TextFieldProps) => (
    <TextField
      InputProps={{ ...InputProps } as OutlinedInputProps}
      {...restProps}
    />
  )
)(({ theme }) => ({
  transition: theme.transitions.create([
    'border-color',
    'background-color',
    'box-shadow',
  ]),
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '&.Mui-focused': {
    backgroundColor: 'transparent',
    borderColor: theme.palette.primary.main,
  },
}))
