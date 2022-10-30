import {
  FormControl,
  FormControlProps,
  Stack,
  InputLabel,
  InputBase,
  TextField,
  TextFieldProps,
  InputAdornment,
} from '@mui/material'
import { useMemoizedFn, useUpdateEffect } from 'ahooks'
import { ChangeEventHandler, useEffect } from 'react'
import { useImmer } from 'use-immer'
import { isNil, isEqual } from 'lodash-es'

import { UnitValue } from 'm/common'

export interface TextFieldWithUnitProps
  extends Omit<TextFieldProps, 'onChange'> {
  label?: string
  value?: UnitValue
  onChange?: (value: UnitValue) => void
  onValueChange?: (value: number) => void
  onUnitChange?: (value: string) => void
}

export const TextFieldWithUnit = ({
  label,
  value: valueProps,
  onChange,
  onValueChange,
  onUnitChange,
  ...restProps
}: TextFieldWithUnitProps) => {
  const [value, setValue] = useImmer(
    () =>
      valueProps || {
        value: 0,
        unit: '',
      }
  )

  const handleValueChange = useMemoizedFn<
    ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  >(e => {
    setValue(prev => {
      const numericValue = Number(e.target.value)

      if (isNaN(numericValue)) {
        return prev
      }

      if (prev) {
        prev.value = numericValue
      } else {
        return {
          value: numericValue,
          unit: '',
        }
      }
    })
  })

  const handleUnitChange = useMemoizedFn<
    ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  >(e => {
    setValue(prev => {
      if (prev) {
        prev.unit = e.target.value
      } else {
        return {
          value: 0,
          unit: e.target.value,
        }
      }
    })
  })

  useUpdateEffect(() => {
    if (!isNil(value?.value) && value?.value !== valueProps?.value) {
      onValueChange?.(value?.value)
    }
  }, [onValueChange, value?.value, valueProps])

  useUpdateEffect(() => {
    if (!isNil(value?.unit) && value?.unit !== valueProps?.unit) {
      onUnitChange?.(value?.unit)
    }
  }, [onUnitChange, value?.unit, valueProps])

  useUpdateEffect(() => {
    if (!isNil(value) && !isEqual(value, valueProps)) {
      onChange?.(value)
    }
  }, [onChange, value, valueProps])

  useEffect(() => {
    if (!isNil(valueProps) && !isEqual(value, valueProps)) {
      setValue(() => valueProps)
    }
  }, [setValue, value, valueProps])

  return (
    <TextField
      label={label}
      {...restProps}
      inputMode="numeric"
      value={value?.value}
      placeholder="value"
      onChange={handleValueChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {' / '}
            <InputBase value={value?.unit} onChange={handleUnitChange} />
          </InputAdornment>
        ),
      }}
    />
  )
}
