/* eslint-disable @typescript-eslint/no-explicit-any */

export type ScalarJson<T = any> = Record<string, T>
export type ScalarTz = number
export type UUIDV4 = string
export type ScalarNumeric = number

export enum InspectionTypeEnum {
  None = 'None',
  Other = 'Other',
  Acceptance = 'Acceptance',
  State = 'State',
}

export interface InspectionType {
  type: InspectionTypeEnum
  text?: string
}

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
