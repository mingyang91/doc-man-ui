import { styled, SxProps, Theme } from '@mui/material'
import { CSSProperties, forwardRef, HTMLAttributes, useId } from 'react'

import {
  FieldContextProps,
  FieldContextProvider,
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
  ({ id: idProps, children, direction, align, headerWidth, ...props }, ref) => {
    const idState = useId()

    const id = idProps || idState

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
          id={id}
        >
          {children}
        </FieldContextProvider>
      </FieldStyle>
    )
  }
)
