import { useMemoizedFn } from 'ahooks'
import { produce } from 'immer'
import { useMemo, FC } from 'react'
import { useField } from 'react-final-form'

import {
  InspectionReportItem,
  InspectionRequirement,
  InspectionType,
} from 'm/presets'

import { Header } from './components/header'
import { RequirementDisplay } from './components/requirement-display'
import { StyledWrapper } from './components/styled'
import { InspectionResults } from '../../../../utils'

import { DefaultItem, ItemComponents } from '@@/items'
import { ItemComponentProps } from '@@/items/common/type'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface InspectionItemProps {
  index: number
  removable: boolean
  fieldName: string
  onRemove?: (index: number) => void
  results: InspectionResults
}

export const InspectionItem = ({
  index,
  onRemove,
  removable,
  fieldName,
  results,
}: InspectionItemProps) => {
  const {
    input: { value, onChange },
  } = useField<InspectionReportItem<Record<string, unknown>>>(fieldName)

  const {
    input: { value: inspectionType },
  } = useField<InspectionType>('inspectionType')

  const Component = useMemo(
    () =>
      (
        ItemComponents as unknown as Record<
          string,
          FC<ItemComponentProps<Record<string, unknown>>>
        >
      )[value.name] || DefaultItem,
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
      <Component
        name={fieldName}
        inspectionItem={inspectionType.type}
        requirement={value.requirement!}
        item={value}
        results={results}
      />
    </StyledWrapper>
  )
}
