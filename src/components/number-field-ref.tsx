import NumberFormat from 'react-number-format'
import { forwardRef } from 'react'

import type { NumberFormatProps } from 'react-number-format'

export interface NumberFieldRefProps extends NumberFormatProps {
  onChange?: (event: { target: { name: string; value: string } }) => void
  name: string
}

export const NumberFieldRef = forwardRef<HTMLInputElement, NumberFieldRefProps>(
  ({ onChange, ...restProps }, ref) => {
    return (
      <NumberFormat
        {...restProps}
        isNumericString
        getInputRef={ref}
        onValueChange={values => {
          onChange?.({
            target: {
              name: restProps.name,
              value: values.value,
            },
          })
        }}
      />
    )
  }
)
