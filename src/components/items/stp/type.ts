import { UnitValue } from 'm/common'

// 检测条件
export interface StpDataCondition {
  values: string[]
}

export type StpDataResult = number

export interface StpDataInput {
  values: number[]
}

export interface StpData {
  condition?: StpDataCondition
  input?: StpDataInput
  result?: StpDataResult
}
