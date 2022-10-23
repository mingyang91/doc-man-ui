import { UnitValue } from 'm/common'

// 检测条件

// 加载因素
interface TVIDDataItemFactor {
  current: UnitValue // 电流
  timeProduct: UnitValue // 电流时间积
}

// 预设值
type TVIDDataPresets = UnitValue

interface TVIDDataCondition {
  factor: TVIDDataItemFactor
  presets: TVIDDataPresets
}

interface TVIDDataResult {
  scalar: UnitValue // 偏离值
  percentage: UnitValue // 偏离率
}

interface TVIDDataInput {
  name: string
  unit: string
  values: number[]
}

interface TVIDDataItem {
  condition?: TVIDDataCondition
  input?: TVIDDataInput
  result?: TVIDDataResult
}

export type TVIDData = TVIDDataItem[]
