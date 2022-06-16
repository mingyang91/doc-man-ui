import { HeaderDeviceFieldsFragment } from '@/generated/graphql'

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

/**
 * 创建文档所需的API格式
 */

export interface DeviceReportItem {
  name: string
  conditionFactor?: string
  acceptanceRequire?: string
  stateRequire?: string
  conclusion?: string
  result?: string
}

type BaseDeviceReportTemplate = {
  device: {
    accordingTo?: string
    address?: string
    deviceNo?: string
    equipment?: string
    item?: string
    modelNo?: string
    name?: string
    place?: string
    requester?: string
    sampleNo?: string
    checkDate?: string
    vendor?: string
  }
  info?: {
    reportNo?: string
    checkDate?: string
  }
}

export interface DeviceReportTemplate extends BaseDeviceReportTemplate {
  items1?: DeviceReportItem[]
  items2?: DeviceReportItem[]
}
