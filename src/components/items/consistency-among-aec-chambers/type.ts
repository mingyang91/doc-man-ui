import { UnitValue } from 'm/common'

// 条件
export type ConsistencyAmongAECChambersDataCondition = UnitValue

export type ConsistencyAmongAECChambersDataResult = UnitValue

export interface ConsistencyAmongAECChambersDataInput {
  title: string
  values: number[]
}

export type ConsistencyAmongAECChambersData = {
  condition?: ConsistencyAmongAECChambersDataCondition
  input?: ConsistencyAmongAECChambersDataInput
  result?: ConsistencyAmongAECChambersDataResult
}
