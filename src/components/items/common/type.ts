import { InspectionResults } from '@/views/inspections/components/inspection-form/utils'

import {
  InspectionTypeEnum,
  InspectionRequirement,
  InspectionReportItem,
} from 'm/presets'

// 检测项的通用字段
export interface InspectionCommonProps {
  index: number
  fieldName: string
}

export type ItemComponentProps<T extends Record<string, R>, R = unknown> = {
  name: string
  inspectionItem: InspectionTypeEnum
  requirement: InspectionRequirement
  item: InspectionReportItem<T>
  results: InspectionResults
}
