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
  displayname?: string | null
  role: any
}

export type UserInfoFragmentVariables = Types.Exact<{ [key: string]: never }>

export type UserViewFragment = {
  id?: number | null
  username?: string | null
  avatar?: string | null
  displayname?: string | null
  role?: any | null
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

export type DeviceDetailFragment = {
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
}

export type DeviceDetailFragmentVariables = Types.Exact<{
  [key: string]: never
}>

export type CurrentUserQueryVariables = Types.Exact<{ [key: string]: never }>

export type CurrentUserQuery = {
  data: Array<{
    id?: number | null
    username?: string | null
    avatar?: string | null
    displayname?: string | null
    role?: any | null
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
  displayname
  role
}
    `
export const UserViewFragmentDoc = `
    fragment UserView on user_view {
  id
  username
  avatar
  displayname
  role
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
export const DeviceDetailFragmentDoc = `
    fragment DeviceDetail on device {
  id
  inspectionInstrument
  createTime
  updateTime
  address
  equipmentCode
  equipmentManufacturer
  equipmentName
  equipmentSampleId
  equipmentSite
  equipmentModel
  comment
  client {
    id
    name
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
