import { ReactNode, forwardRef, useMemo } from 'react'
import { SxProps, Theme, Typography, TypographyProps } from '@mui/material'
import { merge } from 'lodash-es'

import { useFieldContext } from '../contexts/field-context'

export interface FieldContentProps extends TypographyProps {
  children?: ReactNode
}

export const FieldContent = forwardRef<HTMLElement, FieldContentProps>(
  ({ children, sx, ...restProps }, ref) => {
    const { align, direction } = useFieldContext()

    const _sx: SxProps<Theme> = useMemo(
      () =>
        merge(
          {
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            overflow: 'hidden',
            textAlign: align,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          },
          direction === 'row'
            ? {
                flex: 1,
              }
            : {
                width: '100%',
              },
          sx
        ),
      [align, direction, sx]
    )

    return (
      <Typography
        variant="body2"
        component="section"
        sx={_sx}
        {...restProps}
        ref={ref}
      >
        {children}
      </Typography>
    )
  }
)
