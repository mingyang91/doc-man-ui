import { MenuItem, TextField, TextFieldProps } from '@mui/material'
import { useControllableValue } from 'ahooks'
import { forwardRef, useEffect } from 'react'

import { EquipmentType } from 'm/presets'

import { useEquipmentTypeOptions } from '../hooks'

import { DropdownLoading } from '@@/utils'

export interface EquipmentTypeSelectorProps
  extends Omit<TextFieldProps, 'value' | 'onChange'> {
  value?: EquipmentType
  onChange?: (value: EquipmentType) => void
}

export const EquipmentTypeSelector = forwardRef<
  HTMLInputElement,
  EquipmentTypeSelectorProps
>(({ value: valueProps, onChange, ...restProps }, ref) => {
  const { data, isLoading, isError } = useEquipmentTypeOptions()

  const equipmentTypeList = data?.data

  const [value, setValue] = useControllableValue<EquipmentType | null>(
    {
      value: valueProps,
      onChange,
    },
    {
      defaultValue: null,
    }
  )

  useEffect(() => {
    if (equipmentTypeList && equipmentTypeList.length === 1) {
      setValue(equipmentTypeList[0])
    }
  }, [equipmentTypeList, setValue])

  return (
    <TextField
      value={value?.name || value?.displayName || ''}
      {...restProps}
      select
      ref={ref}
    >
      {isError ? (
        <>加载失败，请刷新页面...</>
      ) : isLoading || !equipmentTypeList ? (
        <DropdownLoading />
      ) : (
        equipmentTypeList?.map(option => {
          return (
            <MenuItem
              key={option.id}
              value={option.name}
              onClick={() => setValue?.(option)}
            >
              {option.displayName || option.name}
            </MenuItem>
          )
        })
      )}
    </TextField>
  )
})
