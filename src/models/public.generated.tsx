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

import * as Types from './types'
export type UserInfoFragment = {
  id: number
  username: string
  avatar?: string | null
  role: any
  email?: string | null
  displayName?: string | null
}

export type UserInfoFragmentVariables = Types.Exact<{ [key: string]: never }>

export type UserViewFragment = {
  id?: number | null
  username?: string | null
  avatar?: string | null
  role?: any | null
  email?: string | null
  displayName?: string | null
}

export type UserViewFragmentVariables = Types.Exact<{ [key: string]: never }>

export type ClientsDetailFragment = {
  id: UUIDV4
  name: string
  createdAt?: ScalarTz | null
  updatedAt?: ScalarTz | null
  comment?: string | null
  address: ScalarJson
}

export type ClientsDetailFragmentVariables = Types.Exact<{
  [key: string]: never
}>

export type EquipmentDetailFragment = {
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
}

export type EquipmentDetailFragmentVariables = Types.Exact<{
  [key: string]: never
}>

export type CurrentUserQueryVariables = Types.Exact<{ [key: string]: never }>

export type CurrentUserQuery = {
  data: Array<{
    id?: number | null
    username?: string | null
    avatar?: string | null
    role?: any | null
    email?: string | null
    displayName?: string | null
  }>
}

export type UpdateUserPasswordMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']
  password: Types.Scalars['String']
}>

export type UpdateUserPasswordMutation = {
  update_user_by_pk?: { id: number } | null
}

export const UserInfoFragmentDoc = `
    fragment UserInfo on user {
  id
  username
  avatar
  displayName: displayname
  role
  email
}
    `
export const UserViewFragmentDoc = `
    fragment UserView on user_view {
  id
  username
  avatar
  displayName: displayname
  role
  email
}
    `
export const ClientsDetailFragmentDoc = `
    fragment ClientsDetail on clients {
  id
  name
  createdAt
  updatedAt
  comment
  address
}
    `
export const EquipmentDetailFragmentDoc = `
    fragment EquipmentDetail on equipment {
  id
  inspectionInstrument
  createdAt
  updatedAt
  address
  equipmentTypeId
  equipmentCode
  equipmentManufacturer
  equipmentName
  equipmentSampleId
  equipmentSite
  equipmentModel
  comment
  clientId
  client {
    id
    name
    address
  }
  equipmentType {
    id
    name
    displayName
  }
}
    `
export const CurrentUserDocument = `
    query CurrentUser {
  data: user_view(order_by: {id: asc}, limit: 1) {
    ...UserView
  }
}
    ${UserViewFragmentDoc}`
export const useCurrentUserQuery = <TData = CurrentUserQuery, TError = unknown>(
  variables?: CurrentUserQueryVariables,
  options?: UseQueryOptions<CurrentUserQuery, TError, TData>
) =>
  useQuery<CurrentUserQuery, TError, TData>(
    variables === undefined ? ['CurrentUser'] : ['CurrentUser', variables],
    useFetch<CurrentUserQuery, CurrentUserQueryVariables>(
      CurrentUserDocument
    ).bind(null, variables),
    options
  )
export const UpdateUserPasswordDocument = `
    mutation updateUserPassword($id: Int!, $password: String!) {
  update_user_by_pk(pk_columns: {id: $id}, _set: {password: $password}) {
    id
  }
}
    `
export const useUpdateUserPasswordMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    UpdateUserPasswordMutation,
    TError,
    UpdateUserPasswordMutationVariables,
    TContext
  >
) =>
  useMutation<
    UpdateUserPasswordMutation,
    TError,
    UpdateUserPasswordMutationVariables,
    TContext
  >(
    ['updateUserPassword'],
    useFetch<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>(
      UpdateUserPasswordDocument
    ),
    options
  )
