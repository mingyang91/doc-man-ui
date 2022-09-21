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


export type InspectionItemFragment = {
  id: UUIDV4
  name?: string | null
  displayName: string
  requirementState?: string | null
  requirementAcceptance?: string | null
  condition?: ScalarJson | null
  conclusion?: string | null
  result?: ScalarJson | null
  inputValues?: ScalarJson | null
}

export type InspectionItemFragmentVariables = Types.Exact<{
  [key: string]: never
}>

export type InspectionReportHeaderFragment = {
  id: UUIDV4
  equipmentCode?: string | null
  inspectionAddress: ScalarJson
  equipmentRequester?: string | null
  equipmentName?: string | null
  inspectionBasis?: string | null
  inspectionInstrument?: string | null
  inspectionItem: ScalarJson
  equipmentManufacturer?: string | null
  equipmentModel?: string | null
  equipmentSampleId?: string | null
  equipmentSite?: string | null
  createAt?: ScalarTz | null
  updatedAt?: ScalarTz | null
  serialNumber?: ScalarJson | null
  creator?: {
    id: number
    username: string
    avatar?: string | null
    displayname?: string | null
    role: any
  } | null
}

export type InspectionReportHeaderFragmentVariables = Types.Exact<{
  [key: string]: never
}>

export type InspectionReportFragment = {
  id: UUIDV4
  equipmentCode?: string | null
  inspectionAddress: ScalarJson
  equipmentRequester?: string | null
  equipmentName?: string | null
  inspectionBasis?: string | null
  inspectionInstrument?: string | null
  inspectionItem: ScalarJson
  equipmentManufacturer?: string | null
  equipmentModel?: string | null
  equipmentSampleId?: string | null
  equipmentSite?: string | null
  createAt?: ScalarTz | null
  updatedAt?: ScalarTz | null
  serialNumber?: ScalarJson | null
  items: Array<{
    id: UUIDV4
    name?: string | null
    displayName: string
    requirementState?: string | null
    requirementAcceptance?: string | null
    condition?: ScalarJson | null
    conclusion?: string | null
    result?: ScalarJson | null
    inputValues?: ScalarJson | null
  }>
  creator?: {
    id: number
    username: string
    avatar?: string | null
    displayname?: string | null
    role: any
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
    id: UUIDV4
    equipmentCode?: string | null
    inspectionAddress: ScalarJson
    equipmentRequester?: string | null
    equipmentName?: string | null
    inspectionBasis?: string | null
    inspectionInstrument?: string | null
    inspectionItem: ScalarJson
    equipmentManufacturer?: string | null
    equipmentModel?: string | null
    equipmentSampleId?: string | null
    equipmentSite?: string | null
    createAt?: ScalarTz | null
    updatedAt?: ScalarTz | null
    serialNumber?: ScalarJson | null
    items: Array<{
      id: UUIDV4
      name?: string | null
      displayName: string
      requirementState?: string | null
      requirementAcceptance?: string | null
      condition?: ScalarJson | null
      conclusion?: string | null
      result?: ScalarJson | null
      inputValues?: ScalarJson | null
    }>
    creator?: {
      id: number
      username: string
      avatar?: string | null
      displayname?: string | null
      role: any
    } | null
  }>
  total: { aggregate?: { count: number } | null }
}

export type InspectionReportByIdQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>
}>

export type InspectionReportByIdQuery = {
  detail?: {
    id: UUIDV4
    equipmentCode?: string | null
    inspectionAddress: ScalarJson
    equipmentRequester?: string | null
    equipmentName?: string | null
    inspectionBasis?: string | null
    inspectionInstrument?: string | null
    inspectionItem: ScalarJson
    equipmentManufacturer?: string | null
    equipmentModel?: string | null
    equipmentSampleId?: string | null
    equipmentSite?: string | null
    createAt?: ScalarTz | null
    updatedAt?: ScalarTz | null
    serialNumber?: ScalarJson | null
    items: Array<{
      id: UUIDV4
      name?: string | null
      displayName: string
      requirementState?: string | null
      requirementAcceptance?: string | null
      condition?: ScalarJson | null
      conclusion?: string | null
      result?: ScalarJson | null
      inputValues?: ScalarJson | null
    }>
    creator?: {
      id: number
      username: string
      avatar?: string | null
      displayname?: string | null
      role: any
    } | null
  } | null
}

export type CreateInspectionReportMutationVariables = Types.Exact<{
  data?: Types.InputMaybe<Types.InspectionReportInsertInput>
}>

export type CreateInspectionReportMutation = {
  insert_inspection_report_one?: {
    id: UUIDV4
    equipmentCode?: string | null
    inspectionAddress: ScalarJson
    equipmentRequester?: string | null
    equipmentName?: string | null
    inspectionBasis?: string | null
    inspectionInstrument?: string | null
    inspectionItem: ScalarJson
    equipmentManufacturer?: string | null
    equipmentModel?: string | null
    equipmentSampleId?: string | null
    equipmentSite?: string | null
    createAt?: ScalarTz | null
    updatedAt?: ScalarTz | null
    serialNumber?: ScalarJson | null
    items: Array<{
      id: UUIDV4
      name?: string | null
      displayName: string
      requirementState?: string | null
      requirementAcceptance?: string | null
      condition?: ScalarJson | null
      conclusion?: string | null
      result?: ScalarJson | null
      inputValues?: ScalarJson | null
    }>
    creator?: {
      id: number
      username: string
      avatar?: string | null
      displayname?: string | null
      role: any
    } | null
  } | null
}

export type UpdateInspectionReportByIdMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>
  data?: Types.InputMaybe<Types.InspectionReportSetInput>
  items?: Types.InputMaybe<
    | Array<Types.InspectionReportItemInsertInput>
    | Types.InspectionReportItemInsertInput
  >
}>

export type UpdateInspectionReportByIdMutation = {
  update_inspection_report_by_pk?: {
    id: UUIDV4
    equipmentCode?: string | null
    inspectionAddress: ScalarJson
    equipmentRequester?: string | null
    equipmentName?: string | null
    inspectionBasis?: string | null
    inspectionInstrument?: string | null
    inspectionItem: ScalarJson
    equipmentManufacturer?: string | null
    equipmentModel?: string | null
    equipmentSampleId?: string | null
    equipmentSite?: string | null
    createAt?: ScalarTz | null
    updatedAt?: ScalarTz | null
    serialNumber?: ScalarJson | null
    items: Array<{
      id: UUIDV4
      name?: string | null
      displayName: string
      requirementState?: string | null
      requirementAcceptance?: string | null
      condition?: ScalarJson | null
      conclusion?: string | null
      result?: ScalarJson | null
      inputValues?: ScalarJson | null
    }>
    creator?: {
      id: number
      username: string
      avatar?: string | null
      displayname?: string | null
      role: any
    } | null
  } | null
  insert_inspection_report_item?: {
    affected_rows: number
    returning: Array<{
      id: UUIDV4
      name?: string | null
      displayName: string
      requirementState?: string | null
      requirementAcceptance?: string | null
      condition?: ScalarJson | null
      conclusion?: string | null
      result?: ScalarJson | null
      inputValues?: ScalarJson | null
    }>
  } | null
}

export type DeleteInspectionReportByIdMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>
}>

export type DeleteInspectionReportByIdMutation = {
  delete_inspection_report_by_pk?: {
    id: UUIDV4
    equipmentCode?: string | null
    inspectionAddress: ScalarJson
    equipmentRequester?: string | null
    equipmentName?: string | null
    inspectionBasis?: string | null
    inspectionInstrument?: string | null
    inspectionItem: ScalarJson
    equipmentManufacturer?: string | null
    equipmentModel?: string | null
    equipmentSampleId?: string | null
    equipmentSite?: string | null
    createAt?: ScalarTz | null
    updatedAt?: ScalarTz | null
    serialNumber?: ScalarJson | null
    items: Array<{
      id: UUIDV4
      name?: string | null
      displayName: string
      requirementState?: string | null
      requirementAcceptance?: string | null
      condition?: ScalarJson | null
      conclusion?: string | null
      result?: ScalarJson | null
      inputValues?: ScalarJson | null
    }>
    creator?: {
      id: number
      username: string
      avatar?: string | null
      displayname?: string | null
      role: any
    } | null
  } | null
}

export const InspectionReportHeaderFragmentDoc = `
    fragment InspectionReportHeader on inspection_report {
  id
  equipmentCode
  inspectionAddress
  equipmentRequester
  equipmentName
  inspectionBasis
  inspectionInstrument
  inspectionItem
  equipmentManufacturer
  equipmentModel
  equipmentSampleId
  equipmentSite
  createAt
  updatedAt
  serialNumber
  creator {
    ...UserInfo
  }
}
    `
export const InspectionItemFragmentDoc = `
    fragment InspectionItem on inspection_report_item {
  id
  name
  displayName
  requirementState
  requirementAcceptance
  condition
  conclusion
  result
  inputValues
}
    `
export const InspectionReportFragmentDoc = `
    fragment InspectionReport on inspection_report {
  ...InspectionReportHeader
  items {
    ...InspectionItem
  }
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
${UserInfoFragmentDoc}
${InspectionItemFragmentDoc}`
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
${UserInfoFragmentDoc}
${InspectionItemFragmentDoc}`
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
  insert_inspection_report_one(
    object: $data
    on_conflict: {constraint: equipment_inspection_reports_id_key}
  ) {
    ...InspectionReport
  }
}
    ${InspectionReportFragmentDoc}
${InspectionReportHeaderFragmentDoc}
${UserInfoFragmentDoc}
${InspectionItemFragmentDoc}`
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
    mutation UpdateInspectionReportById($id: uuid = "", $data: inspection_report_set_input = {}, $items: [inspection_report_item_insert_input!] = {}) {
  update_inspection_report_by_pk(pk_columns: {id: $id}, _set: $data) {
    ...InspectionReport
  }
  insert_inspection_report_item(
    objects: $items
    on_conflict: {constraint: inspection_items_id_key, update_columns: [condition, conclusion, requirementAcceptance, requirementState, result, inputValues]}
  ) {
    affected_rows
    returning {
      ...InspectionItem
    }
  }
}
    ${InspectionReportFragmentDoc}
${InspectionReportHeaderFragmentDoc}
${UserInfoFragmentDoc}
${InspectionItemFragmentDoc}`
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
  delete_inspection_report_by_pk(id: $id) {
    ...InspectionReport
  }
}
    ${InspectionReportFragmentDoc}
${InspectionReportHeaderFragmentDoc}
${UserInfoFragmentDoc}
${InspectionItemFragmentDoc}`
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
