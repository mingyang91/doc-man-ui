import { SxProps, Theme, Typography, TypographyProps } from '@mui/material'
import type { SystemStyleObject } from '@mui/system'
import { merge } from 'lodash-es'
import { forwardRef, ReactNode, useMemo } from 'react'

import { useFieldContext } from '../contexts/field-context'

export interface FieldContentProps extends TypographyProps {
  children?: ReactNode
}

export const FieldContent = forwardRef<HTMLElement, FieldContentProps>(
  ({ children, sx, ...restProps }, ref) => {
    const { id, align, direction } = useFieldContext()

    const _sx: SxProps<Theme> = useMemo(
      () =>
        ({ typography, palette }: Theme) =>
          merge<
            SystemStyleObject<Theme>,
            SystemStyleObject<Theme>,
            SystemStyleObject<Theme>
          >(
            {
              // display: 'flex',
              position: 'relative',
              alignItems: 'center',
              overflow: 'hidden',
              textAlign: align,
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              color: palette.text.secondary,
              ...typography.body1,
            },
            direction === 'row'
              ? {
                  flex: 1,
                }
              : {
                  width: '100%',
                },
            sx as SystemStyleObject<Theme>
          ),
      [align, direction, sx]
    )

    return (
      <Typography
        variant="body2"
        component="section"
        aria-labelledby={id}
        sx={_sx}
        {...restProps}
        ref={ref}
      >
        {children}
      </Typography>
    )
  }
)
