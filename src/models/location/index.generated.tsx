/* eslint-disable @typescript-eslint/no-explicit-any */

import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { useFetch } from 'ctx/fetcher'

import type {
  ScalarJson,
  ScalarTz,
  ScalarNumeric,
  UUIDV4,
  InspectionTypeEnum,
} from 'm/presets'

import * as Types from '../types'
export type ProvinceListQueryVariables = Types.Exact<{ [key: string]: never }>

export type ProvinceListQuery = {
  list: Array<{ code: number; label: string; value: number }>
}

export type CityListQueryVariables = Types.Exact<{
  provinceCode: Types.Scalars['Int']
}>

export type CityListQuery = {
  list: Array<{ code: number; label: string; value: number }>
}

export type CountyListQueryVariables = Types.Exact<{
  cityCode: Types.Scalars['Int']
}>

export type CountyListQuery = {
  list: Array<{ code: number; label: string; value: number }>
}

export type TownListQueryVariables = Types.Exact<{
  countyCode: Types.Scalars['Int']
}>

export type TownListQuery = {
  list: Array<{ code: number; label: string; value: number }>
}

export type ProvinceListSearchQueryVariables = Types.Exact<{
  keyword: Types.Scalars['String']
}>

export type ProvinceListSearchQuery = {
  provinces: Array<{ code: number; label: string; value: number }>
}

export type CityListSearchQueryVariables = Types.Exact<{
  provinceCode: Types.Scalars['Int']
  keyword: Types.Scalars['String']
}>

export type CityListSearchQuery = {
  cities: Array<{ code: number; label: string; value: number }>
}

export type CountyListSearchQueryVariables = Types.Exact<{
  cityCode: Types.Scalars['Int']
  keyword: Types.Scalars['String']
}>

export type CountyListSearchQuery = {
  counties: Array<{ code: number; label: string; value: number }>
}

export type TownListSearchQueryVariables = Types.Exact<{
  countyCode: Types.Scalars['Int']
  keyword: Types.Scalars['String']
}>

export type TownListSearchQuery = {
  towns: Array<{
    code: number
    label: string
    value: number
    province?: { code: number; label: string; value: number } | null
    city?: { code: number; label: string; value: number } | null
    county?: { code: number; label: string; value: number } | null
  }>
}

export const ProvinceListDocument = `
    query ProvinceList {
  list: meta_area_cn_province(order_by: {code: asc_nulls_first}) {
    code
    label: name
    value: code
  }
}
    `
export const useProvinceListQuery = <
  TData = ProvinceListQuery,
  TError = unknown
>(
  variables?: ProvinceListQueryVariables,
  options?: UseQueryOptions<ProvinceListQuery, TError, TData>
) =>
  useQuery<ProvinceListQuery, TError, TData>(
    variables === undefined ? ['ProvinceList'] : ['ProvinceList', variables],
    useFetch<ProvinceListQuery, ProvinceListQueryVariables>(
      ProvinceListDocument
    ).bind(null, variables),
    options
  )
export const CityListDocument = `
    query CityList($provinceCode: Int!) {
  list: meta_area_cn_city(
    order_by: {code: asc_nulls_first}
    where: {provinceCode: {_eq: $provinceCode}}
  ) {
    code
    label: name
    value: code
  }
}
    `
export const useCityListQuery = <TData = CityListQuery, TError = unknown>(
  variables: CityListQueryVariables,
  options?: UseQueryOptions<CityListQuery, TError, TData>
) =>
  useQuery<CityListQuery, TError, TData>(
    ['CityList', variables],
    useFetch<CityListQuery, CityListQueryVariables>(CityListDocument).bind(
      null,
      variables
    ),
    options
  )
export const CountyListDocument = `
    query CountyList($cityCode: Int!) {
  list: meta_area_cn_county(
    order_by: {code: asc_nulls_first}
    where: {cityCode: {_eq: $cityCode}}
  ) {
    code
    label: name
    value: code
  }
}
    `
export const useCountyListQuery = <TData = CountyListQuery, TError = unknown>(
  variables: CountyListQueryVariables,
  options?: UseQueryOptions<CountyListQuery, TError, TData>
) =>
  useQuery<CountyListQuery, TError, TData>(
    ['CountyList', variables],
    useFetch<CountyListQuery, CountyListQueryVariables>(
      CountyListDocument
    ).bind(null, variables),
    options
  )
export const TownListDocument = `
    query TownList($countyCode: Int!) {
  list: meta_area_cn_town(
    order_by: {code: asc_nulls_first}
    where: {countyCode: {_eq: $countyCode}}
  ) {
    code
    label: name
    value: code
  }
}
    `
export const useTownListQuery = <TData = TownListQuery, TError = unknown>(
  variables: TownListQueryVariables,
  options?: UseQueryOptions<TownListQuery, TError, TData>
) =>
  useQuery<TownListQuery, TError, TData>(
    ['TownList', variables],
    useFetch<TownListQuery, TownListQueryVariables>(TownListDocument).bind(
      null,
      variables
    ),
    options
  )
export const ProvinceListSearchDocument = `
    query ProvinceListSearch($keyword: String!) {
  provinces: meta_area_cn_province(order_by: {}, where: {name: {_like: $keyword}}) {
    code
    label: name
    value: code
  }
}
    `
export const useProvinceListSearchQuery = <
  TData = ProvinceListSearchQuery,
  TError = unknown
>(
  variables: ProvinceListSearchQueryVariables,
  options?: UseQueryOptions<ProvinceListSearchQuery, TError, TData>
) =>
  useQuery<ProvinceListSearchQuery, TError, TData>(
    ['ProvinceListSearch', variables],
    useFetch<ProvinceListSearchQuery, ProvinceListSearchQueryVariables>(
      ProvinceListSearchDocument
    ).bind(null, variables),
    options
  )
export const CityListSearchDocument = `
    query CityListSearch($provinceCode: Int!, $keyword: String!) {
  cities: meta_area_cn_city(
    order_by: {}
    where: {_and: {provinceCode: {_eq: $provinceCode}, name: {_like: $keyword}}}
  ) {
    code
    label: name
    value: code
  }
}
    `
export const useCityListSearchQuery = <
  TData = CityListSearchQuery,
  TError = unknown
>(
  variables: CityListSearchQueryVariables,
  options?: UseQueryOptions<CityListSearchQuery, TError, TData>
) =>
  useQuery<CityListSearchQuery, TError, TData>(
    ['CityListSearch', variables],
    useFetch<CityListSearchQuery, CityListSearchQueryVariables>(
      CityListSearchDocument
    ).bind(null, variables),
    options
  )
export const CountyListSearchDocument = `
    query CountyListSearch($cityCode: Int!, $keyword: String!) {
  counties: meta_area_cn_county(
    order_by: {}
    where: {_and: {cityCode: {_eq: $cityCode}, name: {_like: $keyword}}}
  ) {
    code
    label: name
    value: code
  }
}
    `
export const useCountyListSearchQuery = <
  TData = CountyListSearchQuery,
  TError = unknown
>(
  variables: CountyListSearchQueryVariables,
  options?: UseQueryOptions<CountyListSearchQuery, TError, TData>
) =>
  useQuery<CountyListSearchQuery, TError, TData>(
    ['CountyListSearch', variables],
    useFetch<CountyListSearchQuery, CountyListSearchQueryVariables>(
      CountyListSearchDocument
    ).bind(null, variables),
    options
  )
export const TownListSearchDocument = `
    query TownListSearch($countyCode: Int!, $keyword: String!) {
  towns: meta_area_cn_town(
    order_by: {}
    where: {_and: {countyCode: {_eq: $countyCode}, name: {_like: $keyword}}}
  ) {
    province {
      code
      label: name
      value: code
    }
    city {
      code
      label: name
      value: code
    }
    county {
      code
      label: name
      value: code
    }
    ... on meta_area_cn_town {
      code
      label: name
      value: code
    }
  }
}
    `
export const useTownListSearchQuery = <
  TData = TownListSearchQuery,
  TError = unknown
>(
  variables: TownListSearchQueryVariables,
  options?: UseQueryOptions<TownListSearchQuery, TError, TData>
) =>
  useQuery<TownListSearchQuery, TError, TData>(
    ['TownListSearch', variables],
    useFetch<TownListSearchQuery, TownListSearchQueryVariables>(
      TownListSearchDocument
    ).bind(null, variables),
    options
  )
