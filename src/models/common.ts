import { hasEmpty } from 'u/helper'

import { SerialNumber } from './presets'

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
  [Conclusions.Good]: '合格',
  [Conclusions.Bad]: '不合格',
  [Conclusions.Unknown]: '未知',
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
