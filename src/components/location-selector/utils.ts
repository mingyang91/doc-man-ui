import { createFilterOptions } from '@mui/material'
import { merge } from 'lodash-es'
import * as Yup from 'yup'

import { BaseLocationValue, LocationValue } from './type'

export const filterOptions = createFilterOptions<BaseLocationValue>({
  matchFrom: 'any',
  stringify: option => `${option.label}${option.value}`,
})

export const initialLocationData = (
  input?: LocationValue | null,
  withDetail?: boolean
): LocationValue =>
  withDetail
    ? merge(
        {
          province: 31,
          city: 3101,
          county: null,
          town: null,
          provinceName: '上海市',
          cityName: '市辖区',
          countyName: '',
          townName: '',
        },
        input
      )
    : merge(
        {
          province: 31,
          city: 3101,
          county: null,
          town: null,
          provinceName: '上海市',
          cityName: '市辖区',
          countyName: '',
          townName: '',
          detail: '',
        },
        input
      )

export const createValidateSchema = () =>
  Yup.object().shape({
    province: Yup.number().integer().nullable(true),
    city: Yup.number().integer().nullable(true),
    county: Yup.number().integer().nullable(true),
    town: Yup.number().integer().nullable(true),
    detail: Yup.string().max(255).nullable(true),
    provinceName: Yup.string().max(255).nullable(true),
    cityName: Yup.string().max(255).nullable(true),
    countyName: Yup.string().max(255).nullable(true),
    townName: Yup.string().max(255).nullable(true),
  })

export const formatLocation = (
  location?: LocationValue,
  withDetail = false
) => {
  if (!location) {
    return ''
  }

  const district = location.provinceName?.endsWith('市')
    ? ''
    : location.cityName || ''

  const result = `${location.provinceName || ''}${district}${
    location.countyName || ''
  }${location.townName || ''}`

  return withDetail ? `${result}${location.detail || ''}` : result
}
