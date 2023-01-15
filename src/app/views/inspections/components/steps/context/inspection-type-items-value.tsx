import { useState } from 'react'
import { useMemoizedFn } from 'ahooks'

import { createContainer } from 'u/create-container'

import { InspectionTypesByEquipmentQuery } from 'm/equipment-type/index.generated'
import { InspectionReportItem, InspectionRequirement } from 'm/presets'

type InspectionReportItems = {
  items1: InspectionReportItem[]
  items2: InspectionReportItem[]
}

const InspectionReportItemsValueContainer = createContainer(function () {
  const [inspectionReportItems, setInspectionReportItems] =
    useState<InspectionReportItems>({
      items1: [],
      items2: [],
    })

  const [presetsItems, setPresetsItems] = useState<InspectionReportItem[]>([])

  const initInspectionReportItems = useMemoizedFn(
    (list: InspectionTypesByEquipmentQuery['list']) => {
      const items1: InspectionReportItem[] = list
        .filter(item => item.type === '1')
        .map(item => ({
          name: item.name,
          displayName: item.displayName,
          consts: item.consts as number[],
          requirement: item.requirement as InspectionRequirement,
          condition: item.condition,
          type: item.type,
          data: {},
        }))

      const items2: InspectionReportItem[] = list
        .filter(item => item.type === '1')
        .map(item => ({
          name: item.name,
          displayName: item.displayName,
          consts: item.consts as number[],
          requirement: item.requirement as InspectionRequirement,
          condition: item.condition,
          type: item.type,
          data: {},
        }))

      setPresetsItems([...items1, ...items2])

      setInspectionReportItems({
        items1,
        items2,
      })
    }
  )

  return {
    presetsItems,
    inspectionReportItems,
    initInspectionReportItems,
  }
})

export const InspectionReportItemsValueProvider =
  InspectionReportItemsValueContainer.Provider

export const useInspectionReportItemsValue =
  InspectionReportItemsValueContainer.useContainer
