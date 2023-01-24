import { UnitValue } from 'm/common'

// 检测条件
export interface StpDataCondition {
  values: UnitValue[]
}

export type StpDataResult = number

export interface Point {
  x: number
  y: number
}
export interface StpDataInput {
  points: Point[]
}

export interface StpData {
  condition?: StpDataCondition
  input?: StpDataInput
  result?: StpDataResult
}
