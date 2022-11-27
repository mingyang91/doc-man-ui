import { isNil, merge } from 'lodash-es'

import ruleJudgment from 'u/rule-judgment'

import { Conclusions, formatConclusion, formatUnitValue } from 'm/common'
import {
  InspectionReportItem,
  InspectionRequirementChild,
  ReportRenderItem,
} from 'm/presets'

import { DBLFAIFData, DBLFAIFDataCondition, DBLFAIFDataResult } from './type'

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

const formatCondition = (condition?: DBLFAIFDataCondition) => {
  return condition
    ? `${condition.left}${condition.operator}${condition.right}`
    : ''
}

const formatResult = (result?: DBLFAIFDataResult) => {
  return result
    ? `${result.map(item => `${item.label}: ${item.value}`).join('\r\n')}`
    : ''
}

export const toAECResponseRenderItem = (
  report: InspectionReportItem<DBLFAIFData>
): ReportRenderItem[] => {
  return [
    {
      name: report.displayName,
      conditionFactor: formatCondition(report.data?.condition),
      result: formatResult(report.data?.result),
      acceptanceRequire: report.requirement?.acceptance?.display || '',
      stateRequire: report.requirement?.state?.display || '',
      conclusion: formatConclusion(report?.conclusions),
    },
  ]
}
