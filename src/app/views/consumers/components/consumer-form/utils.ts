import { makeValidate } from 'mui-rff'
import * as Yup from 'yup'

import { mergeValue } from '@/utils/merge-values'

import { AddressField } from 'm/presets'
import { Maybe } from 'm/types'

import { LocationValue } from '@@/location-selector'
import {
  createValidateSchema,
  initialLocationData,
} from '@@/location-selector/utils'

export interface ConsumerFormData {
  address: Maybe<LocationValue> | undefined
  comment: Maybe<string> | undefined
  name: Maybe<string> | undefined
}

export const ConsumerFormValidation = makeValidate<ConsumerFormData>(
  Yup.object().shape({
    name: Yup.string().optional().nullable().trim('请勿输入空格'),
    address: createValidateSchema().optional(),
    comment: Yup.string().optional().nullable().max(500, '最多500个字符'),
  })
)

export const initialClientsFormData = (
  input?: ConsumerFormData
): ConsumerFormData =>
  mergeValue<ConsumerFormData>(
    {
      name: '',
      address: initialLocationData(undefined, true) as AddressField,
      comment: '',
    },
    input
  )
