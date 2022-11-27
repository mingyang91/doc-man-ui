import { UnitValue } from 'm/common'

// 检测条件

// 条件
export interface UHHVLDataCondition {
  voltage: UnitValue
  current: UnitValue
  timeProduct: UnitValue
}

export type UHHVLDataResult = UnitValue

export interface UHHVLDataInput {
  values: number[]
  unit: 'mmAl'
}

export interface UHHVLData {
  condition?: UHHVLDataCondition
  input?: UHHVLDataInput
  result?: UHHVLDataResult
}
