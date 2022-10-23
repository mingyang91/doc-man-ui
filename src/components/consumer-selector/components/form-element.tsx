import { useMemoizedFn } from 'ahooks'
import { forwardRef, memo, useMemo } from 'react'
import { FieldRenderProps } from 'react-final-form'

import { ConsumerSelectorValue } from '../type'
import { ConsumerSelector, ConsumerSelectorProps } from './component'

export interface ConsumerSelectorElementProps
  extends FieldRenderProps<ConsumerSelectorValue>,
    Omit<ConsumerSelectorProps, 'value' | 'onChange'> {}

type OnChange = (newValue: ConsumerSelectorValue | null) => void

export const ConsumerSelectorElement = memo(
  forwardRef<HTMLDivElement, ConsumerSelectorElementProps>(
    (
      {
        input: { value, onChange, ...restFieldProps },
        meta: { error, touched },
        ...restProps
      },
      ref
    ) => {
      const handleChange = useMemoizedFn<OnChange>(newValue => {
        onChange(newValue)
      })

      const isError = useMemo(() => !!(touched && error), [error, touched])

      return (
        <ConsumerSelector
          ref={ref}
          value={value}
          onChange={handleChange}
          {...restFieldProps}
          {...restProps}
          isError={isError}
          helperText={error}
        />
      )
    }
  )
)
