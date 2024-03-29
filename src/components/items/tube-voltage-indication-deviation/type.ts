import { UnitValue } from 'm/common'

// 检测条件

// 加载因素
export interface TVIDDataItemFactor {
  current: UnitValue // 电流
  timeProduct: UnitValue // 电流时间积
}

// 预设值
type TVIDDataPresets = UnitValue

export interface TVIDDataCondition {
  factor: TVIDDataItemFactor
  presets: TVIDDataPresets
}

export interface TVIDDataResult {
  scalar: UnitValue // 偏离值
  percentage: UnitValue // 偏离率
}

export interface TVIDDataItemInput {
  name: string
  unit: string
  offset: number
  values: number[]
}

export interface TVIDDataItem {
  condition?: TVIDDataCondition
  input?: TVIDDataItemInput
  result?: TVIDDataResult
}

export type TVIDData = { items: TVIDDataItem[] }
