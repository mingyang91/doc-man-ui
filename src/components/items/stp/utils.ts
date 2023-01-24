import { merge } from 'lodash-es'

import ruleJudgment from 'u/rule-judgment'

import {
  InspectionReportItem,
  InspectionRequirementChild,
  ReportRenderItem,
} from 'm/presets'
import { Conclusions, formatConclusion } from 'm/common'

import { StpData, StpDataCondition, StpDataInput, StpDataResult } from './type'

export function initialStpData(
  input?: InspectionReportItem<StpData>
): Required<StpData> {
  return {
    condition: merge<StpDataCondition, StpDataCondition | undefined>(
      {
        values: [],
      },
      input?.condition
    ),
    input: merge<StpDataInput, StpDataInput | undefined>(
      {
        points: [],
      },
      input?.data?.input
    ),
    result: input?.data?.result ?? 0,
  }
}

export const formatCondition = (condition?: StpDataCondition) => {
  if (condition) {
    return condition.values.map(v => `${v.value}${v.unit}`).join('/')
  }
  return ''
}

export const formatResult = (result?: StpDataResult) => {
  return result !== undefined ? `${result}` : ''
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
  if (data.result === undefined || isNaN(data.result)) {
    return Conclusions.Unknown
  }

  const fn = ruleJudgment(requirement.rule)

  return fn(data.result) ? Conclusions.Good : Conclusions.Bad
}
