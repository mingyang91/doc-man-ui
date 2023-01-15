import { merge } from 'lodash-es'

import { InspectionReportItem, ReportRenderItem } from 'm/presets'
import { formatConclusion } from 'm/common'

import { StpData, StpDataCondition, StpDataInput, StpDataResult } from './type'

export const initialStpData = (
  input?: InspectionReportItem<StpData>
): Required<StpData> => {
  return {
    condition: merge<StpDataCondition, StpDataCondition | undefined>(
      {
        values: [],
      },
      input?.condition as StpDataCondition | undefined
    ),
    input: merge<StpDataInput, StpDataInput | undefined>(
      {
        values: [],
      },
      input?.data?.input
    ),
    result: input?.data?.result ?? 0,
  }
}

export const formatCondition = (condition?: StpDataCondition) => {
  if (condition) {
    return condition.values.join(' / ')
  }
  return ''
}

export const formatResult = (result?: StpDataResult) => {
  return result ? `${result}` : ''
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
