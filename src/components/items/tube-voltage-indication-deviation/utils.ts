import { isEmpty, map, merge } from 'lodash-es'
import { AVERAGE } from '@formulajs/formulajs'
import Big from 'big.js'

import ruleJudgment from 'u/rule-judgment'

import { Conclusions, formatUnitValue, formatConclusion } from 'm/common'
import {
  InspectionReportItem,
  InspectionRequirementChild,
  ReportRenderItem,
} from 'm/presets'

import {
  TVIDData,
  TVIDDataCondition,
  TVIDDataItem,
  TVIDDataResult,
  TVIDDataItemFactor,
} from './type'

export const initialTVIDDataItem = (
  input: TVIDDataItem,
  consts: number[],
  index: number
): Required<TVIDDataItem> => {
  return {
    condition: merge(
      {
        factor: {
          current: {
            value: 0,
            unit: 'mA',
            name: '管电流',
          },
          timeProduct: {
            value: 0.125,
            unit: 'ms',
            name: '时间积',
          },
        },
        presets: {
          value: 60,
          unit: 'kV',
          name: '预设值',
        },
      },
      input.condition
    ),
    input: merge(
      {
        name: '管电压',
        unit: 'kV',
        offset: consts[index] || 0,
        values: [0, 0, 0],
      },
      input.input
    ),
    result: merge(
      {
        scalar: {
          unit: 'kV',
          value: 0,
        },
        percentage: {
          unit: '%',
          value: 0,
        },
      },
      input.result
    ),
  }
}

export const initialTVIDData = (
  input: InspectionReportItem<TVIDData>,
  consts: number[]
) => {
  return map<TVIDDataCondition, TVIDDataItem>(
    input.condition as TVIDDataCondition[],
    (condition, index) => {
      return initialTVIDDataItem({ condition }, consts, index)
    }
  )
}

export const calculateTVIDItemResult = (
  values: string[],
  preset: number,
  offset = 0
) => {
  if (values.some(value => isNaN(Number(value)) || Number(value) === 0)) {
    return {
      scalar: {
        value: 0,
        unit: 'kV',
      },
      percentage: {
        value: 0,
        unit: '%',
      },
    }
  }

  try {
    const _average = AVERAGE(values.map(Number))

    const average = new Big(_average).round(3)
    const scalar = average.add(offset).minus(preset)
    const percentage = new Big(scalar).div(preset).times(100).round(3)

    return {
      scalar: {
        unit: 'kV',
        value: scalar.toNumber(),
      },
      percentage: {
        unit: '%',
        value: percentage.toNumber(),
      },
    }
  } catch (e) {
    console.log('calculateTVIDItemResult Error', e)

    return {
      scalar: {
        value: 0,
        unit: 'kV',
      },
      percentage: {
        value: 0,
        unit: '%',
      },
    }
  }
}
export const getTVIDConclusion = (
  result: TVIDData,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  requirement: InspectionRequirementChild
) => {
  if (
    !result ||
    result.some(item => !item.result || isNaN(item.result.percentage.value))
  ) {
    return Conclusions.Unknown
  }

  const fn = ruleJudgment(requirement)

  if (result.map(item => item.result).every(fn)) {
    return Conclusions.Good
  }

  return Conclusions.Bad
}

const formatFactor = (factor?: TVIDDataItemFactor) => {
  return factor
    ? `${formatUnitValue(factor.current)}${formatUnitValue(factor.timeProduct)}`
    : ''
}

const formatResult = (input?: TVIDDataResult) => {
  return input
    ? `${formatUnitValue(input.percentage)}(${formatUnitValue(input.scalar)})`
    : ''
}

export const toTVIDRenderItem = (
  report: InspectionReportItem<TVIDData>
): ReportRenderItem[] => {
  const { data } = report

  if (!data || isEmpty(data)) {
    return []
  }

  return data.map((item, index) => {
    const row: ReportRenderItem = {
      conditionFactor: formatFactor(item.condition?.factor),
      defaultValue: formatUnitValue(item.condition?.presets),
      result: formatResult(item.result),
      acceptanceRequire: report?.requirement?.acceptance?.display || '',
      stateRequire: report?.requirement?.state?.display || '',
      conclusion: formatConclusion(report?.conclusions),
    }

    if (index === 0) {
      row.name = report.displayName
    }

    return row
  })
}
