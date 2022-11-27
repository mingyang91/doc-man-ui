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

export const StyledConclusion = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',

  ['& > *:first-of-type']: {
    marginInlineStart: 0,
  },
  ['& > *:last-of-type']: {
    marginInlineEnd: 0,
  },
  '& > *': {
    marginInlineStart: 4,
    marginInlineEnd: 4,
  },
  '& .suggest': {
    padding: theme.spacing(0, 2),
    fontSize: theme.typography.subtitle1.fontSize,
    lineHeight: '36px',
    color: theme.palette.primary.main,
    backgroundColor: '#fff090',
  },
  '& .typo': {
    padding: theme.spacing(0, 2),
    fontSize: theme.typography.subtitle1.fontSize,
    lineHeight: '36px',
    color: theme.palette.primary.main,
  },
}))
