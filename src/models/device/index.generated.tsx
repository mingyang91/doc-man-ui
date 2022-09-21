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
  DeviceDetailFragmentDoc,
  UserInfoFragmentDoc,
} from '../public.generated'


export type DeviceListQueryVariables = Types.Exact<{
  limit?: Types.InputMaybe<Types.Scalars['Int']>
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  order_by?: Types.InputMaybe<Array<Types.DeviceOrderBy> | Types.DeviceOrderBy>
  where?: Types.InputMaybe<Types.DeviceBoolExp>
}>

export type DeviceListQuery = {
  list: Array<{
    id: UUIDV4
    inspectionInstrument?: string | null
    createTime: ScalarTz
    updateTime: ScalarTz
    address: ScalarJson
    equipmentCode?: string | null
    equipmentManufacturer?: string | null
    equipmentName?: string | null
    equipmentSampleId?: string | null
    equipmentSite?: string | null
    equipmentModel?: string | null
    comment?: string | null
    creator?: {
      id: number
      username: string
      avatar?: string | null
      displayname?: string | null
      role: any
    } | null
    client?: { id: UUIDV4; name: string } | null
  }>
  total: { aggregate?: { count: number } | null }
}

export type DeviceByIdQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>
}>

export type DeviceByIdQuery = {
  detail?: {
    id: UUIDV4
    inspectionInstrument?: string | null
    createTime: ScalarTz
    updateTime: ScalarTz
    address: ScalarJson
    equipmentCode?: string | null
    equipmentManufacturer?: string | null
    equipmentName?: string | null
    equipmentSampleId?: string | null
    equipmentSite?: string | null
    equipmentModel?: string | null
    comment?: string | null
    creator?: {
      id: number
      username: string
      avatar?: string | null
      displayname?: string | null
      role: any
    } | null
    client?: { id: UUIDV4; name: string } | null
  } | null
}

export type CreateDeviceMutationVariables = Types.Exact<{
  data?: Types.InputMaybe<Types.DeviceInsertInput>
}>

export type CreateDeviceMutation = {
  data?: {
    id: UUIDV4
    inspectionInstrument?: string | null
    createTime: ScalarTz
    updateTime: ScalarTz
    address: ScalarJson
    equipmentCode?: string | null
    equipmentManufacturer?: string | null
    equipmentName?: string | null
    equipmentSampleId?: string | null
    equipmentSite?: string | null
    equipmentModel?: string | null
    comment?: string | null
    client?: { id: UUIDV4; name: string } | null
  } | null
}

export type UpdateDeviceByIdMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>
  data?: Types.InputMaybe<Types.DeviceSetInput>
}>

export type UpdateDeviceByIdMutation = {
  data?: {
    id: UUIDV4
    inspectionInstrument?: string | null
    createTime: ScalarTz
    updateTime: ScalarTz
    address: ScalarJson
    equipmentCode?: string | null
    equipmentManufacturer?: string | null
    equipmentName?: string | null
    equipmentSampleId?: string | null
    equipmentSite?: string | null
    equipmentModel?: string | null
    comment?: string | null
    client?: { id: UUIDV4; name: string } | null
  } | null
}

export type DeleteDeviceByIdMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>
}>

export type DeleteDeviceByIdMutation = {
  data?: {
    id: UUIDV4
    inspectionInstrument?: string | null
    createTime: ScalarTz
    updateTime: ScalarTz
    address: ScalarJson
    equipmentCode?: string | null
    equipmentManufacturer?: string | null
    equipmentName?: string | null
    equipmentSampleId?: string | null
    equipmentSite?: string | null
    equipmentModel?: string | null
    comment?: string | null
    client?: { id: UUIDV4; name: string } | null
  } | null
}

export type DeleteDeviceBulkMutationVariables = Types.Exact<{
  ids: Array<Types.Scalars['uuid']> | Types.Scalars['uuid']
}>

export type DeleteDeviceBulkMutation = {
  root?: { affected_rows: number; returning: Array<{ id: UUIDV4 }> } | null
}

export const DeviceListDocument = `
    query DeviceList($limit: Int = 10, $offset: Int = 0, $order_by: [device_order_by!] = {}, $where: device_bool_exp = {}) {
  list: device(limit: $limit, offset: $offset, order_by: $order_by, where: $where) {
    ...DeviceDetail
    creator {
      ...UserInfo
    }
  }
  total: device_aggregate {
    aggregate {
      count
    }
  }
}
    ${DeviceDetailFragmentDoc}
${UserInfoFragmentDoc}`
export const useDeviceListQuery = <TData = DeviceListQuery, TError = unknown>(
  variables?: DeviceListQueryVariables,
  options?: UseQueryOptions<DeviceListQuery, TError, TData>
) =>
  useQuery<DeviceListQuery, TError, TData>(
    variables === undefined ? ['DeviceList'] : ['DeviceList', variables],
    useFetch<DeviceListQuery, DeviceListQueryVariables>(
      DeviceListDocument
    ).bind(null, variables),
    options
  )
export const DeviceByIdDocument = `
    query DeviceById($id: uuid = "") {
  detail: device_by_pk(id: $id) {
    ...DeviceDetail
    creator {
      ...UserInfo
    }
  }
}
    ${DeviceDetailFragmentDoc}
${UserInfoFragmentDoc}`
export const useDeviceByIdQuery = <TData = DeviceByIdQuery, TError = unknown>(
  variables?: DeviceByIdQueryVariables,
  options?: UseQueryOptions<DeviceByIdQuery, TError, TData>
) =>
  useQuery<DeviceByIdQuery, TError, TData>(
    variables === undefined ? ['DeviceById'] : ['DeviceById', variables],
    useFetch<DeviceByIdQuery, DeviceByIdQueryVariables>(
      DeviceByIdDocument
    ).bind(null, variables),
    options
  )
export const CreateDeviceDocument = `
    mutation CreateDevice($data: device_insert_input = {}) {
  data: insert_device_one(object: $data, on_conflict: {constraint: device_id_key}) {
    ...DeviceDetail
  }
}
    ${DeviceDetailFragmentDoc}`
export const useCreateDeviceMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CreateDeviceMutation,
    TError,
    CreateDeviceMutationVariables,
    TContext
  >
) =>
  useMutation<
    CreateDeviceMutation,
    TError,
    CreateDeviceMutationVariables,
    TContext
  >(
    ['CreateDevice'],
    useFetch<CreateDeviceMutation, CreateDeviceMutationVariables>(
      CreateDeviceDocument
    ),
    options
  )
export const UpdateDeviceByIdDocument = `
    mutation UpdateDeviceById($id: uuid = "", $data: device_set_input = {}) {
  data: update_device_by_pk(pk_columns: {id: $id}, _set: $data) {
    ...DeviceDetail
  }
}
    ${DeviceDetailFragmentDoc}`
export const useUpdateDeviceByIdMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    UpdateDeviceByIdMutation,
    TError,
    UpdateDeviceByIdMutationVariables,
    TContext
  >
) =>
  useMutation<
    UpdateDeviceByIdMutation,
    TError,
    UpdateDeviceByIdMutationVariables,
    TContext
  >(
    ['UpdateDeviceById'],
    useFetch<UpdateDeviceByIdMutation, UpdateDeviceByIdMutationVariables>(
      UpdateDeviceByIdDocument
    ),
    options
  )
export const DeleteDeviceByIdDocument = `
    mutation DeleteDeviceById($id: uuid = "") {
  data: delete_device_by_pk(id: $id) {
    ...DeviceDetail
  }
}
    ${DeviceDetailFragmentDoc}`
export const useDeleteDeviceByIdMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    DeleteDeviceByIdMutation,
    TError,
    DeleteDeviceByIdMutationVariables,
    TContext
  >
) =>
  useMutation<
    DeleteDeviceByIdMutation,
    TError,
    DeleteDeviceByIdMutationVariables,
    TContext
  >(
    ['DeleteDeviceById'],
    useFetch<DeleteDeviceByIdMutation, DeleteDeviceByIdMutationVariables>(
      DeleteDeviceByIdDocument
    ),
    options
  )
export const DeleteDeviceBulkDocument = `
    mutation DeleteDeviceBulk($ids: [uuid!]!) {
  root: delete_device(where: {id: {_in: $ids}}) {
    affected_rows
    returning {
      id
    }
  }
}
    `
export const useDeleteDeviceBulkMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    DeleteDeviceBulkMutation,
    TError,
    DeleteDeviceBulkMutationVariables,
    TContext
  >
) =>
  useMutation<
    DeleteDeviceBulkMutation,
    TError,
    DeleteDeviceBulkMutationVariables,
    TContext
  >(
    ['DeleteDeviceBulk'],
    useFetch<DeleteDeviceBulkMutation, DeleteDeviceBulkMutationVariables>(
      DeleteDeviceBulkDocument
    ),
    options
  )
