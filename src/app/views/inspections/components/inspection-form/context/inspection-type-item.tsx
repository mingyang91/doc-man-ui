import { createContainer } from 'u/create-container'

import { useInspectionTypesByEquipmentQuery } from 'm/equipment-type/index.generated'

const InspectionTypeContainer = createContainer(function ({
  equipmentTypeId,
}: {
  equipmentTypeId?: string
}) {
  return useInspectionTypesByEquipmentQuery(
    {
      equipmentTypeId: equipmentTypeId || '',
    },
    {
      enabled: !!equipmentTypeId,
      refetchOnReconnect: false,
      refetchOnMount: false,
    }
  )
})

export const InspectionTypeProvider = InspectionTypeContainer.Provider

export const useInspectionTypes = InspectionTypeContainer.useContainer
