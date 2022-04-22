import { Box, styled } from '@mui/material'

export const TableWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: 600,
  width: '100%',
  '& .MuiFormGroup-options': {
    alignItems: 'center',
    paddingBottom: theme.spacing(1),
    '& > div': {
      minWidth: 100,
      margin: theme.spacing(2),
      marginLeft: 0,
    },
  },
}))
