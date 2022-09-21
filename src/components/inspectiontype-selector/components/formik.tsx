import { useMemoizedFn } from 'ahooks'
import { FieldProps } from 'formik'
import { isArray, isString } from 'lodash-es'
import { useMemo } from 'react'

import { InspectionType } from 'm/presets'

import { OnChange } from '../type'
import {
  InspectiontypeSelector,
  InspectiontypeSelectorProps,
} from './component'

export interface InspectiontypeSelectorFormikProps
  extends FieldProps<InspectionType>,
    InspectiontypeSelectorProps {}

export const InspectiontypeSelectorFormik = ({
  field,
  form: { setFieldValue, touched, errors },
  ...restProps
}: InspectiontypeSelectorFormikProps) => {
  const { name, value } = field

  const handleChange = useMemoizedFn<OnChange>(newValue => {
    setFieldValue(name, newValue)
  })

  const isError = useMemo(
    () => !!(touched[name] && errors[name]),
    [errors, name, touched]
  )

  const helperText = useMemo(() => {
    if (isArray(errors[name])) {
      return (errors[name] as string[]).join(' ')
    } else if (isString(errors[name])) {
      return errors[name] as string
    }
    return ''
  }, [errors, name])

  return (
    <InspectiontypeSelector
      value={value}
      onChange={handleChange}
      {...restProps}
      isError={isError}
      helperText={helperText}
    />
  )
}
