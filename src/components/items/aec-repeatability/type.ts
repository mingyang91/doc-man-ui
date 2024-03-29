import { UnitValue } from 'm/common'

// 条件
export type AECRepeatabilityDataCondition = UnitValue

export type AECRepeatabilityDataResult = UnitValue

export interface AECRepeatabilityDataInput {
  values: number[]
}

export type AECRepeatabilityData = {
  condition?: AECRepeatabilityDataCondition
  input?: AECRepeatabilityDataInput
  result?: AECRepeatabilityDataResult
}
