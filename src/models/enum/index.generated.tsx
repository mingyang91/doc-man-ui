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
export type GlobalConstFragment = {
  id: UUIDV4
  name: string
  value: ScalarNumeric
  comment: string
}

export type GlobalConstFragmentVariables = Types.Exact<{ [key: string]: never }>

export type GlobalConstListQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type GlobalConstListQuery = {
  data: Array<{
    id: UUIDV4
    name: string
    value: ScalarNumeric
    comment: string
  }>
}

export type CreateGlobalConstMutationVariables = Types.Exact<{
  name?: Types.InputMaybe<Types.Scalars['String']>
  value?: Types.InputMaybe<Types.Scalars['numeric']>
  comment?: Types.InputMaybe<Types.Scalars['String']>
}>

export type CreateGlobalConstMutation = {
  insert_global_const_one?: {
    id: UUIDV4
    name: string
    value: ScalarNumeric
    comment: string
  } | null
}

export type UpdateGlobalConstByIdMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>
  name?: Types.InputMaybe<Types.Scalars['String']>
  value?: Types.InputMaybe<Types.Scalars['numeric']>
  comment?: Types.InputMaybe<Types.Scalars['String']>
}>

export type UpdateGlobalConstByIdMutation = {
  update_global_const_by_pk?: {
    id: UUIDV4
    name: string
    value: ScalarNumeric
    comment: string
  } | null
}

export type DeleteGlobalConstMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>
}>

export type DeleteGlobalConstMutation = {
  delete_global_const_by_pk?: {
    id: UUIDV4
    name: string
    value: ScalarNumeric
    comment: string
  } | null
}

export type EquipmentEnumFragment = {
  id: UUIDV4
  name: string
  displayName?: string | null
  comment?: string | null
}

export type EquipmentEnumFragmentVariables = Types.Exact<{
  [key: string]: never
}>

export type EquipmentEnumListQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type EquipmentEnumListQuery = {
  data: Array<{
    id: UUIDV4
    name: string
    displayName?: string | null
    comment?: string | null
  }>
}

export type CreateEquipmentEnumMutationVariables = Types.Exact<{
  name?: Types.InputMaybe<Types.Scalars['String']>
  displayName?: Types.InputMaybe<Types.Scalars['String']>
  comment?: Types.InputMaybe<Types.Scalars['String']>
}>

export type CreateEquipmentEnumMutation = {
  insert_equipment_enum_one?: {
    id: UUIDV4
    name: string
    displayName?: string | null
    comment?: string | null
  } | null
}

export type UpdateEquipmentEnumByIdMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>
  name?: Types.InputMaybe<Types.Scalars['String']>
  displayName?: Types.InputMaybe<Types.Scalars['String']>
  comment?: Types.InputMaybe<Types.Scalars['String']>
}>

export type UpdateEquipmentEnumByIdMutation = {
  update_equipment_enum_by_pk?: {
    id: UUIDV4
    name: string
    displayName?: string | null
    comment?: string | null
  } | null
}

export type DeleteEquipmentEnumMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>
}>

export type DeleteEquipmentEnumMutation = {
  delete_inspection_item_enum_by_pk?: { id: UUIDV4 } | null
}

export type InspectionItemEnumFragmentFragment = {
  acceptanceRequire?: string | null
  comment?: string | null
  equipment_id?: UUIDV4 | null
  formula?: string | null
  id: UUIDV4
  inputCount: number
  inputName?: string | null
  inputUnit?: string | null
  inspectionCondition: ScalarJson
  name?: string | null
  outputName: string
  outputUnit?: string | null
  stateRequire?: string | null
}

export type InspectionItemEnumFragmentFragmentVariables = Types.Exact<{
  [key: string]: never
}>

export type InspectionItemEnumListQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type InspectionItemEnumListQuery = {
  data: Array<{
    acceptanceRequire?: string | null
    comment?: string | null
    equipment_id?: UUIDV4 | null
    formula?: string | null
    id: UUIDV4
    inputCount: number
    inputName?: string | null
    inputUnit?: string | null
    inspectionCondition: ScalarJson
    name?: string | null
    outputName: string
    outputUnit?: string | null
    stateRequire?: string | null
  }>
}

export type CreateInspectionItemEnumMutationVariables = Types.Exact<{
  object?: Types.InputMaybe<Types.InspectionItemEnumInsertInput>
}>

export type CreateInspectionItemEnumMutation = {
  insert_inspection_item_enum_one?: {
    acceptanceRequire?: string | null
    comment?: string | null
    equipment_id?: UUIDV4 | null
    formula?: string | null
    id: UUIDV4
    inputCount: number
    inputName?: string | null
    inputUnit?: string | null
    inspectionCondition: ScalarJson
    name?: string | null
    outputName: string
    outputUnit?: string | null
    stateRequire?: string | null
  } | null
}

export type UpdateInspectionItemEnumByIdMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>
  object?: Types.InputMaybe<Types.InspectionItemEnumSetInput>
}>

export type UpdateInspectionItemEnumByIdMutation = {
  update_inspection_item_enum_by_pk?: {
    acceptanceRequire?: string | null
    comment?: string | null
    equipment_id?: UUIDV4 | null
    formula?: string | null
    id: UUIDV4
    inputCount: number
    inputName?: string | null
    inputUnit?: string | null
    inspectionCondition: ScalarJson
    name?: string | null
    outputName: string
    outputUnit?: string | null
    stateRequire?: string | null
  } | null
}

export type DeleteInspectionItemEnumMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>
}>

export type DeleteInspectionItemEnumMutation = {
  delete_inspection_report_item_by_pk?: { id: UUIDV4 } | null
}

export const GlobalConstFragmentDoc = `
    fragment GlobalConst on global_const {
  id
  name
  value
  comment
}
    `
export const EquipmentEnumFragmentDoc = `
    fragment EquipmentEnum on equipment_enum {
  id
  name
  displayName
  comment
}
    `
export const InspectionItemEnumFragmentFragmentDoc = `
    fragment InspectionItemEnumFragment on inspection_item_enum {
  acceptanceRequire
  comment
  equipment_id
  formula
  id
  inputCount
  inputName
  inputUnit
  inspectionCondition
  name
  outputName
  outputUnit
  stateRequire
}
    `
export const GlobalConstListDocument = `
    query GlobalConstList {
  data: global_const {
    ...GlobalConst
  }
}
    ${GlobalConstFragmentDoc}`
export const useGlobalConstListQuery = <
  TData = GlobalConstListQuery,
  TError = unknown
>(
  variables?: GlobalConstListQueryVariables,
  options?: UseQueryOptions<GlobalConstListQuery, TError, TData>
) =>
  useQuery<GlobalConstListQuery, TError, TData>(
    variables === undefined
      ? ['GlobalConstList']
      : ['GlobalConstList', variables],
    useFetch<GlobalConstListQuery, GlobalConstListQueryVariables>(
      GlobalConstListDocument
    ).bind(null, variables),
    options
  )
export const CreateGlobalConstDocument = `
    mutation CreateGlobalConst($name: String = "", $value: numeric = "", $comment: String = "") {
  insert_global_const_one(object: {name: $name, value: $value, comment: $comment}) {
    ...GlobalConst
  }
}
    ${GlobalConstFragmentDoc}`
export const useCreateGlobalConstMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    CreateGlobalConstMutation,
    TError,
    CreateGlobalConstMutationVariables,
    TContext
  >
) =>
  useMutation<
    CreateGlobalConstMutation,
    TError,
    CreateGlobalConstMutationVariables,
    TContext
  >(
    ['CreateGlobalConst'],
    useFetch<CreateGlobalConstMutation, CreateGlobalConstMutationVariables>(
      CreateGlobalConstDocument
    ),
    options
  )
export const UpdateGlobalConstByIdDocument = `
    mutation UpdateGlobalConstById($id: uuid = "", $name: String = "", $value: numeric = "", $comment: String = "") {
  update_global_const_by_pk(
    pk_columns: {id: $id}
    _set: {name: $name, value: $value, comment: $comment}
  ) {
    ...GlobalConst
  }
}
    ${GlobalConstFragmentDoc}`
export const useUpdateGlobalConstByIdMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    UpdateGlobalConstByIdMutation,
    TError,
    UpdateGlobalConstByIdMutationVariables,
    TContext
  >
) =>
  useMutation<
    UpdateGlobalConstByIdMutation,
    TError,
    UpdateGlobalConstByIdMutationVariables,
    TContext
  >(
    ['UpdateGlobalConstById'],
    useFetch<
      UpdateGlobalConstByIdMutation,
      UpdateGlobalConstByIdMutationVariables
    >(UpdateGlobalConstByIdDocument),
    options
  )
export const DeleteGlobalConstDocument = `
    mutation DeleteGlobalConst($id: uuid = "") {
  delete_global_const_by_pk(id: $id) {
    ...GlobalConst
  }
}
    ${GlobalConstFragmentDoc}`
export const useDeleteGlobalConstMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    DeleteGlobalConstMutation,
    TError,
    DeleteGlobalConstMutationVariables,
    TContext
  >
) =>
  useMutation<
    DeleteGlobalConstMutation,
    TError,
    DeleteGlobalConstMutationVariables,
    TContext
  >(
    ['DeleteGlobalConst'],
    useFetch<DeleteGlobalConstMutation, DeleteGlobalConstMutationVariables>(
      DeleteGlobalConstDocument
    ),
    options
  )
export const EquipmentEnumListDocument = `
    query EquipmentEnumList {
  data: equipment_enum {
    ...EquipmentEnum
  }
}
    ${EquipmentEnumFragmentDoc}`
export const useEquipmentEnumListQuery = <
  TData = EquipmentEnumListQuery,
  TError = unknown
>(
  variables?: EquipmentEnumListQueryVariables,
  options?: UseQueryOptions<EquipmentEnumListQuery, TError, TData>
) =>
  useQuery<EquipmentEnumListQuery, TError, TData>(
    variables === undefined
      ? ['EquipmentEnumList']
      : ['EquipmentEnumList', variables],
    useFetch<EquipmentEnumListQuery, EquipmentEnumListQueryVariables>(
      EquipmentEnumListDocument
    ).bind(null, variables),
    options
  )
export const CreateEquipmentEnumDocument = `
    mutation CreateEquipmentEnum($name: String = "", $displayName: String = "", $comment: String = "") {
  insert_equipment_enum_one(
    object: {name: $name, displayName: $displayName, comment: $comment}
  ) {
    ...EquipmentEnum
  }
}
    ${EquipmentEnumFragmentDoc}`
export const useCreateEquipmentEnumMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    CreateEquipmentEnumMutation,
    TError,
    CreateEquipmentEnumMutationVariables,
    TContext
  >
) =>
  useMutation<
    CreateEquipmentEnumMutation,
    TError,
    CreateEquipmentEnumMutationVariables,
    TContext
  >(
    ['CreateEquipmentEnum'],
    useFetch<CreateEquipmentEnumMutation, CreateEquipmentEnumMutationVariables>(
      CreateEquipmentEnumDocument
    ),
    options
  )
export const UpdateEquipmentEnumByIdDocument = `
    mutation UpdateEquipmentEnumById($id: uuid = "", $name: String = "", $displayName: String = "", $comment: String = "") {
  update_equipment_enum_by_pk(
    pk_columns: {id: $id}
    _set: {name: $name, displayName: $displayName, comment: $comment}
  ) {
    ...EquipmentEnum
  }
}
    ${EquipmentEnumFragmentDoc}`
export const useUpdateEquipmentEnumByIdMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    UpdateEquipmentEnumByIdMutation,
    TError,
    UpdateEquipmentEnumByIdMutationVariables,
    TContext
  >
) =>
  useMutation<
    UpdateEquipmentEnumByIdMutation,
    TError,
    UpdateEquipmentEnumByIdMutationVariables,
    TContext
  >(
    ['UpdateEquipmentEnumById'],
    useFetch<
      UpdateEquipmentEnumByIdMutation,
      UpdateEquipmentEnumByIdMutationVariables
    >(UpdateEquipmentEnumByIdDocument),
    options
  )
export const DeleteEquipmentEnumDocument = `
    mutation DeleteEquipmentEnum($id: uuid = "") {
  delete_inspection_item_enum_by_pk(id: $id) {
    id
  }
}
    `
export const useDeleteEquipmentEnumMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    DeleteEquipmentEnumMutation,
    TError,
    DeleteEquipmentEnumMutationVariables,
    TContext
  >
) =>
  useMutation<
    DeleteEquipmentEnumMutation,
    TError,
    DeleteEquipmentEnumMutationVariables,
    TContext
  >(
    ['DeleteEquipmentEnum'],
    useFetch<DeleteEquipmentEnumMutation, DeleteEquipmentEnumMutationVariables>(
      DeleteEquipmentEnumDocument
    ),
    options
  )
export const InspectionItemEnumListDocument = `
    query InspectionItemEnumList {
  data: inspection_item_enum(distinct_on: name) {
    ...InspectionItemEnumFragment
  }
}
    ${InspectionItemEnumFragmentFragmentDoc}`
export const useInspectionItemEnumListQuery = <
  TData = InspectionItemEnumListQuery,
  TError = unknown
>(
  variables?: InspectionItemEnumListQueryVariables,
  options?: UseQueryOptions<InspectionItemEnumListQuery, TError, TData>
) =>
  useQuery<InspectionItemEnumListQuery, TError, TData>(
    variables === undefined
      ? ['InspectionItemEnumList']
      : ['InspectionItemEnumList', variables],
    useFetch<InspectionItemEnumListQuery, InspectionItemEnumListQueryVariables>(
      InspectionItemEnumListDocument
    ).bind(null, variables),
    options
  )
export const CreateInspectionItemEnumDocument = `
    mutation CreateInspectionItemEnum($object: inspection_item_enum_insert_input = {}) {
  insert_inspection_item_enum_one(object: $object) {
    ...InspectionItemEnumFragment
  }
}
    ${InspectionItemEnumFragmentFragmentDoc}`
export const useCreateInspectionItemEnumMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    CreateInspectionItemEnumMutation,
    TError,
    CreateInspectionItemEnumMutationVariables,
    TContext
  >
) =>
  useMutation<
    CreateInspectionItemEnumMutation,
    TError,
    CreateInspectionItemEnumMutationVariables,
    TContext
  >(
    ['CreateInspectionItemEnum'],
    useFetch<
      CreateInspectionItemEnumMutation,
      CreateInspectionItemEnumMutationVariables
    >(CreateInspectionItemEnumDocument),
    options
  )
export const UpdateInspectionItemEnumByIdDocument = `
    mutation UpdateInspectionItemEnumById($id: uuid = "", $object: inspection_item_enum_set_input = {}) {
  update_inspection_item_enum_by_pk(pk_columns: {id: $id}, _set: $object) {
    ...InspectionItemEnumFragment
  }
}
    ${InspectionItemEnumFragmentFragmentDoc}`
export const useUpdateInspectionItemEnumByIdMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    UpdateInspectionItemEnumByIdMutation,
    TError,
    UpdateInspectionItemEnumByIdMutationVariables,
    TContext
  >
) =>
  useMutation<
    UpdateInspectionItemEnumByIdMutation,
    TError,
    UpdateInspectionItemEnumByIdMutationVariables,
    TContext
  >(
    ['UpdateInspectionItemEnumById'],
    useFetch<
      UpdateInspectionItemEnumByIdMutation,
      UpdateInspectionItemEnumByIdMutationVariables
    >(UpdateInspectionItemEnumByIdDocument),
    options
  )
export const DeleteInspectionItemEnumDocument = `
    mutation DeleteInspectionItemEnum($id: uuid = "") {
  delete_inspection_report_item_by_pk(id: $id) {
    id
  }
}
    `
export const useDeleteInspectionItemEnumMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    DeleteInspectionItemEnumMutation,
    TError,
    DeleteInspectionItemEnumMutationVariables,
    TContext
  >
) =>
  useMutation<
    DeleteInspectionItemEnumMutation,
    TError,
    DeleteInspectionItemEnumMutationVariables,
    TContext
  >(
    ['DeleteInspectionItemEnum'],
    useFetch<
      DeleteInspectionItemEnumMutation,
      DeleteInspectionItemEnumMutationVariables
    >(DeleteInspectionItemEnumDocument),
    options
  )
