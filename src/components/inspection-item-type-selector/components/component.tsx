import {
  FormControl,
  FormControlProps,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  SxProps,
  TextField,
  Theme,
} from '@mui/material'
import { useMemoizedFn } from 'ahooks'
import { isEqual } from 'lodash-es'
import { ChangeEventHandler, ReactNode, useEffect } from 'react'
import { useImmer } from 'use-immer'

import { InspectionType, InspectionTypeEnum } from 'm/presets'

import { OnChange } from '../type'
import { initialInspectionItemTypeData, inspectionTypeOptions } from '../utils'

import i18n from 'strings/i18n'


type OnSelectChange = (
  event: SelectChangeEvent<InspectionTypeEnum>,
  child: ReactNode
) => void

export interface InspectionItemTypeSelectorProps
  extends Omit<FormControlProps, 'value' | 'onChange'> {
  id?: string
  isError?: boolean
  label?: string
  helperText?: string
  value?: InspectionType
  onChange?: OnChange
  sx?: SxProps<Theme>
}

export const InspectionItemTypeSelector = ({
  id,
  label = i18n.t('检测类型'),
  value: valueProps,
  onChange,
  isError,
  helperText,
  ...restProps
}: InspectionItemTypeSelectorProps) => {
  const [focused, setFocused] = useImmer([false, false])

  const focusState = focused.some(Boolean)

  const [value, setValue] = useImmer<InspectionType>(() =>
    initialInspectionItemTypeData(valueProps)
  )

  const onSelectChange = useMemoizedFn<OnSelectChange>(e => {
    setValue(draft => {
      const value = e.target.value as InspectionTypeEnum
      draft.type = value
      if (value === InspectionTypeEnum.None) {
        draft.text = ''
      }
    })
  })

  const onInputChange = useMemoizedFn<
    ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  >(e => {
    setValue(draft => {
      draft.text = e.target.value
    })
  })

  const handleChangeFocus = useMemoizedFn((index: number, value: boolean) => {
    setFocused(draft => {
      draft[index] = value
    })
  })

  useEffect(() => {
    if (!isEqual(valueProps, value)) {
      onChange?.(value)
    }
  }, [value, valueProps, onChange])

  return (
    <FormControl {...restProps} focused={focusState}>
      <InputLabel htmlFor={id} shrink>
        {label}
      </InputLabel>
      <Stack direction="row" spacing={3}>
        <Select
          sx={{
            flex: 1,
          }}
          label={label}
          fullWidth
          value={value?.type || ''}
          onChange={onSelectChange}
          onFocus={() => handleChangeFocus(0, true)}
          onBlur={() => handleChangeFocus(0, false)}
        >
          {inspectionTypeOptions.map(option => (
            <MenuItem key={option[0]} value={option[0]}>
              {option[1]}
            </MenuItem>
          ))}
        </Select>
        {value?.type !== InspectionTypeEnum.None && (
          <TextField
            sx={{
              flex: 1,
            }}
            fullWidth
            placeholder={i18n.t('检测项目描述')}
            value={value?.text || ''}
            onChange={onInputChange}
            onFocus={() => handleChangeFocus(1, true)}
            onBlur={() => handleChangeFocus(1, false)}
          />
        )}
      </Stack>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  )
}
