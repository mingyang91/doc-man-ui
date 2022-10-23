import {
  FindEquipmentQueryVariables,
  useFindEquipmentQuery,
} from 'm/equipment/index.generated'

export const useFindEquipment = (
  variables: FindEquipmentQueryVariables,
  enabled = false
) => {
  return useFindEquipmentQuery(variables, {
    enabled,
  })
}
