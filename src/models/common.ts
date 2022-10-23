import { hasEmpty } from 'u/helper'

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
