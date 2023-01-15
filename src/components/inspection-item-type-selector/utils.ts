import { merge } from 'lodash-es'

import { InspectionType, InspectionTypeEnum } from 'm/presets'

export const inspectionTypeOptions = [
  [InspectionTypeEnum.None, '无'],
  [InspectionTypeEnum.Acceptance, '验收检测'],
  [InspectionTypeEnum.State, '状态检测'],
  [InspectionTypeEnum.Other, '其他'],
] as const

export const initialInspectionItemTypeData = (
  input?: InspectionType
): InspectionType => {
  return merge(
    {
      type: InspectionTypeEnum.None,
      text: '',
    },
    input
  )
}

export const formatInspectionType = (input?: InspectionType | null) => {
  const value = input?.type || InspectionTypeEnum.None
  return inspectionTypeOptions.find(item => item[0] === value)?.[1] || ''
}
