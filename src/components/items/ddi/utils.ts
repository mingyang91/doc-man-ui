import { isNull, merge } from 'lodash-es'
import { AVERAGE } from '@formulajs/formulajs'
import Big from 'big.js'

import ruleJudgment from 'u/rule-judgment'

import {
  InspectionReportItem,
  InspectionRequirementChild,
  ReportRenderItem,
} from 'm/presets'
import { Conclusions, formatConclusion, formatUnitValue } from 'm/common'

import { DdiData, DdiDataCondition, DdiDataResult } from './type'

export const initialDdiData = (input?: DdiData): Required<DdiData> => {
  return {
    condition: merge<DdiDataCondition, DdiDataCondition | undefined>(
      {
        value: {
          value: 10,
          unit: 'μGy',
        },
        voltage: {
          value: 70,
          unit: 'kV',
        },
        current: {
          value: 100,
          unit: 'mAs',
        },
      },
      input?.condition
    ),
    input: merge(
      {
        baseValue: 0,
        values: [0, 0, 0],
      },
      input?.input
    ),
    result: merge(
      {
        scalar: undefined,
        percentage: undefined,
        description: '平均像素值',
      },
      input?.result
    ),
  }
}

export const calculateDdiData = (
  inputs: string[],
  baseValue?: string
): Omit<DdiDataResult, 'description'> => {
  if (
    inputs.some(value => isNaN(Number(value)) || Number(value) === 0) ||
    isNull(baseValue) ||
    isNaN(Number(baseValue))
  ) {
    return {
      scalar: {
        value: 0,
        unit: '',
      },
      percentage: {
        value: 0,
        unit: '%',
      },
    }
  }

  const _baseValue = new Big(baseValue || 0)
  const _average = AVERAGE(inputs.map(value => Number(value)))

  const scalar = new Big(_average).minus(_baseValue)

  const percentage = new Big(scalar).div(_baseValue).times(100)

  return {
    scalar: {
      value: scalar.round(2).toNumber(),
      unit: '',
    },
    percentage: {
      value: percentage.round(2).toNumber(),
      unit: '%',
    },
  }
}

export const formatResult = (result?: DdiDataResult) => {
  if (!result) {
    return ''
  }
  return `${formatUnitValue(result.scalar)} (${formatUnitValue(
    result.percentage
  )})\r\n${result.description || ''}`
}

export const formatCondition = (condition?: DdiDataCondition) => {
  if (!condition) {
    return ''
  }
  return `(${formatUnitValue(condition.value)})\r\n${formatUnitValue(
    condition.voltage
  )} ${formatUnitValue(condition.current)}`
}

export const toDdiRenderItem = (
  report: InspectionReportItem<DdiData>
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

export function getDdiConclusion(
  data: DdiData,
  requirement: InspectionRequirementChild
) {
  if (!data.result?.percentage || isNaN(data.result.percentage.value)) {
    return Conclusions.Unknown
  }

  const fn = ruleJudgment(requirement.rule)

  return fn(data.result.percentage.value) ? Conclusions.Good : Conclusions.Bad
}
