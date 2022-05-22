import { styled, IconButton } from '@mui/material'

export const CellSideButton = styled(IconButton, {
  overridesResolver: (_, styleProps) => [styleProps.root],
})<{
  color?:
    | 'inherit'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
}>(({ theme, color = 'default' }) => [
  {
    position: 'absolute',
    right: '0px',
    top: '50%',
    transform: 'translate(50%, -50%)',
    zIndex: 5,
  },
  () => {
    switch (color) {
      case 'inherit':
        return {
          backgroundColor: theme.palette.grey[200],
          ':hover': {
            backgroundColor: theme.palette.grey[300],
          },
        }
      case 'primary':
        return {
          color: theme.palette.grey[0],
          backgroundColor: theme.palette.primary.main,
          ':hover': {
            backgroundColor: theme.palette.primary.dark,
          },
        }
      case 'secondary':
        return {
          color: theme.palette.grey[0],
          backgroundColor: theme.palette.secondary.main,
          ':hover': {
            backgroundColor: theme.palette.secondary.dark,
          },
        }
      case 'error':
        return {
          color: theme.palette.grey[0],
          backgroundColor: theme.palette.error.main,
          ':hover': {
            backgroundColor: theme.palette.error.dark,
          },
        }
      case 'info':
        return {
          color: theme.palette.grey[0],
          backgroundColor: theme.palette.info.main,
          ':hover': {
            backgroundColor: theme.palette.info.dark,
          },
        }
      case 'success':
        return {
          color: theme.palette.grey[0],
          backgroundColor: theme.palette.success.main,
          ':hover': {
            backgroundColor: theme.palette.success.dark,
          },
        }
      case 'warning':
        return {
          color: theme.palette.grey[0],
          backgroundColor: theme.palette.warning.main,
          ':hover': {
            backgroundColor: theme.palette.warning.dark,
          },
        }
      case 'default':
      default:
        return {
          backgroundColor: theme.palette.grey[200],
          ':hover': {
            backgroundColor: theme.palette.grey[300],
          },
        }
    }
  },
])
