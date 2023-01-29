import { UnitValue } from 'm/common'

// 检测条件
export interface StpDataCondition {
  values: UnitValue[]
}

export type StpDataResult = {
  r2: number
  equation: number[]
}

export interface Point {
  x: number
  y: number
}
export interface StpDataInput {
  points: Point[]
}

export type StpData = {
  condition?: StpDataCondition
  input?: StpDataInput
  result?: StpDataResult
}
