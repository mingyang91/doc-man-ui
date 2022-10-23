import { TextFieldProps } from '@mui/material'
import { useMemoizedFn } from 'ahooks'
import { isEmpty } from 'lodash-es'
import { useMemo } from 'react'
import {
  Field,
  FieldProps,
  FieldRenderProps,
  useFormState,
} from 'react-final-form'

import { EquipmentType } from 'm/presets'

import { InspectionReportFormData } from '../../../utils'

import { useConfirm } from '@@/confirm'
import {
  EquipmentTypeSelector,
  EquipmentTypeSelectorElementProps,
} from '@@/equipmenttype-selector'

export const EquipmentTypeSelectorElement = ({
  input: { onChange, ...restFieldProps },
  meta: { touched, error },
  ...restProps
}: EquipmentTypeSelectorElementProps) => {
  const {
    values: { items },
  } = useFormState<InspectionReportFormData>()

  const { confirm } = useConfirm()

  const isError = useMemo(() => !!(touched && error), [error, touched])

  const handleChange = useMemoizedFn<(value: EquipmentType) => void>(
    async value => {
      if (!isEmpty(items)) {
        const confirmed = await confirm({
          title: '检测项变更确认',
          content: '如果变化此项，之前的检测项数据会被丢弃，请确认。',
        })

        if (confirmed) {
          onChange?.(value)
        }
      } else {
        onChange?.(value)
      }
    }
  )

  return (
    <EquipmentTypeSelector
      {...restFieldProps}
      {...restProps}
      error={isError}
      helperText={error}
      onChange={handleChange}
    />
  )
}

export type EquipmentTypeSelectorFieldProps = TextFieldProps &
  FieldProps<EquipmentType, FieldRenderProps<EquipmentType>> & {
    name?: string
  }

export const EquipmentTypeSelectorField = ({
  name,
  ...restProps
}: EquipmentTypeSelectorFieldProps) => {
  return (
    <Field
      name={name}
      {...restProps}
      component={EquipmentTypeSelectorElement}
    />
  )
}
