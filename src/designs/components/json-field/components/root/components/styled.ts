import { Box, styled } from '@mui/material'
import { memo } from 'react'

export const StyledRootBox = memo(
  styled(Box)(({ theme }) => ({
    display: 'block',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    border: '1px solid',
    borderColor: theme.palette.divider,
  }))
)
