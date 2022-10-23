import { SxProps, Theme, Typography, TypographyProps } from '@mui/material'
import type { SystemStyleObject } from '@mui/system'
import { merge } from 'lodash-es'
import { forwardRef, ReactNode, useMemo } from 'react'

import { useFieldContext } from '../contexts/field-context'

export interface FieldHeaderProps extends TypographyProps {
  children?: ReactNode
}

export const FieldHeader = forwardRef<HTMLLabelElement, FieldHeaderProps>(
  ({ children, sx = {}, ...restProps }, ref) => {
    const { id, align, direction, headerWidth } = useFieldContext()

    const _sx: SxProps<Theme> = useMemo(
      () =>
        ({ typography, palette }: Theme) =>
          merge<
            SystemStyleObject<Theme>,
            SystemStyleObject<Theme>,
            SystemStyleObject<Theme>
          >(
            {
              display: 'flex',
              position: 'relative',
              alignItems: 'center',
              overflow: 'hidden',
              textAlign: align,
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              color: palette.text.primary,
              ...typography.subtitle1,
              marginBottom: 1,
            },
            direction === 'row'
              ? {
                  flex: 'none',
                  width: headerWidth,
                }
              : {
                  width: '100%',
                },
            sx as SystemStyleObject<Theme>
          ),
      [align, direction, headerWidth, sx]
    )

    return (
      <Typography
        paragraph
        variant="overline"
        component="label"
        sx={_sx}
        htmlFor={id}
        {...restProps}
        ref={ref}
      >
        {children}
      </Typography>
    )
  }
)
