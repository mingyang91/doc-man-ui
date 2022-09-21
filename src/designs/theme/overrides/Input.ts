import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

export default function Input(theme: Theme) {
  return {
    MuiInputBase: {
      defaultProps: {
        margin: 'dense',
        size: 'small',
      },
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            '& svg': { color: theme.palette.text.disabled },
          },
        },
        input: {
          '&::placeholder': {
            opacity: 1,
            color: theme.palette.text.disabled,
          },
        },
      },
    },
    MuiInput: {
      defaultProps: {
        margin: 'dense',
        size: 'small',
      },
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottomColor: theme.palette.grey[500_56],
          },
        },
      },
    },
    MuiFilledInput: {
      defaultProps: {
        margin: 'dense',
        size: 'small',
      },
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.grey[500_12],
          '&:hover': {
            backgroundColor: theme.palette.grey[500_16],
          },
          '&.Mui-focused': {
            backgroundColor: theme.palette.action.focus,
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.action.disabledBackground,
          },
        },
        underline: {
          '&:before': {
            borderBottomColor: theme.palette.grey[500_56],
          },
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        margin: 'dense',
        size: 'small',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.grey[500_32],
          },
          '&.Mui-disabled': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.action.disabledBackground,
            },
          },
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiTextField: {
      defaultProps: {
        margin: 'dense',
        size: 'small',
      },
    },
  }
}
