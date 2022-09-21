import { useMemoizedFn } from 'ahooks'
import { FieldProps } from 'formik'
import { isArray, isString } from 'lodash-es'
import { useMemo } from 'react'

import { LocationValue, OnChange } from '../type'
import { LocationSelector, LocationSelectorProps } from './selector'

export interface LocationSelectorFormikProps
  extends FieldProps<LocationValue>,
    LocationSelectorProps {}

export const LocationSelectorFormik = ({
  field,
  form: { setFieldValue, touched, errors },
  ...restProps
}: LocationSelectorFormikProps) => {
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
    <LocationSelector
      value={value}
      onChange={handleChange}
      {...restProps}
      isError={isError}
      helperText={helperText}
    />
  )
}
