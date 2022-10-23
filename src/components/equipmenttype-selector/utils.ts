import { merge } from 'lodash-es'

import { EquipmentType } from 'm/presets'

export const initialEquipmentTypeData = (input?: EquipmentType) =>
  merge<EquipmentType, EquipmentType | undefined | null>(
    {
      id: '',
      name: '',
      displayName: '',
    },
    input
  )
