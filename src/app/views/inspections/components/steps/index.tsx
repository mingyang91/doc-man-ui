import { useState } from 'react'

import { EquipmentType, InspectionReportItem, InspectionType } from 'm/presets'
import { useInspectionTypesByEquipmentQuery } from 'm/equipment-type/index.generated'

import {
  FnSubmitInspectionReport,
  groupInspectionReportItemsByType,
  transformToReportItems,
} from '../inspection-form/utils'
import { EquipmentTypeStep } from './components/equipment-type-step'
import { InspectionTypeValueProvider } from './context/equipment-type-value'
import { InspectionReportItemsValueProvider } from './context/inspection-type-items-value'
import { InspectionForm } from '../inspection-form'

export interface InspectionStepProps {
  submitForm?: FnSubmitInspectionReport
}

export const InspectionStep = ({ submitForm }: InspectionStepProps) => {
  return (
    <InspectionTypeValueProvider>
      <InspectionReportItemsValueProvider>
        <InspectionStepInner submitForm={submitForm} />
      </InspectionReportItemsValueProvider>
    </InspectionTypeValueProvider>
  )
}

type Step = EquimentTypeStep | LoadingStep | InspectionFormStep

type EquimentTypeStep = {
  name: 'EquimentType'
}

type LoadingStep = {
  name: 'Loading'
  equipmentType: EquipmentType
  inspectionItem: InspectionType
}

type InspectionFormStep = {
  name: 'InspectionForm'
  equipmentType: EquipmentType
  inspectionItem: InspectionType
  presetsItems: InspectionReportItem[]
  items1: InspectionReportItem[]
  items2: InspectionReportItem[]
}

const InspectionStepInner = ({ submitForm }: InspectionStepProps) => {
  const [step, setStep] = useState<Step>({ name: 'EquimentType' })

  const equipmentTypeId = step.name === 'Loading' ? step.equipmentType.id : ''
  const { data, isLoading } = useInspectionTypesByEquipmentQuery(
    { equipmentTypeId },
    { enabled: step.name === 'Loading' }
  )

  if (step.name === 'Loading' && !isLoading && data !== undefined) {
    const items = transformToReportItems(data.list || [])
    const { items1, items2 } = groupInspectionReportItemsByType(items)
    setStep({
      ...step,
      name: 'InspectionForm',
      presetsItems: items,
      items1,
      items2,
    })
  }

  switch (step.name) {
    case 'EquimentType':
      return (
        <EquipmentTypeStep
          onNext={(equipmentType, inspectionItem) =>
            setStep({
              name: 'Loading',
              equipmentType,
              inspectionItem,
            })
          }
        />
      )
    case 'Loading':
      return <>LOADING</>
    case 'InspectionForm':
      return <InspectionForm submitForm={submitForm} data={step} />
  }
}
