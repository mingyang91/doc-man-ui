import { makeValidate } from 'mui-rff'
import * as Yup from 'yup'

import { mergeValue } from '@/utils/merge-values'

import { InspectionRequirement } from 'm/presets'
import { InspectionTypesInsertInput } from 'm/types'

export interface InspectionTypeEnumFormData
  extends Omit<InspectionTypesInsertInput, 'consts' | 'requirement'> {
  consts?: number[]
  requirement?: InspectionRequirement
}

export const inspectionTypeEnumFormValidation =
  makeValidate<InspectionTypeEnumFormData>(
    Yup.object().shape({
      name: Yup.string().required('枚举名称必填').trim('请勿输入空格'),
      displayName: Yup.string()
        .required('枚举显示名称必填')
        .trim('请勿输入空格'),
      consts: Yup.array(),
      condition: Yup.object(),
      formula: Yup.string().optional(),
      requirement: Yup.object().shape({
        state: Yup.object()
          .shape({
            display: Yup.string(),
            rule: Yup.object(),
          })
          .optional(),
        acceptance: Yup.object()
          .shape({
            display: Yup.string(),
            rule: Yup.object(),
          })
          .optional(),
      }),
      data: Yup.object(),
    })
  )

export const initialInspectionTypeEnumFormData = (
  input?: InspectionTypeEnumFormData
) => {
  return mergeValue<InspectionTypeEnumFormData>(
    {
      name: '',
      displayName: '',
      consts: [],
      condition: {},
      formula: '',
      requirement: {
        state: {
          display: '',
          rule: {},
        },
        acceptance: {
          display: '',
          rule: {},
        },
      },
      data: {},
    },
    input
  )
}
