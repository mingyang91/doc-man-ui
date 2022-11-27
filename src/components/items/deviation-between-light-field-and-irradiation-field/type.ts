import { UnitValue } from 'm/common'

// 检测条件

// 加载因素

export interface DBLFAIFDataCondition {
  left: string
  operator: string
  right: string
}

export type DBLFAIFDataResultItem = {
  label: string
  value: number
}

export type DBLFAIFDataResult = DBLFAIFDataResultItem[]

export interface DBLFAIFData {
  condition?: DBLFAIFDataCondition
  result?: DBLFAIFDataResult
}
