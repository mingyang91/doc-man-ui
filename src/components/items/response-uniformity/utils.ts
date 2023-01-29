import { merge } from 'lodash-es'

import ruleJudgment from 'u/rule-judgment'

import {
  InspectionReportItem,
  InspectionRequirementChild,
  ReportRenderItem,
} from 'm/presets'
import { Conclusions, formatConclusion } from 'm/common'

import { RUData, RUDataCondition, RUDataInput, RUDataResult } from './type'

export function initialRUData(
  input?: InspectionReportItem<RUData>
): Required<RUData> {
  return {
    condition: merge<RUDataCondition, RUDataCondition | undefined>(
      {
        item: '',
      },
      input?.condition
    ),
    input: merge<RUDataInput, RUDataInput | undefined>(
      {
        points: [
          { position: '中心', pixelValue: 0 },
          { position: '第一', pixelValue: 0 },
          { position: '第二', pixelValue: 0 },
          { position: '第三', pixelValue: 0 },
          { position: '第四', pixelValue: 0 },
        ],
      },
      input?.data?.input
    ),
    result: input?.data?.result ?? 0,
  }
}

export const formatCondition = (condition?: RUDataCondition) => {
  return condition?.item || ''
}

export const formatResult = (result?: RUDataResult) => {
  return result !== undefined ? `${(result * 100).toFixed(2)}%` : ''
}

export const toRURenderItem = (
  report: InspectionReportItem<RUData>
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

export function getRUConclusion(
  data: RUData,
  requirement: InspectionRequirementChild
): Conclusions {
  if (data.result === undefined || isNaN(data.result)) {
    return Conclusions.Unknown
  }

  const fn = ruleJudgment(requirement.rule)

  return fn(data.result) ? Conclusions.Good : Conclusions.Bad
}
