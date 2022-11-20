import { UnitValue } from 'm/common'

// 检测条件

// 加载因素
export interface RORDataItemCondition {
  current: UnitValue // 电流
  voltage: UnitValue // 电压
  timeProduct: UnitValue // 时间积
}

export type RORDataItemResult = UnitValue

export interface RORDataItemInput {
  name: string
  unit: string
  timeProduct: UnitValue
  values: number[]
}

export interface RORDataItem {
  condition?: RORDataItemCondition
  input?: RORDataItemInput
  result?: RORDataItemResult
}

export type RORData = RORDataItem[]
