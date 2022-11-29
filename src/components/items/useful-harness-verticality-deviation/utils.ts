import { isNil, merge } from 'lodash-es'

import ruleJudgment from 'u/rule-judgment'

import { Conclusions, formatConclusion, formatUnitValue } from 'm/common'
import {
  InspectionReportItem,
  InspectionRequirementChild,
  ReportRenderItem,
} from 'm/presets'

import { UHVDData, UHVDDataCondition, UHVDDataResult } from './type'

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

export const formatCondition = (condition?: UHVDDataCondition) => {
  return condition
    ? `${condition.left}${condition.operator}${condition.right}`
    : ''
}

export const formatResult = (result?: UHVDDataResult) => {
  return result ? `${formatUnitValue(result)}` : ''
}

export const toUHVDRenderItem = (
  report: InspectionReportItem<UHVDData>
): ReportRenderItem[] => {
  return [
    {
      name: report.displayName,
      conditionFactor: formatCondition(report.data?.condition),
      defaultValue: '',
      result: formatResult(report.data?.result),
      acceptanceRequire: report.requirement?.acceptance?.display || '',
      stateRequire: report.requirement?.state?.display || '',
      conclusion: formatConclusion(report?.conclusions),
    },
  ]
}
