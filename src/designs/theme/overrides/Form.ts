import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

export default function Form(_theme: Theme) {
  return {
    MuiFormHelperText: {
      defaultProps: {
        margin: 'dense',
      },
    },
  }
}
