import { fetcher } from 'ctx/fetcher'

import { UUIDV4 } from 'm/presets'

import {
  InspectionTypesByEquipmentDocument,
  InspectionTypesByEquipmentQuery,
  InspectionTypesByEquipmentQueryVariables,
} from './index.generated'

export const getInspectionTypesByEquipment = async (
  equipmentTypeId: UUIDV4
) => {
  const { data } = await fetcher<
    InspectionTypesByEquipmentQuery,
    InspectionTypesByEquipmentQueryVariables
  >(InspectionTypesByEquipmentDocument, {
    equipmentTypeId,
  })
  return data?.list || []
}
