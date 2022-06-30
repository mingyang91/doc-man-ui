import { hasEmpty } from '@/utils/helper'

export type PaginationConfig = {
  pageSize: number
  page: number
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
