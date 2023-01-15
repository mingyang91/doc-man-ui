import { Box, styled } from '@mui/material'
import { ReactNode } from 'react'

const StyledStepWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}))

const StyledStepHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: 56,
  padding: theme.spacing(0, 2),
  lineHeight: '56px',
  fontSize: 16,
  fontWeight: 500,
  color: theme.palette.text.primary,
}))

const StyledStepContent = styled(Box)(({ theme }) => ({
  minWidth: 480,
  minHeight: 360,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledStepFooter = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: 56,
  padding: theme.spacing(0, 2),
  lineHeight: '56px',
}))

interface StepItemProps {
  header?: ReactNode
  children?: ReactNode
  footer?: ReactNode
}

export const StepItem = ({ header, children, footer }: StepItemProps) => {
  return (
    <StyledStepWrapper>
      {header && <StyledStepHeader>{header}</StyledStepHeader>}
      {children && <StyledStepContent>{children}</StyledStepContent>}
      {footer && <StyledStepFooter>{footer}</StyledStepFooter>}
    </StyledStepWrapper>
  )
}
