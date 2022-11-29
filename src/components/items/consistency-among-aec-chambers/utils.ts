import { merge } from 'lodash-es'
import { AVERAGE, MAX } from '@formulajs/formulajs'
import Big from 'big.js'

import ruleJudgment from 'u/rule-judgment'

import {
  InspectionReportItem,
  InspectionRequirementChild,
  ReportRenderItem,
} from 'm/presets'
import { Conclusions, formatConclusion, formatUnitValue } from 'm/common'

import {
  ConsistencyAmongAECChambersData,
  ConsistencyAmongAECChambersDataCondition,
  ConsistencyAmongAECChambersDataInput,
  ConsistencyAmongAECChambersDataResult,
} from './type'

export const initialConsistencyAmongAECChambersData = (
  input?: ConsistencyAmongAECChambersData
): Required<ConsistencyAmongAECChambersData> => {
  return {
    condition: merge(
      {
        unit: 'kV',
        value: 70,
      },
      input?.condition
    ),
    input: merge(
      {
        title: '电离室',
        values: [0, 0, 0, 0, 0],
      },
      input?.input
    ),
    result: merge(
      {
        value: 0,
        prefix: '±',
        unit: '%',
      },
      input?.result
    ),
  }
}

export const calculateConsistencyAmongAECChambersData = (
  input: ConsistencyAmongAECChambersDataInput
) => {
  if (input.values.some(value => isNaN(Number(value)) || Number(value) === 0)) {
    console.log('calculateConsistencyAmongAECChambersData', input)
    return {
      value: 0,
      unit: '%',
    }
  }

  try {
    const avg = new Big(AVERAGE(input.values))
    const internalNums = input.values.map((value, index) => {
      return new Big(input.values[index]).minus(avg).div(avg)
    })
    const internalNumsAvg = new Big(AVERAGE(internalNums))

    const result = new Big(MAX(internalNumsAvg.toNumber(), avg.toNumber()))
      .times(100)
      .round(3)

    return {
      value: result.toNumber(),
      unit: '%',
    }
  } catch (e) {
    console.log('calculateConsistencyAmongAECChambersResult Error', e)

    return {
      value: 0,
      unit: '%',
    }
  }
}

export const getConsistencyAmongAECChambers = (
  data: ConsistencyAmongAECChambersData,
  requirement: InspectionRequirementChild
) => {
  console.log('getConsistencyAmongAECChambers', data.result, requirement)
  if (!data.result?.value || isNaN(data.result.value)) {
    return Conclusions.Unknown
  }

  const fn = ruleJudgment(requirement.rule)

  return fn(data.result.value) ? Conclusions.Good : Conclusions.Bad
}

export const formatCondition = (
  condition?: ConsistencyAmongAECChambersDataCondition
) => {
  return condition ? `${formatUnitValue(condition)}` : ''
}

export const formatResult = (
  result?: ConsistencyAmongAECChambersDataResult
) => {
  return result ? `${formatUnitValue(result)}` : ''
}

export const toConsistencyAmongAECChamberRenderItem = (
  report: InspectionReportItem<ConsistencyAmongAECChambersData>
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
