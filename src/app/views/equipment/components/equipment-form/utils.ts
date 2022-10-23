import createDecorator from 'final-form-calculate'
import { makeValidate } from 'mui-rff'
import * as Yup from 'yup'

import { mergeValue } from '@/utils/merge-values'

import { AddressField } from 'm/presets'
import { Equipment } from 'm/types'

import {
  createValidateSchema,
  initialLocationData,
  LocationValue,
} from '@@/location-selector'

export interface EquipmentFormData extends Omit<Partial<Equipment>, 'address'> {
  address?: LocationValue | null
}

export const EquipmentFormValidation = makeValidate<EquipmentFormData>(
  Yup.object().shape({
    address: createValidateSchema().required('检测地址必填'),
    clientId: Yup.string()
      .uuid('委托单位值错误')
      .nullable()
      .required('委托单位必填'),
    comment: Yup.string().max(500, '最多500个字符').nullable(),
    equipmentCode: Yup.string().nullable().trim('请勿输入空格'),
    equipmentManufacturer: Yup.string().nullable().trim('请勿输入空格'),
    equipmentModel: Yup.string().nullable().trim('请勿输入空格'),
    equipmentName: Yup.string().required('设备名称必填').trim('请勿输入空格'),
    equipmentSampleId: Yup.string().nullable().trim('请勿输入空格'),
    equipmentSite: Yup.string().nullable().trim('请勿输入空格'),
    inspectionInstrument: Yup.string().nullable().trim('请勿输入空格'),
  })
)

export const initialEquipmentFormData = (input?: EquipmentFormData) => {
  return mergeValue<EquipmentFormData>(
    {
      address: initialLocationData(undefined, true) as AddressField,
      clientId: null,
      client: null,
      equipmentCode: '',
      equipmentManufacturer: '',
      equipmentModel: '',
      equipmentName: '',
      equipmentSampleId: '',
      equipmentSite: '',
      inspectionInstrument: '',
      comment: '',
    },
    input
  )
}

export const updateDecorator = createDecorator({
  field: 'client',
  updates: {
    clientId: (client: EquipmentFormData['client']) => client?.id,
    address: (
      client: EquipmentFormData['client'],
      values?: EquipmentFormData
    ) => {
      if (client?.address) {
        return mergeValue<LocationValue>(
          values?.address as LocationValue,
          client.address as LocationValue
        )
      }
      return values?.address
    },
  },
})
