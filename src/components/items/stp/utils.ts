import { merge } from 'lodash-es'

import ruleJudgment from 'u/rule-judgment'

import {
  InspectionReportItem,
  InspectionRequirementChild,
  ReportRenderItem,
} from 'm/presets'
import { Conclusions, formatConclusion } from 'm/common'

import { StpData, StpDataCondition, StpDataResult } from './type'

export function initialStpData(input?: InspectionReportItem<StpData>): StpData {
  return {
    condition: merge<StpDataCondition, StpDataCondition | undefined>(
      {
        values: [],
      },
      input?.condition
    ),
    input: {
      points: input?.condition.values.map(() => ({ x: 0, y: 0 })),
    },
    result: input?.data?.result,
  }
}

export const formatCondition = (condition?: StpDataCondition) => {
  if (condition) {
    return condition.values.map(v => `${v.value}${v.unit}`).join('/')
  }
  return ''
}

export const formatResult = (result?: StpDataResult) => {
  return result !== undefined ? `${result.r2}` : ''
}

export const toStpRenderItem = (
  report: InspectionReportItem<StpData>
): ReportRenderItem[] => {
  return [
    {
      name: report.displayName,
      conditionFactor: formatCondition(report.data?.condition),
      result: formatResult(report.data?.result),
      defaultValue: '',
      acceptanceRequire: report.requirement?.acceptance?.display || '',
      stateRequire: report.requirement?.state?.display || '',
      conclusion: formatConclusion(report?.conclusions),
    },
  ]
}

export function getSTPConclusion(
  data: StpData,
  requirement: InspectionRequirementChild
): Conclusions {
  if (data.result?.r2 === undefined || isNaN(data.result.r2)) {
    return Conclusions.Unknown
  }

  const fn = ruleJudgment(requirement.rule)

  return fn(data.result.r2) ? Conclusions.Good : Conclusions.Bad
}
