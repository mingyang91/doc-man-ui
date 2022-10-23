import { useMemo } from 'react'
import { FieldRenderProps } from 'react-final-form'

import { EquipmentType } from 'm/presets'

import { EquipmentTypeSelector } from './component'

export type EquipmentTypeSelectorElementProps = FieldRenderProps<EquipmentType>

export const EquipmentTypeSelectorElement = ({
  input: { onChange, ...restFieldProps },
  meta: { touched, error },
  ...restProps
}: EquipmentTypeSelectorElementProps) => {
  const isError = useMemo(() => !!(touched && error), [error, touched])

  // const handleChange = useMemoizedFn<
  // (value: EquipmentType) => void
  // >(e => {
  //   onChange?.(e.target.value)
  // })

  return (
    <EquipmentTypeSelector
      {...restFieldProps}
      {...restProps}
      error={isError}
      helperText={error}
      onChange={onChange}
    />
  )
}
