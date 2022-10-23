import { Box, styled } from '@mui/material'

export const StyledItem = styled(Box)(({ theme }) => ({
  marginBlockStart: 1,
  height: '100%',

  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    width: '100%',
  },
}))

export const StyledWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'space-between',
  marginBlockStart: 1,

  [`& > ${StyledItem}:first-child`]: {
    marginBlockStart: 0,
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}))
