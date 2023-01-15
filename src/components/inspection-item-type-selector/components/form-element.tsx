import { useMemo } from 'react'
import { FieldRenderProps } from 'react-final-form'

import { InspectionType } from 'm/presets'

import {
  InspectionItemTypeSelector,
  InspectionItemTypeSelectorProps,
} from './component'

export interface InspectionItemTypeSelectorElementProps
  extends FieldRenderProps<InspectionType>,
    InspectionItemTypeSelectorProps {}

export const InspectionItemTypeSelectorElement = ({
  input,
  meta: { touched, error },
  ...restProps
}: InspectionItemTypeSelectorElementProps) => {
  const isError = useMemo(() => !!(touched && error), [error, touched])

  return (
    <InspectionItemTypeSelector
      {...restProps}
      {...input}
      isError={isError}
      helperText={error}
    />
  )
}
