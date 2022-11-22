import {
  InputBase,
  TextField,
  TextFieldProps,
  InputAdornment,
  styled,
} from '@mui/material'
import { useMemoizedFn } from 'ahooks'
import { ChangeEventHandler, useState } from 'react'
import { produce } from 'immer'

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
  const [value, setValue] = useState(() => ({
    value: `${valueProps?.value || 0}` ?? '0',
    unit: valueProps?.unit || '',
  }))

  const handleValueChange = useMemoizedFn<
    ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  >(e => {
    const nextState = produce(value, prev => {
      if (prev) {
        prev.value = e.target.value
      } else {
        return {
          value: e.target.value,
          unit: '',
        }
      }
    })

    setValue(nextState)

    const numericValue = Number(e.target.value)

    if (!isNaN(numericValue)) {
      onValueChange?.(numericValue)
      onChange?.({
        value: numericValue,
        unit: value.unit,
      })
    }
  })

  const handleUnitChange = useMemoizedFn<
    ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  >(e => {
    const nextState = produce(value, prev => {
      if (prev) {
        prev.unit = e.target.value
      } else {
        return {
          value: '0',
          unit: e.target.value,
        }
      }
    })
    setValue(nextState)
    onUnitChange?.(e.target.value)
    onChange?.({
      value: Number(value.value),
      unit: e.target.value,
    })
  })

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
            <InputBase value={value?.unit} onChange={handleUnitChange} />
          </InputAdornment>
        ),
      }}
    />
  )
}
