import { createContainer } from 'u/create-container'

import { useEquipmentTypesListQuery } from 'm/equipment-type/index.generated'

const EnumDataContext = createContainer(function useEnumData() {
  const equipmentTypes = useEquipmentTypesListQuery(
    {},
    {
      refetchOnWindowFocus: false,
      staleTime: 8640000,
    }
  )

  return {
    equipmentTypes,
  }
})

export const EnumDataProvider = EnumDataContext.Provider

export const useEnumData = EnumDataContext.useContainer
