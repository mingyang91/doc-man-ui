import { merge } from 'lodash-es'
import { AVERAGE } from '@formulajs/formulajs'
import Big from 'big.js'

import ruleJudgment from 'u/rule-judgment'

import {
  InspectionReportItem,
  InspectionRequirementChild,
  ReportRenderItem,
} from 'm/presets'
import { Conclusions, formatConclusion, formatUnitValue } from 'm/common'

import { UHHVLData, UHHVLDataCondition, UHHVLDataResult } from './type'

export const initialUHHVLData = (input?: UHHVLData): Required<UHHVLData> => {
  return {
    condition: merge(
      {
        voltage: {
          value: 80,
          unit: 'kV',
        },
        current: {
          value: 100,
          unit: 'mA',
        },
        timeProduct: {
          value: 0.125,
          unit: 's',
        },
      },
      input?.condition
    ),
    input: merge(
      {
        name: '',
        unit: 'mmAl',
        values: [0, 0, 0, 0, 0],
      },
      input?.input
    ),
    result: merge(
      {
        unit: '',
        value: 0,
      },
      input?.result
    ),
  }
}

export const calculateUHHVLData = (values: string[]) => {
  if (values.some(value => isNaN(Number(value)) || Number(value) === 0)) {
    return {
      unit: '',
      value: 0,
    }
  }

  try {
    const _average = AVERAGE(values.map(Number))

    const average = new Big(_average).round(2).toNumber()

    return {
      unit: '',
      value: average,
    }
  } catch (e) {
    console.log('calculateUHHVLResult Error', e)

    return {
      unit: '',
      value: 0,
    }
  }
}

export const getUHHVLConclusion = (
  result: number,
  requirement: InspectionRequirementChild
) => {
  if (!result || isNaN(result)) {
    return Conclusions.Unknown
  }

  const fn = ruleJudgment(requirement.rule)

  return fn(result) ? Conclusions.Good : Conclusions.Bad
}

const formatCondition = (condition?: UHHVLDataCondition) => {
  return condition
    ? `${formatUnitValue(condition.voltage)},${formatUnitValue(
        condition.current
      )},${formatUnitValue(condition.timeProduct)}`
    : ''
}

const formatResult = (result?: UHHVLDataResult) => {
  return result ? `${formatUnitValue(result)}` : ''
}

export const toUHHVLRenderItem = (
  report: InspectionReportItem<UHHVLData>
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
