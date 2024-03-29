import { hasEmpty } from 'u/helper'

import { SerialNumber } from './presets'

import i18n from 'strings/i18n'

export type PaginationConfig = {
  pageSize: number
  page: number
  total?: number
}

export enum Conclusions {
  'Good',
  'Bad',
  'Unknown',
}

export const conclusionMap = {
  [Conclusions.Good]: i18n.t('合格'),
  [Conclusions.Bad]: i18n.t('不合格'),
  [Conclusions.Unknown]: i18n.t('未知'),
} as const

export const isSamplesAvailable = (
  samples?: unknown[]
): samples is unknown[] => {
  return !!samples?.length && !hasEmpty(samples)
}

// 带单位的数值
export interface UnitValue {
  value: number
  unit: string
  name?: string
}

export const formatUnitValue = (value?: UnitValue) => {
  return value ? `${value.value}${value.unit}` : ''
}

export const formatConclusion = (conclusion?: Conclusions | null) => {
  return conclusionMap[conclusion ?? Conclusions.Unknown]
}

export const formatSerialNumber = (serialNumber?: SerialNumber | null) => {
  return serialNumber
    ? `${serialNumber?.prefix}-${serialNumber?.year}-${serialNumber?.number}`
    : ''
}

export const formatInspectionType = (type?: string) => {
  return type === '1' ? '通用检测项目' : '专用检测项目'
}
