import { UnitValue } from 'm/common'

// 条件
export type AECResponseDataCondition = UnitValue

export interface AECResponseDataResult extends UnitValue {
  prefix: string
}

export interface AECResponseDataInputItem {
  title: string
  values: number[]
}

export interface AECResponseDataInput {
  0: AECResponseDataInputItem
  1: AECResponseDataInputItem
}

export type AECResponseData = {
  condition?: AECResponseDataCondition
  input?: AECResponseDataInput
  result?: AECResponseDataResult
}
