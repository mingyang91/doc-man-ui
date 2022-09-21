import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

export default function Accordion(theme: Theme) {
  return {
    MuiAccordion: {
      styleOverrides: {
        root: {
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: theme.shape.borderRadius,
          marginBottom: theme.spacing(2),

          '&.Mui-expanded': {
            boxShadow: theme.customShadows.z8,
          },
          '&.Mui-disabled': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(1),
          backgroundColor:
            theme.palette.mode === 'dark'
              ? 'rgba(255, 255, 255, .05)'
              : 'rgba(0, 0, 0, .01)',
          flexDirection: 'row-reverse',
          '&.Mui-disabled': {
            opacity: 1,
            color: theme.palette.action.disabled,
            '& .MuiTypography-root': {
              color: 'inherit',
            },
          },
          '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            margin: `0 ${theme.spacing(1)}`,
            transform: 'rotate(90deg)',
          },
        },
        expandIconWrapper: {
          color: 'inherit',
        },
      },
    },
  }
}
