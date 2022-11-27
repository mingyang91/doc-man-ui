import { isNil, merge } from 'lodash-es'

import ruleJudgment from 'u/rule-judgment'

import { Conclusions } from 'm/common'
import { InspectionReportItem, InspectionRequirementChild } from 'm/presets'

import { UHVDData } from './type'

export const initialUHVDData = (
  input?: InspectionReportItem<UHVDData>
): Required<UHVDData> => {
  return {
    condition: merge(
      {
        left: 'SID',
        operator: '=',
        right: '100cm',
      },
      input?.condition
    ),
    result: merge(
      {
        unit: '°',
        value: 0,
      },
      input?.data?.result
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