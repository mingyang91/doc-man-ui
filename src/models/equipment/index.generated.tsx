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
import {
  EquipmentDetailFragmentDoc,
  UserInfoFragmentDoc,
} from '../public.generated'

export type EquipmentListQueryVariables = Types.Exact<{
  limit?: Types.InputMaybe<Types.Scalars['Int']>
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  order_by?: Types.InputMaybe<
    Array<Types.EquipmentOrderBy> | Types.EquipmentOrderBy
  >
  where?: Types.InputMaybe<Types.EquipmentBoolExp>
}>

export type EquipmentListQuery = {
  list: Array<{
    id: UUIDV4
    inspectionInstrument?: string | null
    createdAt?: ScalarTz | null
    updatedAt?: ScalarTz | null
    address: ScalarJson
    equipmentTypeId?: UUIDV4 | null
    equipmentCode?: string | null
    equipmentManufacturer?: string | null
    equipmentName?: string | null
    equipmentSampleId?: string | null
    equipmentSite?: string | null
    equipmentModel?: string | null
    comment?: string | null
    clientId?: UUIDV4 | null
    creator?: {
      id: number
      username: string
      avatar?: string | null
      role: any
      email?: string | null
      displayName?: string | null
    } | null
    client?: { id: UUIDV4; name: string; address: ScalarJson } | null
    equipmentType?: {
      id: UUIDV4
      name: string
      displayName?: string | null
    } | null
  }>
  total: { aggregate?: { count: number } | null }
}

export type EquipmentByIdQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>
}>

export type EquipmentByIdQuery = {
  detail?: {
    id: UUIDV4
    inspectionInstrument?: string | null
    createdAt?: ScalarTz | null
    updatedAt?: ScalarTz | null
    address: ScalarJson
    equipmentTypeId?: UUIDV4 | null
    equipmentCode?: string | null
    equipmentManufacturer?: string | null
    equipmentName?: string | null
    equipmentSampleId?: string | null
    equipmentSite?: string | null
    equipmentModel?: string | null
    comment?: string | null
    clientId?: UUIDV4 | null
    creator?: {
      id: number
      username: string
      avatar?: string | null
      role: any
      email?: string | null
      displayName?: string | null
    } | null
    client?: { id: UUIDV4; name: string; address: ScalarJson } | null
    equipmentType?: {
      id: UUIDV4
      name: string
      displayName?: string | null
    } | null
  } | null
}

export type FindEquipmentResultFragment = {
  id: UUIDV4
  equipmentName?: string | null
  equipmentCode?: string | null
  equipmentManufacturer?: string | null
  equipmentModel?: string | null
  equipmentSampleId?: string | null
  equipmentSite?: string | null
  equipmentTypeId?: UUIDV4 | null
  inspectionInstrument?: string | null
  address: ScalarJson
  client?: { name: string } | null
  equipmentType?: {
    id: UUIDV4
    name: string
    displayName?: string | null
  } | null
}

export type FindEquipmentResultFragmentVariables = Types.Exact<{
  [key: string]: never
}>

export type FindEquipmentQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.EquipmentBoolExp>
}>

export type FindEquipmentQuery = {
  data: Array<{
    id: UUIDV4
    equipmentName?: string | null
    equipmentCode?: string | null
    equipmentManufacturer?: string | null
    equipmentModel?: string | null
    equipmentSampleId?: string | null
    equipmentSite?: string | null
    equipmentTypeId?: UUIDV4 | null
    inspectionInstrument?: string | null
    address: ScalarJson
    client?: { name: string } | null
    equipmentType?: {
      id: UUIDV4
      name: string
      displayName?: string | null
    } | null
  }>
}

export type CreateEquipmentMutationVariables = Types.Exact<{
  data?: Types.InputMaybe<Types.EquipmentInsertInput>
}>

export type CreateEquipmentMutation = {
  data?: {
    id: UUIDV4
    inspectionInstrument?: string | null
    createdAt?: ScalarTz | null
    updatedAt?: ScalarTz | null
    address: ScalarJson
    equipmentTypeId?: UUIDV4 | null
    equipmentCode?: string | null
    equipmentManufacturer?: string | null
    equipmentName?: string | null
    equipmentSampleId?: string | null
    equipmentSite?: string | null
    equipmentModel?: string | null
    comment?: string | null
    clientId?: UUIDV4 | null
    client?: { id: UUIDV4; name: string; address: ScalarJson } | null
    equipmentType?: {
      id: UUIDV4
      name: string
      displayName?: string | null
    } | null
  } | null
}

export type UpdateEquipmentByIdMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>
  data?: Types.InputMaybe<Types.EquipmentSetInput>
}>

export type UpdateEquipmentByIdMutation = {
  data?: {
    id: UUIDV4
    inspectionInstrument?: string | null
    createdAt?: ScalarTz | null
    updatedAt?: ScalarTz | null
    address: ScalarJson
    equipmentTypeId?: UUIDV4 | null
    equipmentCode?: string | null
    equipmentManufacturer?: string | null
    equipmentName?: string | null
    equipmentSampleId?: string | null
    equipmentSite?: string | null
    equipmentModel?: string | null
    comment?: string | null
    clientId?: UUIDV4 | null
    client?: { id: UUIDV4; name: string; address: ScalarJson } | null
    equipmentType?: {
      id: UUIDV4
      name: string
      displayName?: string | null
    } | null
  } | null
}

export type DeleteEquipmentByIdMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>
}>

export type DeleteEquipmentByIdMutation = {
  data?: {
    id: UUIDV4
    inspectionInstrument?: string | null
    createdAt?: ScalarTz | null
    updatedAt?: ScalarTz | null
    address: ScalarJson
    equipmentTypeId?: UUIDV4 | null
    equipmentCode?: string | null
    equipmentManufacturer?: string | null
    equipmentName?: string | null
    equipmentSampleId?: string | null
    equipmentSite?: string | null
    equipmentModel?: string | null
    comment?: string | null
    clientId?: UUIDV4 | null
    client?: { id: UUIDV4; name: string; address: ScalarJson } | null
    equipmentType?: {
      id: UUIDV4
      name: string
      displayName?: string | null
    } | null
  } | null
}

export type DeleteEquipmentBulkMutationVariables = Types.Exact<{
  ids: Array<Types.Scalars['uuid']> | Types.Scalars['uuid']
}>

export type DeleteEquipmentBulkMutation = {
  root?: { affected_rows: number; returning: Array<{ id: UUIDV4 }> } | null
}

export const FindEquipmentResultFragmentDoc = `
    fragment FindEquipmentResult on equipment {
  id
  client {
    name
  }
  equipmentName
  equipmentCode
  equipmentManufacturer
  equipmentModel
  equipmentSampleId
  equipmentSite
  equipmentTypeId
  equipmentType {
    id
    name
    displayName
  }
  inspectionInstrument
  address
}
    `
export const EquipmentListDocument = `
    query EquipmentList($limit: Int = 10, $offset: Int = 0, $order_by: [equipment_order_by!] = {}, $where: equipment_bool_exp = {}) {
  list: equipment(
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...EquipmentDetail
    creator {
      ...UserInfo
    }
  }
  total: equipment_aggregate {
    aggregate {
      count
    }
  }
}
    ${EquipmentDetailFragmentDoc}
${UserInfoFragmentDoc}`
export const useEquipmentListQuery = <
  TData = EquipmentListQuery,
  TError = unknown
>(
  variables?: EquipmentListQueryVariables,
  options?: UseQueryOptions<EquipmentListQuery, TError, TData>
) =>
  useQuery<EquipmentListQuery, TError, TData>(
    variables === undefined ? ['EquipmentList'] : ['EquipmentList', variables],
    useFetch<EquipmentListQuery, EquipmentListQueryVariables>(
      EquipmentListDocument
    ).bind(null, variables),
    options
  )
export const EquipmentByIdDocument = `
    query EquipmentById($id: uuid = "") {
  detail: equipment_by_pk(id: $id) {
    ...EquipmentDetail
    creator {
      ...UserInfo
    }
  }
}
    ${EquipmentDetailFragmentDoc}
${UserInfoFragmentDoc}`
export const useEquipmentByIdQuery = <
  TData = EquipmentByIdQuery,
  TError = unknown
>(
  variables?: EquipmentByIdQueryVariables,
  options?: UseQueryOptions<EquipmentByIdQuery, TError, TData>
) =>
  useQuery<EquipmentByIdQuery, TError, TData>(
    variables === undefined ? ['EquipmentById'] : ['EquipmentById', variables],
    useFetch<EquipmentByIdQuery, EquipmentByIdQueryVariables>(
      EquipmentByIdDocument
    ).bind(null, variables),
    options
  )
export const FindEquipmentDocument = `
    query FindEquipment($where: equipment_bool_exp = {}) {
  data: equipment(where: $where) {
    ...FindEquipmentResult
  }
}
    ${FindEquipmentResultFragmentDoc}`
export const useFindEquipmentQuery = <
  TData = FindEquipmentQuery,
  TError = unknown
>(
  variables?: FindEquipmentQueryVariables,
  options?: UseQueryOptions<FindEquipmentQuery, TError, TData>
) =>
  useQuery<FindEquipmentQuery, TError, TData>(
    variables === undefined ? ['FindEquipment'] : ['FindEquipment', variables],
    useFetch<FindEquipmentQuery, FindEquipmentQueryVariables>(
      FindEquipmentDocument
    ).bind(null, variables),
    options
  )
export const CreateEquipmentDocument = `
    mutation CreateEquipment($data: equipment_insert_input = {}) {
  data: insert_equipment_one(
    object: $data
    on_conflict: {constraint: equipment_id_key}
  ) {
    ...EquipmentDetail
  }
}
    ${EquipmentDetailFragmentDoc}`
export const useCreateEquipmentMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    CreateEquipmentMutation,
    TError,
    CreateEquipmentMutationVariables,
    TContext
  >
) =>
  useMutation<
    CreateEquipmentMutation,
    TError,
    CreateEquipmentMutationVariables,
    TContext
  >(
    ['CreateEquipment'],
    useFetch<CreateEquipmentMutation, CreateEquipmentMutationVariables>(
      CreateEquipmentDocument
    ),
    options
  )
export const UpdateEquipmentByIdDocument = `
    mutation UpdateEquipmentById($id: uuid = "", $data: equipment_set_input = {}) {
  data: update_equipment_by_pk(pk_columns: {id: $id}, _set: $data) {
    ...EquipmentDetail
  }
}
    ${EquipmentDetailFragmentDoc}`
export const useUpdateEquipmentByIdMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    UpdateEquipmentByIdMutation,
    TError,
    UpdateEquipmentByIdMutationVariables,
    TContext
  >
) =>
  useMutation<
    UpdateEquipmentByIdMutation,
    TError,
    UpdateEquipmentByIdMutationVariables,
    TContext
  >(
    ['UpdateEquipmentById'],
    useFetch<UpdateEquipmentByIdMutation, UpdateEquipmentByIdMutationVariables>(
      UpdateEquipmentByIdDocument
    ),
    options
  )
export const DeleteEquipmentByIdDocument = `
    mutation DeleteEquipmentById($id: uuid = "") {
  data: delete_equipment_by_pk(id: $id) {
    ...EquipmentDetail
  }
}
    ${EquipmentDetailFragmentDoc}`
export const useDeleteEquipmentByIdMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    DeleteEquipmentByIdMutation,
    TError,
    DeleteEquipmentByIdMutationVariables,
    TContext
  >
) =>
  useMutation<
    DeleteEquipmentByIdMutation,
    TError,
    DeleteEquipmentByIdMutationVariables,
    TContext
  >(
    ['DeleteEquipmentById'],
    useFetch<DeleteEquipmentByIdMutation, DeleteEquipmentByIdMutationVariables>(
      DeleteEquipmentByIdDocument
    ),
    options
  )
export const DeleteEquipmentBulkDocument = `
    mutation DeleteEquipmentBulk($ids: [uuid!]!) {
  root: delete_equipment(where: {id: {_in: $ids}}) {
    affected_rows
    returning {
      id
    }
  }
}
    `
export const useDeleteEquipmentBulkMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    DeleteEquipmentBulkMutation,
    TError,
    DeleteEquipmentBulkMutationVariables,
    TContext
  >
) =>
  useMutation<
    DeleteEquipmentBulkMutation,
    TError,
    DeleteEquipmentBulkMutationVariables,
    TContext
  >(
    ['DeleteEquipmentBulk'],
    useFetch<DeleteEquipmentBulkMutation, DeleteEquipmentBulkMutationVariables>(
      DeleteEquipmentBulkDocument
    ),
    options
  )
