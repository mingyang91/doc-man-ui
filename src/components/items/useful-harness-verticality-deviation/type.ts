import { UnitValue } from 'm/common'

// 检测条件

// 加载因素

export interface UHVDDataCondition {
  left: string
  option: string
  right: string
}

export type UHVDDataResult = UnitValue

export interface UHVDData {
  condition?: UHVDDataCondition
  result?: UHVDDataResult
}
