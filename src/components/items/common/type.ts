import { Conclusions } from 'm/common'
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

export type ItemComponentProps<
  T extends Record<string, R> | Record<string, R>[],
  R = any
> = {
  name: string
  inspectionItem: InspectionTypeEnum
  requirement: InspectionRequirement
  item: InspectionReportItem<T>
}
