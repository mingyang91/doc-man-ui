import { useMemo, useState } from 'react'
import { useMemoizedFn } from 'ahooks'
import { useImmer } from 'use-immer'

import { getInspectionTypesByEquipment } from 'm/equipment-type'
import { EquipmentType, InspectionReportItem, InspectionType } from 'm/presets'

import {
  FnSubmitInspectionReport,
  groupInspectionReportItemsByType,
  transformToReportItems,
} from '../inspection-form/utils'
import { EquipmentTypeStep } from './components/equipment-type-step'
import { InspectionTypeValueProvider } from './context/equipment-type-value'
import {
  InspectionReportItemsValueProvider,
  useInspectionReportItemsValue,
} from './context/inspection-type-items-value'
import { InspectionForm } from '../inspection-form'

import { initialInspectionItemTypeData } from '@@/inspection-item-type-selector/utils'

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

const InspectionStepInner = ({ submitForm }: InspectionStepProps) => {
  const [step, setStep] = useState(0)

  const [initialData, setInitialData] = useImmer({
    equipmentType: {
      id: '',
      name: '',
      displayName: '',
    } as EquipmentType,
    inspectionItem: initialInspectionItemTypeData(),
    presetsItems: [] as InspectionReportItem[],
    items1: [] as InspectionReportItem[],
    items2: [] as InspectionReportItem[],
  })

  const handleEquipmentTypeValue = useMemoizedFn(
    async (equipmentType: EquipmentType, inspectionType: InspectionType) => {
      const list = await getInspectionTypesByEquipment(equipmentType.id)

      setInitialData(draft => {
        const items = transformToReportItems(list)
        const { items1, items2 } = groupInspectionReportItemsByType(items)

        console.log('setInitialData', items)

        draft.equipmentType = equipmentType
        draft.inspectionItem = inspectionType
        draft.presetsItems = items
        draft.items1 = items1
        draft.items2 = items2
      })
      setStep(1)
    }
  )

  return (
    <>
      {step === 0 && <EquipmentTypeStep onNext={handleEquipmentTypeValue} />}
      {step === 1 && (
        <InspectionForm submitForm={submitForm} data={initialData} />
      )}
    </>
  )
}
