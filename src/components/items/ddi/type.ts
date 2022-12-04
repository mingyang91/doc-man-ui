import { UnitValue } from 'm/common'

export interface DdiDataCondition {
  value: UnitValue
  voltage: UnitValue
  current: UnitValue
}

export interface DdiDataResult {
  scalar: UnitValue
  percentage: UnitValue
  description: string
}

export interface DdiDataInput {
  values: number[]
  baseValue: number
}

export interface DdiData {
  condition?: DdiDataCondition
  input?: DdiDataInput
  result?: DdiDataResult
}
