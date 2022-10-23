import { useMemo } from 'react'
import { FieldRenderProps } from 'react-final-form'

import { InspectionType } from 'm/presets'

import {
  InspectiontypeSelector,
  InspectiontypeSelectorProps,
} from './component'

export interface InspectiontypeSelectorElementProps
  extends FieldRenderProps<InspectionType>,
    InspectiontypeSelectorProps {}

export const InspectiontypeSelectorElement = ({
  input,
  meta: { touched, error },
  ...restProps
}: InspectiontypeSelectorElementProps) => {
  const isError = useMemo(() => !!(touched && error), [error, touched])

  return (
    <InspectiontypeSelector
      {...restProps}
      {...input}
      isError={isError}
      helperText={error}
    />
  )
}
