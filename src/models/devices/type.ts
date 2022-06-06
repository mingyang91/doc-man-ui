import { Conclusions } from '../common'

/**
 * 一个检测项必备属性
 */
export interface DetectionField {
  name: string
  acceptanceRequire: string
  stateRequire: string
  conclusion?: Conclusions
}

/**
 * 写入文档的检测项字段
 */
export interface DetectionFieldInDoc {
  name: string // 检测项名
  conditionFactor?: string // 条件因子
  acceptanceRequire?: string
  stateRequire?: string
  conclusion?: string
}

export const unitCurrent = 'mA'
