import { ReactNode, forwardRef, useMemo } from 'react'
import { SxProps, Theme, Typography, TypographyProps } from '@mui/material'
import { merge } from 'lodash-es'

import { useFieldContext } from '../contexts/field-context'

export interface FieldHeaderProps extends TypographyProps {
  children?: ReactNode
}

export const FieldHeader = forwardRef<HTMLElement, FieldHeaderProps>(
  ({ children, sx, ...restProps }, ref) => {
    const { align, direction, headerWidth } = useFieldContext()

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
                flex: 'none',
                width: headerWidth,
              }
            : {
                width: '100%',
              },
          sx
        ),
      [align, direction, headerWidth, sx]
    )

    console.log('FieldHeader', children)

    return (
      <Typography
        paragraph
        variant="overline"
        sx={_sx}
        {...restProps}
        ref={ref}
      >
        {children}
      </Typography>
    )
  }
)
