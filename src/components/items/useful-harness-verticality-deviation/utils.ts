import { isNil, merge } from 'lodash-es'
import ruleJudgment from 'rule-judgment'

import { Conclusions } from 'm/common'
import { InspectionRequirementChild } from 'm/presets'

import { UHVDData, UHVDDataResult } from './type'

export const initialUHVDData = (input: UHVDData): Required<UHVDData> => {
  return {
    condition: merge(
      {
        left: 'SID',
        option: '=',
        right: '100cm',
      },
      input.condition
    ),
    result: merge(
      {
        unit: '',
        value: 0,
      },
      input.result
    ),
  }
}

export const getUHVDConclusion = (
  data: UHVDData,
  requirement: InspectionRequirementChild
) => {
  if (isNil(data.result?.value) || isNaN(Number(data.result?.value))) {
    return Conclusions.Unknown
  }

  const fn = ruleJudgment(requirement.rule)

  return fn(data.result?.value) ? Conclusions.Good : Conclusions.Bad
}
