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
import { ClientsDetailFragmentDoc } from '../public.generated'


export type ClientsDetailListQueryVariables = Types.Exact<{
  limit?: Types.InputMaybe<Types.Scalars['Int']>
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  order_by?: Types.InputMaybe<
    Array<Types.ClientsOrderBy> | Types.ClientsOrderBy
  >
  where?: Types.InputMaybe<Types.ClientsBoolExp>
}>

export type ClientsDetailListQuery = {
  list: Array<{
    id: UUIDV4
    name: string
    createdAt?: ScalarTz | null
    updatedAt?: ScalarTz | null
    comment?: string | null
    address: ScalarJson
  }>
  total: { aggregate?: { count: number } | null }
}

export type ClientsByIdQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>
}>

export type ClientsByIdQuery = {
  detail?: {
    id: UUIDV4
    name: string
    createdAt?: ScalarTz | null
    updatedAt?: ScalarTz | null
    comment?: string | null
    address: ScalarJson
  } | null
}

export type CreateClientsMutationVariables = Types.Exact<{
  data?: Types.InputMaybe<Types.ClientsInsertInput>
}>

export type CreateClientsMutation = {
  data?: {
    id: UUIDV4
    name: string
    createdAt?: ScalarTz | null
    updatedAt?: ScalarTz | null
    comment?: string | null
    address: ScalarJson
  } | null
}

export type UpdateClientsByIdMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>
  data?: Types.InputMaybe<Types.ClientsSetInput>
}>

export type UpdateClientsByIdMutation = {
  data?: {
    id: UUIDV4
    name: string
    createdAt?: ScalarTz | null
    updatedAt?: ScalarTz | null
    comment?: string | null
    address: ScalarJson
  } | null
}

export type DeleteClientsByIdMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>
}>

export type DeleteClientsByIdMutation = {
  data?: {
    id: UUIDV4
    name: string
    createdAt?: ScalarTz | null
    updatedAt?: ScalarTz | null
    comment?: string | null
    address: ScalarJson
  } | null
}

export type DeleteClientsBulkMutationVariables = Types.Exact<{
  ids: Array<Types.Scalars['uuid']> | Types.Scalars['uuid']
}>

export type DeleteClientsBulkMutation = {
  root?: { affected_rows: number; returning: Array<{ id: UUIDV4 }> } | null
}

export const ClientsDetailListDocument = `
    query ClientsDetailList($limit: Int = 10, $offset: Int = 0, $order_by: [clients_order_by!] = {}, $where: clients_bool_exp = {}) {
  list: clients(
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...ClientsDetail
  }
  total: clients_aggregate {
    aggregate {
      count
    }
  }
}
    ${ClientsDetailFragmentDoc}`
export const useClientsDetailListQuery = <
  TData = ClientsDetailListQuery,
  TError = unknown
>(
  variables?: ClientsDetailListQueryVariables,
  options?: UseQueryOptions<ClientsDetailListQuery, TError, TData>
) =>
  useQuery<ClientsDetailListQuery, TError, TData>(
    variables === undefined
      ? ['ClientsDetailList']
      : ['ClientsDetailList', variables],
    useFetch<ClientsDetailListQuery, ClientsDetailListQueryVariables>(
      ClientsDetailListDocument
    ).bind(null, variables),
    options
  )
export const ClientsByIdDocument = `
    query ClientsById($id: uuid = "") {
  detail: clients_by_pk(id: $id) {
    ...ClientsDetail
  }
}
    ${ClientsDetailFragmentDoc}`
export const useClientsByIdQuery = <TData = ClientsByIdQuery, TError = unknown>(
  variables?: ClientsByIdQueryVariables,
  options?: UseQueryOptions<ClientsByIdQuery, TError, TData>
) =>
  useQuery<ClientsByIdQuery, TError, TData>(
    variables === undefined ? ['ClientsById'] : ['ClientsById', variables],
    useFetch<ClientsByIdQuery, ClientsByIdQueryVariables>(
      ClientsByIdDocument
    ).bind(null, variables),
    options
  )
export const CreateClientsDocument = `
    mutation CreateClients($data: clients_insert_input = {}) {
  data: insert_clients_one(object: $data, on_conflict: {constraint: clients_pkey}) {
    ...ClientsDetail
  }
}
    ${ClientsDetailFragmentDoc}`
export const useCreateClientsMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CreateClientsMutation,
    TError,
    CreateClientsMutationVariables,
    TContext
  >
) =>
  useMutation<
    CreateClientsMutation,
    TError,
    CreateClientsMutationVariables,
    TContext
  >(
    ['CreateClients'],
    useFetch<CreateClientsMutation, CreateClientsMutationVariables>(
      CreateClientsDocument
    ),
    options
  )
export const UpdateClientsByIdDocument = `
    mutation UpdateClientsById($id: uuid = "", $data: clients_set_input = {}) {
  data: update_clients_by_pk(pk_columns: {id: $id}, _set: $data) {
    ...ClientsDetail
  }
}
    ${ClientsDetailFragmentDoc}`
export const useUpdateClientsByIdMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    UpdateClientsByIdMutation,
    TError,
    UpdateClientsByIdMutationVariables,
    TContext
  >
) =>
  useMutation<
    UpdateClientsByIdMutation,
    TError,
    UpdateClientsByIdMutationVariables,
    TContext
  >(
    ['UpdateClientsById'],
    useFetch<UpdateClientsByIdMutation, UpdateClientsByIdMutationVariables>(
      UpdateClientsByIdDocument
    ),
    options
  )
export const DeleteClientsByIdDocument = `
    mutation DeleteClientsById($id: uuid = "") {
  data: delete_clients_by_pk(id: $id) {
    ...ClientsDetail
  }
}
    ${ClientsDetailFragmentDoc}`
export const useDeleteClientsByIdMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    DeleteClientsByIdMutation,
    TError,
    DeleteClientsByIdMutationVariables,
    TContext
  >
) =>
  useMutation<
    DeleteClientsByIdMutation,
    TError,
    DeleteClientsByIdMutationVariables,
    TContext
  >(
    ['DeleteClientsById'],
    useFetch<DeleteClientsByIdMutation, DeleteClientsByIdMutationVariables>(
      DeleteClientsByIdDocument
    ),
    options
  )
export const DeleteClientsBulkDocument = `
    mutation DeleteClientsBulk($ids: [uuid!]!) {
  root: delete_clients(where: {id: {_in: $ids}}) {
    affected_rows
    returning {
      id
    }
  }
}
    `
export const useDeleteClientsBulkMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    DeleteClientsBulkMutation,
    TError,
    DeleteClientsBulkMutationVariables,
    TContext
  >
) =>
  useMutation<
    DeleteClientsBulkMutation,
    TError,
    DeleteClientsBulkMutationVariables,
    TContext
  >(
    ['DeleteClientsBulk'],
    useFetch<DeleteClientsBulkMutation, DeleteClientsBulkMutationVariables>(
      DeleteClientsBulkDocument
    ),
    options
  )
