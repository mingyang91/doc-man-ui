import { useMemo } from 'react'
import { FieldRenderProps } from 'react-final-form'

import { LocationValue } from '../type'
import { LocationSelector, LocationSelectorProps } from './selector'

export interface LocationSelectorElementProps
  extends FieldRenderProps<LocationValue>,
    LocationSelectorProps {}

export const LocationSelectorElement = ({
  input,
  meta: { touched, error },
  ...restProps
}: LocationSelectorElementProps) => {
  const isError = useMemo(() => !!(touched && error), [error, touched])

  return (
    <LocationSelector
      {...input}
      {...restProps}
      isError={isError}
      helperText={error}
    />
  )
}
