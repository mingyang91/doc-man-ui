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


export type UserListQueryVariables = Types.Exact<{
  limit?: Types.InputMaybe<Types.Scalars['Int']>
  offset?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type UserListQuery = {
  list: Array<{
    id: number
    username: string
    avatar?: string | null
    displayname?: string | null
    role: any
  }>
  total: { aggregate?: { count: number } | null }
}

export type AdminCreateAccountMutationVariables = Types.Exact<{
  object?: Types.InputMaybe<Types.UserInsertInput>
}>

export type AdminCreateAccountMutation = {
  insert_user_one?: {
    id: number
    username: string
    avatar?: string | null
    displayname?: string | null
    role: any
  } | null
}

export type AdminUpdateAccountByIdMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']
  object?: Types.InputMaybe<Types.UserSetInput>
}>

export type AdminUpdateAccountByIdMutation = {
  update_user_by_pk?: {
    id: number
    username: string
    avatar?: string | null
    displayname?: string | null
    role: any
  } | null
}

export type AdminDeleteAccountByIdMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']
}>

export type AdminDeleteAccountByIdMutation = {
  delete_user_by_pk?: {
    id: number
    username: string
    avatar?: string | null
    displayname?: string | null
    role: any
  } | null
}

export const UserListDocument = `
    query UserList($limit: Int = 10, $offset: Int = 0) {
  list: user(limit: $limit, offset: $offset) {
    ...UserInfo
  }
  total: user_aggregate {
    aggregate {
      count
    }
  }
}
    ${UserInfoFragmentDoc}`
export const useUserListQuery = <TData = UserListQuery, TError = unknown>(
  variables?: UserListQueryVariables,
  options?: UseQueryOptions<UserListQuery, TError, TData>
) =>
  useQuery<UserListQuery, TError, TData>(
    variables === undefined ? ['UserList'] : ['UserList', variables],
    useFetch<UserListQuery, UserListQueryVariables>(UserListDocument).bind(
      null,
      variables
    ),
    options
  )
export const AdminCreateAccountDocument = `
    mutation AdminCreateAccount($object: user_insert_input = {}) {
  insert_user_one(object: $object) {
    ...UserInfo
  }
}
    ${UserInfoFragmentDoc}`
export const useAdminCreateAccountMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    AdminCreateAccountMutation,
    TError,
    AdminCreateAccountMutationVariables,
    TContext
  >
) =>
  useMutation<
    AdminCreateAccountMutation,
    TError,
    AdminCreateAccountMutationVariables,
    TContext
  >(
    ['AdminCreateAccount'],
    useFetch<AdminCreateAccountMutation, AdminCreateAccountMutationVariables>(
      AdminCreateAccountDocument
    ),
    options
  )
export const AdminUpdateAccountByIdDocument = `
    mutation AdminUpdateAccountById($id: Int!, $object: user_set_input = {}) {
  update_user_by_pk(pk_columns: {id: $id}, _set: $object) {
    ...UserInfo
  }
}
    ${UserInfoFragmentDoc}`
export const useAdminUpdateAccountByIdMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    AdminUpdateAccountByIdMutation,
    TError,
    AdminUpdateAccountByIdMutationVariables,
    TContext
  >
) =>
  useMutation<
    AdminUpdateAccountByIdMutation,
    TError,
    AdminUpdateAccountByIdMutationVariables,
    TContext
  >(
    ['AdminUpdateAccountById'],
    useFetch<
      AdminUpdateAccountByIdMutation,
      AdminUpdateAccountByIdMutationVariables
    >(AdminUpdateAccountByIdDocument),
    options
  )
export const AdminDeleteAccountByIdDocument = `
    mutation AdminDeleteAccountById($id: Int!) {
  delete_user_by_pk(id: $id) {
    ...UserInfo
  }
}
    ${UserInfoFragmentDoc}`
export const useAdminDeleteAccountByIdMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    AdminDeleteAccountByIdMutation,
    TError,
    AdminDeleteAccountByIdMutationVariables,
    TContext
  >
) =>
  useMutation<
    AdminDeleteAccountByIdMutation,
    TError,
    AdminDeleteAccountByIdMutationVariables,
    TContext
  >(
    ['AdminDeleteAccountById'],
    useFetch<
      AdminDeleteAccountByIdMutation,
      AdminDeleteAccountByIdMutationVariables
    >(AdminDeleteAccountByIdDocument),
    options
  )
