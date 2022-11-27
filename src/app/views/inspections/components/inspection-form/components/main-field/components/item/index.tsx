import { useMemoizedFn } from 'ahooks'
import { produce } from 'immer'
import { useMemo } from 'react'
import { Field, FieldProps, FieldRenderProps, useField } from 'react-final-form'

import {
  InspectionReportItem,
  InspectionRequirement,
  InspectionType,
} from 'm/presets'

import { Header } from './components/header'
import { RequirementDisplay } from './components/requirement-display'
import { StyledWrapper } from './components/styled'

import { DefaultItem, ItemComponents } from '@@/items'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface InspectionItemProps {
  index: number
  removable: boolean
  fieldName: string
  props?: FieldProps<
    InspectionReportItem,
    FieldRenderProps<InspectionReportItem>
  >
  onRemove?: (index: number) => void
}

export const InspectionItem = ({
  index,
  onRemove,
  removable,
  fieldName,
  props,
}: InspectionItemProps) => {
  const {
    input: { value, onChange },
  } = useField<InspectionReportItem>(fieldName)

  const {
    input: { value: inspectionType },
  } = useField<InspectionType>('inspectionType')

  const Component = useMemo(
    () => ItemComponents[value.name] || DefaultItem,
    [value.name]
  )

  const handleRequirementChange = useMemoizedFn(
    (requirement: InspectionRequirement) => {
      onChange(
        produce(value, draft => {
          draft.requirement = requirement
        })
      )
    }
  )

  return (
    <StyledWrapper>
      <Header removable={removable} onRemove={() => onRemove?.(index)}>
        {value.displayName}
      </Header>
      {value.requirement && (
        <RequirementDisplay
          type={inspectionType.type}
          value={value.requirement}
          onChange={handleRequirementChange}
        />
      )}
      <Field name={fieldName} component={Component} {...props} />
    </StyledWrapper>
  )
}
