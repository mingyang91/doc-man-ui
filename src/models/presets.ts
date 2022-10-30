/* eslint-disable @typescript-eslint/no-explicit-any */
import { FilterQuery, QuerySelector } from 'rule-judgment'

import { Conclusions } from './common'
import { InspectionTypes } from './types'

export type ScalarJson<T = any> = Record<string, T>
export type ScalarTz = number
export type UUIDV4 = string
export type ScalarNumeric = number

export enum InspectionTypeEnum {
  None = 'None',
  Other = 'Other',
  Acceptance = 'Acceptance', // 验收检测时，对应的检测项目不能减少
  State = 'State',
}

// --- 设备类型
export interface EquipmentType {
  id: UUIDV4
  name: string | null
  displayName?: string | null
}

// 检测类型字段类型
export interface InspectionType {
  type: InspectionTypeEnum
  text?: string
}

// 地址字段类型
export interface AddressField {
  province: number | null
  city: number | null
  county: number | null
  town: number | null
  provinceName: string | null
  cityName: string | null
  countyName: string | null
  townName: string | null
  detail: string | null
  postcode: string | null
}

// 序列号字段类型
export interface SerialNumber {
  year?: string
  number?: string
  prefix?: string
}

// --- 检测项指标要求

interface InspectionRequirementChild {
  display: string
  rule: FilterQuery<any> | QuerySelector<any>
}

// 检测项指标要求
export interface InspectionRequirement {
  state: InspectionRequirementChild
  acceptance: InspectionRequirementChild
}

// 检测项类型约束
export interface InspectionReportItem<
  Data extends Record<string, any> | Array<Record<string, any>> = any
> extends Omit<InspectionTypes, 'id' | 'requirement' | 'consts' | 'data'> {
  data?: Data
  requirement?: InspectionRequirement
  conclusions?: Conclusions
  consts: number[]
}
