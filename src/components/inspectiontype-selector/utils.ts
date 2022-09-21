import { merge } from 'lodash-es'

import { InspectionType, InspectionTypeEnum } from 'm/presets'

export const initialInspectiontypeData = (input?: InspectionType) => {
  return merge(
    {
      type: InspectionTypeEnum.None,
      text: '',
    },
    input
  )
}
