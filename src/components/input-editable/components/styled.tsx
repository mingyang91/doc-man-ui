import { styled } from '@mui/material'
import { ComponentProps } from 'react'

export const Wrapper = styled('label')(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: theme.spacing(1),
  fontSize: theme.typography.pxToRem(16),
  lineHeight: 1.5,
}))

export type WrapperProps = ComponentProps<typeof Wrapper>

export const StyledInput = styled('input')(({ theme }) => ({
  position: 'absolute',
  border: 0,
  padding: theme.spacing(1),
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  color: theme.palette.text.primary,
  backgroundColor: 'transparent',
  opacity: 0,
  '&:focus': {
    opacity: 1,
  },
}))

export const StyledTextarea = styled('input')(({ theme }) => ({
  position: 'absolute',
  border: 0,
  padding: theme.spacing(1),
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  color: theme.palette.text.primary,
  backgroundColor: 'transparent',
  opacity: 0,
  '&:focus': {
    opacity: 1,
  },
}))

export const StyledLabel = styled('span')(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  zIndex: 1,
}))
