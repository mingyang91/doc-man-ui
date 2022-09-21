import { createFilterOptions } from '@mui/material'
import { merge } from 'lodash-es'
import * as Yup from 'yup'

import { BaseLocationValue, LocationValue } from './type'

export const filterOptions = createFilterOptions<BaseLocationValue>({
  matchFrom: 'any',
  stringify: option => `${option.label}${option.value}`,
})

export const initialLocationData = (
  input?: LocationValue,
  withDetail?: boolean
): LocationValue =>
  withDetail
    ? merge(
        {
          provinceName: '',
          cityName: '',
          countyName: '',
          townName: '',
          province: null,
          city: null,
          county: null,
          town: null,
        },
        input
      )
    : merge(
        {
          provinceName: '',
          cityName: '',
          countyName: '',
          townName: '',
          province: null,
          city: null,
          county: null,
          town: null,
          detail: '',
        },
        input
      )

export const validateSchema = Yup.object().shape({
  province: Yup.number().integer(),
  city: Yup.number().integer(),
  county: Yup.number().integer(),
  town: Yup.number().integer(),
  detail: Yup.string().max(255),
  provinceName: Yup.string().max(255),
  cityName: Yup.string().max(255),
  countyName: Yup.string().max(255),
  townName: Yup.string().max(255),
})

export const formatLocation = (
  location?: LocationValue,
  withDetail = false
) => {
  if (!location) {
    return ''
  }

  const district = location.provinceName?.endsWith('市')
    ? location.cityName
    : ''

  const result = `${location.provinceName}${district}${location.countyName}${location.townName}`

  return withDetail ? `${result}${location.detail}` : result
}
