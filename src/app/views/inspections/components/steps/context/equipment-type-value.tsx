import { useState } from 'react'

import { createContainer } from 'u/create-container'

import { EquipmentType } from 'm/presets'

const InspectionTypeValueContainer = createContainer(function () {
  const [equipmentTypeValue, setEquipmentTypeValue] = useState<
    EquipmentType | undefined
  >(undefined)

  return {
    equipmentTypeValue,
    setEquipmentTypeValue,
  }
})

export const InspectionTypeValueProvider = InspectionTypeValueContainer.Provider

export const useInspectionTypeValue = InspectionTypeValueContainer.useContainer
