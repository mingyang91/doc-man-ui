import { isNil, merge } from 'lodash-es'

import ruleJudgment from 'u/rule-judgment'

import { Conclusions } from 'm/common'
import { InspectionReportItem, InspectionRequirementChild } from 'm/presets'

import { DBLFAIFData, DBLFAIFDataResult } from './type'

export const initialDBLFAIFDataResult = (result?: DBLFAIFDataResult) => {
  const initialResult: DBLFAIFDataResult = [
    { label: '东', value: 0.5 },
    { label: '南', value: 0.5 },
    { label: '西', value: -0.5 },
    { label: '北', value: 0.2 },
  ]

  return merge(initialResult, result)
}

export const initialDBLFAIFData = (
  input?: InspectionReportItem<DBLFAIFData>
): Required<DBLFAIFData> => {
  return {
    condition: merge(
      {
        left: 'SID',
        operator: '=',
        right: '100cm',
      },
      input?.condition
    ),
    result: initialDBLFAIFDataResult(input?.data?.result),
  }
}

export const getDBLFAIFConclusion = (
  data: DBLFAIFData,
  requirement: InspectionRequirementChild
) => {
  if (isNil(data.result) || data.result.some(({ value }) => isNil(value))) {
    return Conclusions.Unknown
  }

  console.log('getDBLFAIFConclusion', data, requirement)

  const fn = ruleJudgment(requirement.rule)

  return data.result.every(({ value }) => fn(value))
    ? Conclusions.Good
    : Conclusions.Bad
}
