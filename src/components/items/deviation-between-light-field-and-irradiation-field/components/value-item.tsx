import { InputAdornment, InputBase, TextField } from '@mui/material'
import { useImmer } from 'use-immer'
import { useCallback, ChangeEventHandler } from 'react'

import { DBLFAIFDataResultItem } from '../type'

interface DBLFAIFValueItemProps {
  value: DBLFAIFDataResultItem
  index: number
  onChange?: (value: DBLFAIFDataResultItem, index: number) => void
}

export const DBLFAIFValueItem = ({
  value: valueProps,
  index,
  onChange,
}: DBLFAIFValueItemProps) => {
  const [value, setValue] = useImmer<{
    value: string
    label: string
  }>({
    value: valueProps.value === undefined ? '0' : `${valueProps.value}`,
    label: valueProps.label || '',
  })

  const handleValueChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    e => {
      const next = e.target.value
      const nextNumeric = Number(next)

      setValue(draft => {
        draft.value = next
      })

      if (!isNaN(nextNumeric)) {
        onChange?.(
          {
            label: value.label,
            value: nextNumeric,
          },
          index
        )
      }
    },
    [index, onChange, setValue, value.label]
  )

  const handleLabelChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    e => {
      const next = e.target.value

      setValue(draft => {
        draft.label = next
      })

      onChange?.(
        {
          label: next,
          value: valueProps.value,
        },
        index
      )
    },
    [index, onChange, setValue, valueProps.value]
  )

  return (
    <TextField
      inputMode="numeric"
      value={value?.value}
      placeholder="value"
      onChange={handleValueChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <InputBase value={value?.label} onChange={handleLabelChange} />
          </InputAdornment>
        ),
      }}
    />
  )
}
