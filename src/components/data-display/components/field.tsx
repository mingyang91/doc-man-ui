import { CSSProperties, forwardRef, HTMLAttributes } from 'react'
import { SxProps, Theme, styled } from '@mui/material'

import {
  FieldContextProvider,
  FieldContextProps,
} from '../contexts/field-context'

const FieldStyle = styled('div', {
  shouldForwardProp(propName) {
    return !['direction', 'align', 'headerWidth'].includes(propName as string)
  },
})<FieldContextProps>(({ theme, direction }) => ({
  display: direction === 'row' ? 'flex' : 'block',
  margin: `0 0 ${theme.spacing(1)}`,
  verticalAlign: 'top',
}))

export interface FieldLineProps
  extends FieldContextProps,
    HTMLAttributes<HTMLDivElement> {
  sx?: SxProps<Theme>
  style?: CSSProperties
}

export const FieldLine = forwardRef<HTMLDivElement, FieldLineProps>(
  ({ children, direction, align, headerWidth, ...props }, ref) => {
    return (
      <FieldStyle
        {...props}
        direction={direction}
        align={align}
        headerWidth={headerWidth}
        ref={ref}
      >
        <FieldContextProvider
          direction={direction}
          align={align}
          headerWidth={headerWidth}
        >
          {children}
        </FieldContextProvider>
      </FieldStyle>
    )
  }
)
