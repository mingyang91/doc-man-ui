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
export type InspectionTypesFragment = {
  id: UUIDV4
  name: string
  displayName: string
  comment?: string | null
  condition: ScalarJson
  formula?: string | null
  requirement: ScalarJson
  consts: ScalarJson
  data?: ScalarJson | null
  index: number
}

export type InspectionTypesFragmentVariables = Types.Exact<{
  [key: string]: never
}>

export type InspectionTypesHeaderFragment = {
  name: string
  displayName: string
  id: UUIDV4
  formula?: string | null
  comment?: string | null
  index: number
}

export type InspectionTypesHeaderFragmentVariables = Types.Exact<{
  [key: string]: never
}>

export type InspectionTypesListQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type InspectionTypesListQuery = {
  data: Array<{
    id: UUIDV4
    name: string
    displayName: string
    comment?: string | null
    condition: ScalarJson
    formula?: string | null
    requirement: ScalarJson
    consts: ScalarJson
    data?: ScalarJson | null
    index: number
  }>
}

export type InspectionTypesDetailQueryVariables = Types.Exact<{
  id: Types.Scalars['uuid']
}>

export type InspectionTypesDetailQuery = {
  data?: {
    id: UUIDV4
    name: string
    displayName: string
    comment?: string | null
    condition: ScalarJson
    formula?: string | null
    requirement: ScalarJson
    consts: ScalarJson
    data?: ScalarJson | null
    index: number
  } | null
}

export type InspectionTypesByEquipmentQueryVariables = Types.Exact<{
  equipmentTypeId: Types.Scalars['uuid']
}>

export type InspectionTypesByEquipmentQuery = {
  list: Array<{
    id: UUIDV4
    name: string
    displayName: string
    comment?: string | null
    condition: ScalarJson
    formula?: string | null
    requirement: ScalarJson
    consts: ScalarJson
    data?: ScalarJson | null
    index: number
  }>
}

export type CreateInspectionTypesMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.InspectionTypesInsertInput>
}>

export type CreateInspectionTypesMutation = {
  data?: {
    id: UUIDV4
    name: string
    displayName: string
    comment?: string | null
    condition: ScalarJson
    formula?: string | null
    requirement: ScalarJson
    consts: ScalarJson
    data?: ScalarJson | null
    index: number
  } | null
}

export type UpdateInspectionTypesByIdMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>
  object?: Types.InputMaybe<Types.InspectionTypesSetInput>
}>

export type UpdateInspectionTypesByIdMutation = {
  data?: {
    id: UUIDV4
    name: string
    displayName: string
    comment?: string | null
    condition: ScalarJson
    formula?: string | null
    requirement: ScalarJson
    consts: ScalarJson
    data?: ScalarJson | null
    index: number
  } | null
}

export type DeleteInspectionTypesMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>
}>

export type DeleteInspectionTypesMutation = {
  returning?: { id: UUIDV4 } | null
}

export type EquipmentTypesFragment = {
  id: UUIDV4
  name: string
  displayName?: string | null
  comment?: string | null
}

export type EquipmentTypesFragmentVariables = Types.Exact<{
  [key: string]: never
}>

export type EquipmentTypesListQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type EquipmentTypesListQuery = {
  data: Array<{
    id: UUIDV4
    name: string
    displayName?: string | null
    comment?: string | null
    inspectionItems: Array<{ id: UUIDV4 }>
  }>
}

export type EquipmentTypesByIdQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>
}>

export type EquipmentTypesByIdQuery = {
  data?: {
    id: UUIDV4
    name: string
    displayName?: string | null
    comment?: string | null
    items: Array<{
      name: string
      displayName: string
      id: UUIDV4
      formula?: string | null
      comment?: string | null
      index: number
    }>
  } | null
}

export type CreateEquipmentTypesMutationVariables = Types.Exact<{
  name?: Types.InputMaybe<Types.Scalars['String']>
  displayName?: Types.InputMaybe<Types.Scalars['String']>
  comment?: Types.InputMaybe<Types.Scalars['String']>
}>

export type CreateEquipmentTypesMutation = {
  insert_equipment_types_one?: {
    id: UUIDV4
    name: string
    displayName?: string | null
    comment?: string | null
  } | null
}

export type UpdateEquipmentTypesByIdMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>
  name?: Types.InputMaybe<Types.Scalars['String']>
  displayName?: Types.InputMaybe<Types.Scalars['String']>
  comment?: Types.InputMaybe<Types.Scalars['String']>
}>

export type UpdateEquipmentTypesByIdMutation = {
  data?: {
    id: UUIDV4
    name: string
    displayName?: string | null
    comment?: string | null
  } | null
}

export type DeleteEquipmentTypesMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>
}>

export type DeleteEquipmentTypesMutation = { data?: { id: UUIDV4 } | null }

export const InspectionTypesFragmentDoc = `
    fragment InspectionTypes on inspection_types {
  id
  name
  displayName
  comment
  condition
  formula
  requirement
  consts
  data
  index
}
    `
export const InspectionTypesHeaderFragmentDoc = `
    fragment InspectionTypesHeader on inspection_types {
  name
  displayName
  id
  formula
  comment
  index
}
    `
export const EquipmentTypesFragmentDoc = `
    fragment EquipmentTypes on equipment_types {
  id
  name
  displayName
  comment
}
    `
export const InspectionTypesListDocument = `
    query InspectionTypesList {
  data: inspection_types(order_by: {index: asc}) {
    ...InspectionTypes
  }
}
    ${InspectionTypesFragmentDoc}`
export const useInspectionTypesListQuery = <
  TData = InspectionTypesListQuery,
  TError = unknown
>(
  variables?: InspectionTypesListQueryVariables,
  options?: UseQueryOptions<InspectionTypesListQuery, TError, TData>
) =>
  useQuery<InspectionTypesListQuery, TError, TData>(
    variables === undefined
      ? ['InspectionTypesList']
      : ['InspectionTypesList', variables],
    useFetch<InspectionTypesListQuery, InspectionTypesListQueryVariables>(
      InspectionTypesListDocument
    ).bind(null, variables),
    options
  )
export const InspectionTypesDetailDocument = `
    query InspectionTypesDetail($id: uuid!) {
  data: inspection_types_by_pk(id: $id) {
    ...InspectionTypes
  }
}
    ${InspectionTypesFragmentDoc}`
export const useInspectionTypesDetailQuery = <
  TData = InspectionTypesDetailQuery,
  TError = unknown
>(
  variables: InspectionTypesDetailQueryVariables,
  options?: UseQueryOptions<InspectionTypesDetailQuery, TError, TData>
) =>
  useQuery<InspectionTypesDetailQuery, TError, TData>(
    ['InspectionTypesDetail', variables],
    useFetch<InspectionTypesDetailQuery, InspectionTypesDetailQueryVariables>(
      InspectionTypesDetailDocument
    ).bind(null, variables),
    options
  )
export const InspectionTypesByEquipmentDocument = `
    query InspectionTypesByEquipment($equipmentTypeId: uuid!) {
  list: inspection_types(
    where: {equipmentTypeId: {_eq: $equipmentTypeId}}
    order_by: {index: asc}
  ) {
    ...InspectionTypes
  }
}
    ${InspectionTypesFragmentDoc}`
export const useInspectionTypesByEquipmentQuery = <
  TData = InspectionTypesByEquipmentQuery,
  TError = unknown
>(
  variables: InspectionTypesByEquipmentQueryVariables,
  options?: UseQueryOptions<InspectionTypesByEquipmentQuery, TError, TData>
) =>
  useQuery<InspectionTypesByEquipmentQuery, TError, TData>(
    ['InspectionTypesByEquipment', variables],
    useFetch<
      InspectionTypesByEquipmentQuery,
      InspectionTypesByEquipmentQueryVariables
    >(InspectionTypesByEquipmentDocument).bind(null, variables),
    options
  )
export const CreateInspectionTypesDocument = `
    mutation CreateInspectionTypes($input: inspection_types_insert_input = {}) {
  data: insert_inspection_types_one(object: $input) {
    ...InspectionTypes
  }
}
    ${InspectionTypesFragmentDoc}`
export const useCreateInspectionTypesMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    CreateInspectionTypesMutation,
    TError,
    CreateInspectionTypesMutationVariables,
    TContext
  >
) =>
  useMutation<
    CreateInspectionTypesMutation,
    TError,
    CreateInspectionTypesMutationVariables,
    TContext
  >(
    ['CreateInspectionTypes'],
    useFetch<
      CreateInspectionTypesMutation,
      CreateInspectionTypesMutationVariables
    >(CreateInspectionTypesDocument),
    options
  )
export const UpdateInspectionTypesByIdDocument = `
    mutation UpdateInspectionTypesById($id: uuid = "", $object: inspection_types_set_input = {}) {
  data: update_inspection_types_by_pk(pk_columns: {id: $id}, _set: $object) {
    ...InspectionTypes
  }
}
    ${InspectionTypesFragmentDoc}`
export const useUpdateInspectionTypesByIdMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    UpdateInspectionTypesByIdMutation,
    TError,
    UpdateInspectionTypesByIdMutationVariables,
    TContext
  >
) =>
  useMutation<
    UpdateInspectionTypesByIdMutation,
    TError,
    UpdateInspectionTypesByIdMutationVariables,
    TContext
  >(
    ['UpdateInspectionTypesById'],
    useFetch<
      UpdateInspectionTypesByIdMutation,
      UpdateInspectionTypesByIdMutationVariables
    >(UpdateInspectionTypesByIdDocument),
    options
  )
export const DeleteInspectionTypesDocument = `
    mutation DeleteInspectionTypes($id: uuid = "") {
  returning: delete_inspection_types_by_pk(id: $id) {
    id
  }
}
    `
export const useDeleteInspectionTypesMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    DeleteInspectionTypesMutation,
    TError,
    DeleteInspectionTypesMutationVariables,
    TContext
  >
) =>
  useMutation<
    DeleteInspectionTypesMutation,
    TError,
    DeleteInspectionTypesMutationVariables,
    TContext
  >(
    ['DeleteInspectionTypes'],
    useFetch<
      DeleteInspectionTypesMutation,
      DeleteInspectionTypesMutationVariables
    >(DeleteInspectionTypesDocument),
    options
  )
export const EquipmentTypesListDocument = `
    query EquipmentTypesList {
  data: equipment_types {
    ...EquipmentTypes
    inspectionItems {
      id
    }
  }
}
    ${EquipmentTypesFragmentDoc}`
export const useEquipmentTypesListQuery = <
  TData = EquipmentTypesListQuery,
  TError = unknown
>(
  variables?: EquipmentTypesListQueryVariables,
  options?: UseQueryOptions<EquipmentTypesListQuery, TError, TData>
) =>
  useQuery<EquipmentTypesListQuery, TError, TData>(
    variables === undefined
      ? ['EquipmentTypesList']
      : ['EquipmentTypesList', variables],
    useFetch<EquipmentTypesListQuery, EquipmentTypesListQueryVariables>(
      EquipmentTypesListDocument
    ).bind(null, variables),
    options
  )
export const EquipmentTypesByIdDocument = `
    query EquipmentTypesById($id: uuid = "") {
  data: equipment_types_by_pk(id: $id) {
    ...EquipmentTypes
    items: inspectionItems {
      ...InspectionTypesHeader
    }
  }
}
    ${EquipmentTypesFragmentDoc}
${InspectionTypesHeaderFragmentDoc}`
export const useEquipmentTypesByIdQuery = <
  TData = EquipmentTypesByIdQuery,
  TError = unknown
>(
  variables?: EquipmentTypesByIdQueryVariables,
  options?: UseQueryOptions<EquipmentTypesByIdQuery, TError, TData>
) =>
  useQuery<EquipmentTypesByIdQuery, TError, TData>(
    variables === undefined
      ? ['EquipmentTypesById']
      : ['EquipmentTypesById', variables],
    useFetch<EquipmentTypesByIdQuery, EquipmentTypesByIdQueryVariables>(
      EquipmentTypesByIdDocument
    ).bind(null, variables),
    options
  )
export const CreateEquipmentTypesDocument = `
    mutation CreateEquipmentTypes($name: String = "", $displayName: String = "", $comment: String = "") {
  insert_equipment_types_one(
    object: {name: $name, displayName: $displayName, comment: $comment}
  ) {
    ...EquipmentTypes
  }
}
    ${EquipmentTypesFragmentDoc}`
export const useCreateEquipmentTypesMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    CreateEquipmentTypesMutation,
    TError,
    CreateEquipmentTypesMutationVariables,
    TContext
  >
) =>
  useMutation<
    CreateEquipmentTypesMutation,
    TError,
    CreateEquipmentTypesMutationVariables,
    TContext
  >(
    ['CreateEquipmentTypes'],
    useFetch<
      CreateEquipmentTypesMutation,
      CreateEquipmentTypesMutationVariables
    >(CreateEquipmentTypesDocument),
    options
  )
export const UpdateEquipmentTypesByIdDocument = `
    mutation UpdateEquipmentTypesById($id: uuid = "", $name: String = "", $displayName: String = "", $comment: String = "") {
  data: update_equipment_types_by_pk(
    pk_columns: {id: $id}
    _set: {name: $name, displayName: $displayName, comment: $comment}
  ) {
    ...EquipmentTypes
  }
}
    ${EquipmentTypesFragmentDoc}`
export const useUpdateEquipmentTypesByIdMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    UpdateEquipmentTypesByIdMutation,
    TError,
    UpdateEquipmentTypesByIdMutationVariables,
    TContext
  >
) =>
  useMutation<
    UpdateEquipmentTypesByIdMutation,
    TError,
    UpdateEquipmentTypesByIdMutationVariables,
    TContext
  >(
    ['UpdateEquipmentTypesById'],
    useFetch<
      UpdateEquipmentTypesByIdMutation,
      UpdateEquipmentTypesByIdMutationVariables
    >(UpdateEquipmentTypesByIdDocument),
    options
  )
export const DeleteEquipmentTypesDocument = `
    mutation DeleteEquipmentTypes($id: uuid = "") {
  data: delete_inspection_types_by_pk(id: $id) {
    id
  }
}
    `
export const useDeleteEquipmentTypesMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    DeleteEquipmentTypesMutation,
    TError,
    DeleteEquipmentTypesMutationVariables,
    TContext
  >
) =>
  useMutation<
    DeleteEquipmentTypesMutation,
    TError,
    DeleteEquipmentTypesMutationVariables,
    TContext
  >(
    ['DeleteEquipmentTypes'],
    useFetch<
      DeleteEquipmentTypesMutation,
      DeleteEquipmentTypesMutationVariables
    >(DeleteEquipmentTypesDocument),
    options
  )
