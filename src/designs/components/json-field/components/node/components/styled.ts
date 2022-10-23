import { Box, Input, Stack, styled } from '@mui/material'
import { memo } from 'react'

export const StyledKeyInput = memo(
  styled(Input, {
    shouldForwardProp: prop => prop !== 'isEditing',
  })(() => ({
    flex: '1 1',
    width: '20%',
    backgroundColor: 'transparent',
  }))
)

export const StyledValueInput = memo(
  styled(Input)(({ theme }) => ({
    flex: '1 1',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'transparent',
    width: '60%',
  }))
)

export const StyledBox = memo(
  styled(Box)(({ theme }) => ({
    position: 'relative',
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    border: '1px solid',
    borderColor: 'transparent',
    '&:hover': {
      backgroundColor: 'rgba(198,215,235,0.15)',
    },
    '&:focus-within': {
      borderColor: theme.palette.divider,
    },
  }))
)

export const StyledBoxMain = memo(
  styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexDirection: 'column',
    },
  }))
)

export const StyledOptions = memo(
  styled(Stack)(({ theme }) => ({
    width: '72px',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  }))
)

export const StyledBoxContent = memo(
  styled(Box)(({ theme }) => ({
    position: 'relative',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
  }))
)
