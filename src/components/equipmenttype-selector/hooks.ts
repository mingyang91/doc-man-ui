import { useEnumData } from '@/providers/enum-data'

export const useEquipmentTypeOptions = () => {
  const { equipmentTypes } = useEnumData()
  return equipmentTypes
}
