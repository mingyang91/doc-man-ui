/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
} from '@tanstack/react-query'

import { useFetch } from 'ctx/fetcher'

import type {
  ScalarJson,
  ScalarTz,
  ScalarNumeric,
  UUIDV4,
  InspectionTypeEnum,
} from 'm/presets'

import * as Types from '../types'
import { UserInfoFragmentDoc } from '../public.generated'

export type InspectionReportHeaderFragment = {
  id: UUIDV4
  equipmentCode?: string | null
  inspectionAddress: ScalarJson
  equipmentRequester?: string | null
  equipmentName?: string | null
  equipmentType: ScalarJson
  equipmentManufacturer?: string | null
  equipmentModel?: string | null
  equipmentSampleId?: string | null
  equipmentSite?: string | null
  inspectionBasis?: string | null
  inspectionInstrument?: string | null
  inspectionDate?: ScalarTz | null
  inspectionItem: ScalarJson
  createAt?: ScalarTz | null
  updatedAt?: ScalarTz | null
  serialNumber?: ScalarJson | null
  creator?: {
    id: number
    username: string
    avatar?: string | null
    role: any
    email?: string | null
    displayName?: string | null
  } | null
}

export type InspectionReportHeaderFragmentVariables = Types.Exact<{
  [key: string]: never
}>

export type InspectionReportFragment = {
  presetsItems: ScalarJson
  items1: ScalarJson
  items2: ScalarJson
  id: UUIDV4
  equipmentCode?: string | null
  inspectionAddress: ScalarJson
  equipmentRequester?: string | null
  equipmentName?: string | null
  equipmentType: ScalarJson
  equipmentManufacturer?: string | null
  equipmentModel?: string | null
  equipmentSampleId?: string | null
  equipmentSite?: string | null
  inspectionBasis?: string | null
  inspectionInstrument?: string | null
  inspectionDate?: ScalarTz | null
  inspectionItem: ScalarJson
  createAt?: ScalarTz | null
  updatedAt?: ScalarTz | null
  serialNumber?: ScalarJson | null
  creator?: {
    id: number
    username: string
    avatar?: string | null
    role: any
    email?: string | null
    displayName?: string | null
  } | null
}

export type InspectionReportFragmentVariables = Types.Exact<{
  [key: string]: never
}>

export type InspectionReportListQueryVariables = Types.Exact<{
  limit?: Types.InputMaybe<Types.Scalars['Int']>
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  order_by?: Types.InputMaybe<
    Array<Types.InspectionReportOrderBy> | Types.InspectionReportOrderBy
  >
  where?: Types.InputMaybe<Types.InspectionReportBoolExp>
}>

export type InspectionReportListQuery = {
  list: Array<{
    presetsItems: ScalarJson
    items1: ScalarJson
    items2: ScalarJson
    id: UUIDV4
    equipmentCode?: string | null
    inspectionAddress: ScalarJson
    equipmentRequester?: string | null
    equipmentName?: string | null
    equipmentType: ScalarJson
    equipmentManufacturer?: string | null
    equipmentModel?: string | null
    equipmentSampleId?: string | null
    equipmentSite?: string | null
    inspectionBasis?: string | null
    inspectionInstrument?: string | null
    inspectionDate?: ScalarTz | null
    inspectionItem: ScalarJson
    createAt?: ScalarTz | null
    updatedAt?: ScalarTz | null
    serialNumber?: ScalarJson | null
    creator?: {
      id: number
      username: string
      avatar?: string | null
      role: any
      email?: string | null
      displayName?: string | null
    } | null
  }>
  total: { aggregate?: { count: number } | null }
}

export type InspectionReportByIdQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>
}>

export type InspectionReportByIdQuery = {
  detail?: {
    presetsItems: ScalarJson
    items1: ScalarJson
    items2: ScalarJson
    id: UUIDV4
    equipmentCode?: string | null
    inspectionAddress: ScalarJson
    equipmentRequester?: string | null
    equipmentName?: string | null
    equipmentType: ScalarJson
    equipmentManufacturer?: string | null
    equipmentModel?: string | null
    equipmentSampleId?: string | null
    equipmentSite?: string | null
    inspectionBasis?: string | null
    inspectionInstrument?: string | null
    inspectionDate?: ScalarTz | null
    inspectionItem: ScalarJson
    createAt?: ScalarTz | null
    updatedAt?: ScalarTz | null
    serialNumber?: ScalarJson | null
    creator?: {
      id: number
      username: string
      avatar?: string | null
      role: any
      email?: string | null
      displayName?: string | null
    } | null
  } | null
}

export type CreateInspectionReportMutationVariables = Types.Exact<{
  data?: Types.InputMaybe<Types.InspectionReportInsertInput>
}>

export type CreateInspectionReportMutation = {
  returning?: {
    presetsItems: ScalarJson
    items1: ScalarJson
    items2: ScalarJson
    id: UUIDV4
    equipmentCode?: string | null
    inspectionAddress: ScalarJson
    equipmentRequester?: string | null
    equipmentName?: string | null
    equipmentType: ScalarJson
    equipmentManufacturer?: string | null
    equipmentModel?: string | null
    equipmentSampleId?: string | null
    equipmentSite?: string | null
    inspectionBasis?: string | null
    inspectionInstrument?: string | null
    inspectionDate?: ScalarTz | null
    inspectionItem: ScalarJson
    createAt?: ScalarTz | null
    updatedAt?: ScalarTz | null
    serialNumber?: ScalarJson | null
    creator?: {
      id: number
      username: string
      avatar?: string | null
      role: any
      email?: string | null
      displayName?: string | null
    } | null
  } | null
}

export type UpdateInspectionReportByIdMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>
  data?: Types.InputMaybe<Types.InspectionReportSetInput>
}>

export type UpdateInspectionReportByIdMutation = {
  returning?: {
    presetsItems: ScalarJson
    items1: ScalarJson
    items2: ScalarJson
    id: UUIDV4
    equipmentCode?: string | null
    inspectionAddress: ScalarJson
    equipmentRequester?: string | null
    equipmentName?: string | null
    equipmentType: ScalarJson
    equipmentManufacturer?: string | null
    equipmentModel?: string | null
    equipmentSampleId?: string | null
    equipmentSite?: string | null
    inspectionBasis?: string | null
    inspectionInstrument?: string | null
    inspectionDate?: ScalarTz | null
    inspectionItem: ScalarJson
    createAt?: ScalarTz | null
    updatedAt?: ScalarTz | null
    serialNumber?: ScalarJson | null
    creator?: {
      id: number
      username: string
      avatar?: string | null
      role: any
      email?: string | null
      displayName?: string | null
    } | null
  } | null
}

export type DeleteInspectionReportByIdMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>
}>

export type DeleteInspectionReportByIdMutation = {
  returning?: { id: UUIDV4 } | null
}

export const InspectionReportHeaderFragmentDoc = `
    fragment InspectionReportHeader on inspection_report {
  id
  equipmentCode
  inspectionAddress
  equipmentRequester
  equipmentName
  equipmentType
  equipmentManufacturer
  equipmentModel
  equipmentSampleId
  equipmentSite
  inspectionBasis
  inspectionInstrument
  inspectionDate
  inspectionItem
  createAt
  updatedAt
  serialNumber
  creator {
    ...UserInfo
  }
}
    `
export const InspectionReportFragmentDoc = `
    fragment InspectionReport on inspection_report {
  ...InspectionReportHeader
  presetsItems
  items1
  items2
}
    `
export const InspectionReportListDocument = `
    query InspectionReportList($limit: Int = 10, $offset: Int = 10, $order_by: [inspection_report_order_by!] = {}, $where: inspection_report_bool_exp = {}) {
  list: inspection_report(
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...InspectionReport
  }
  total: inspection_report_aggregate {
    aggregate {
      count
    }
  }
}
    ${InspectionReportFragmentDoc}
${InspectionReportHeaderFragmentDoc}
${UserInfoFragmentDoc}`
export const useInspectionReportListQuery = <
  TData = InspectionReportListQuery,
  TError = unknown
>(
  variables?: InspectionReportListQueryVariables,
  options?: UseQueryOptions<InspectionReportListQuery, TError, TData>
) =>
  useQuery<InspectionReportListQuery, TError, TData>(
    variables === undefined
      ? ['InspectionReportList']
      : ['InspectionReportList', variables],
    useFetch<InspectionReportListQuery, InspectionReportListQueryVariables>(
      InspectionReportListDocument
    ).bind(null, variables),
    options
  )
export const InspectionReportByIdDocument = `
    query InspectionReportById($id: uuid = "") {
  detail: inspection_report_by_pk(id: $id) {
    ...InspectionReport
  }
}
    ${InspectionReportFragmentDoc}
${InspectionReportHeaderFragmentDoc}
${UserInfoFragmentDoc}`
export const useInspectionReportByIdQuery = <
  TData = InspectionReportByIdQuery,
  TError = unknown
>(
  variables?: InspectionReportByIdQueryVariables,
  options?: UseQueryOptions<InspectionReportByIdQuery, TError, TData>
) =>
  useQuery<InspectionReportByIdQuery, TError, TData>(
    variables === undefined
      ? ['InspectionReportById']
      : ['InspectionReportById', variables],
    useFetch<InspectionReportByIdQuery, InspectionReportByIdQueryVariables>(
      InspectionReportByIdDocument
    ).bind(null, variables),
    options
  )
export const CreateInspectionReportDocument = `
    mutation CreateInspectionReport($data: inspection_report_insert_input = {}) {
  returning: insert_inspection_report_one(
    object: $data
    on_conflict: {constraint: equipment_inspection_reports_id_key}
  ) {
    ...InspectionReport
  }
}
    ${InspectionReportFragmentDoc}
${InspectionReportHeaderFragmentDoc}
${UserInfoFragmentDoc}`
export const useCreateInspectionReportMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    CreateInspectionReportMutation,
    TError,
    CreateInspectionReportMutationVariables,
    TContext
  >
) =>
  useMutation<
    CreateInspectionReportMutation,
    TError,
    CreateInspectionReportMutationVariables,
    TContext
  >(
    ['CreateInspectionReport'],
    useFetch<
      CreateInspectionReportMutation,
      CreateInspectionReportMutationVariables
    >(CreateInspectionReportDocument),
    options
  )
export const UpdateInspectionReportByIdDocument = `
    mutation UpdateInspectionReportById($id: uuid = "", $data: inspection_report_set_input = {}) {
  returning: update_inspection_report_by_pk(pk_columns: {id: $id}, _set: $data) {
    ...InspectionReport
  }
}
    ${InspectionReportFragmentDoc}
${InspectionReportHeaderFragmentDoc}
${UserInfoFragmentDoc}`
export const useUpdateInspectionReportByIdMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    UpdateInspectionReportByIdMutation,
    TError,
    UpdateInspectionReportByIdMutationVariables,
    TContext
  >
) =>
  useMutation<
    UpdateInspectionReportByIdMutation,
    TError,
    UpdateInspectionReportByIdMutationVariables,
    TContext
  >(
    ['UpdateInspectionReportById'],
    useFetch<
      UpdateInspectionReportByIdMutation,
      UpdateInspectionReportByIdMutationVariables
    >(UpdateInspectionReportByIdDocument),
    options
  )
export const DeleteInspectionReportByIdDocument = `
    mutation DeleteInspectionReportById($id: uuid = "") {
  returning: delete_inspection_report_by_pk(id: $id) {
    id
  }
}
    `
export const useDeleteInspectionReportByIdMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    DeleteInspectionReportByIdMutation,
    TError,
    DeleteInspectionReportByIdMutationVariables,
    TContext
  >
) =>
  useMutation<
    DeleteInspectionReportByIdMutation,
    TError,
    DeleteInspectionReportByIdMutationVariables,
    TContext
  >(
    ['DeleteInspectionReportById'],
    useFetch<
      DeleteInspectionReportByIdMutation,
      DeleteInspectionReportByIdMutationVariables
    >(DeleteInspectionReportByIdDocument),
    options
  )
