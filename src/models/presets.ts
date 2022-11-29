/* eslint-disable @typescript-eslint/no-explicit-any */
import { FilterQuery, QuerySelector } from 'u/rule-judgment'

import { Conclusions } from './common'
import { InspectionTypes } from './types'

export type ScalarJson<T = any> = Record<string, T>
export type ScalarTz = string | number
export type UUIDV4 = string
export type ScalarNumeric = number

export enum InspectionTypeEnum {
  None = 'None',
  Other = 'Other',
  Acceptance = 'acceptance', // 验收检测时，对应的检测项目不能减少
  State = 'state',
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
}

// 序列号字段类型
export interface SerialNumber {
  year?: string
  number?: string
  prefix?: string
}

// --- 检测项指标要求

export interface InspectionRequirementChild {
  display: string
  rule: FilterQuery<any> | QuerySelector<any>
}

// 检测项指标要求
export interface InspectionRequirement {
  [InspectionTypeEnum.State]: InspectionRequirementChild
  [InspectionTypeEnum.Acceptance]: InspectionRequirementChild
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

export interface InspectionReportDetail {
  items: InspectionReportItem[]
  id: UUIDV4
  equipmentCode?: string | null
  inspectionAddress: AddressField | null
  equipmentRequester?: string | null
  equipmentName?: string | null
  equipmentType: ScalarJson
  equipmentManufacturer?: string | null
  equipmentModel?: string | null
  equipmentSampleId?: string | null
  equipmentSite?: string | null
  inspectionBasis?: string | null
  inspectionInstrument?: string | null
  inspectionItem: InspectionType | null
  createAt?: ScalarTz | null
  updatedAt?: ScalarTz | null
  serialNumber?: SerialNumber | null
  inspectionDate?: ScalarTz | null
}

// Document 渲染项

export interface ReportRenderDevice {
  accordingTo?: string
  address?: string
  deviceNo?: string
  equipment?: string
  testItem?: string
  model?: string
  deviceName?: string
  sampleName?: string
  place?: string
  requester?: string
  sampleNo?: string
  vendor?: string
}

export interface ReportRenderInfo {
  reportNo?: string
  date?: string
}

export interface ReportRenderItem {
  name?: string
  conditionFactor: string
  defaultValue?: string
  result: string
  acceptanceRequire: string
  stateRequire: string
  conclusion: string
}

export type ReportRender = {
  device: ReportRenderDevice
  info?: ReportRenderInfo
  [x: `items${number}`]: ReportRenderItem[]
}
