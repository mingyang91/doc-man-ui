import { isEmpty, map, merge } from 'lodash-es'
import { AVERAGE, STDEV } from '@formulajs/formulajs'
import Big from 'big.js'

import ruleJudgment from 'u/rule-judgment'

import {
  Conclusions,
  formatConclusion,
  formatUnitValue,
  UnitValue,
} from 'm/common'
import {
  InspectionReportItem,
  InspectionRequirementChild,
  ReportRenderItem,
} from 'm/presets'

import {
  RORData,
  RORDataItem,
  RORDataItemCondition,
  RORDataItemResult,
} from './type'

export const initialRORDataItem = (
  input: RORDataItem,
  index: number
): Required<RORDataItem> => {
  return {
    condition: merge(
      {
        current: {
          value: 0,
          unit: 'mA',
        },
        voltage: {
          value: 0,
          unit: 'kV',
        },
        timeProduct: {
          value: 0.125,
          unit: 's',
        },
      },
      input.condition
    ),
    input: merge({
      name: '输出量',
      unit: '',
      timeProduct: {
        value: 0.125,
        unit: 's',
      },
      values: [0, 0, 0, 0, 0],
    }),
    result: merge({
      value: 0,
      unit: '%',
    }),
  }
}

export const initialRORData = (
  input: InspectionReportItem<RORData>
): Required<RORData> => {
  return map(input.condition as RORDataItemCondition[], (condition, index) => {
    return initialRORDataItem({ condition }, index)
  })
}

export const calculateRORItemResult = (
  values: string[],
  condition: RORDataItemCondition
): UnitValue => {
  if (values.some(value => isNaN(Number(value)) || Number(value) === 0)) {
    return {
      value: 0,
      unit: '%',
    }
  }

  try {
    const numericValues = values.map(Number)
    const stdev = new Big(STDEV.S(numericValues))
    const average = new Big(AVERAGE(numericValues))
    const result = stdev.div(average).times(100)

    return {
      value: result.round(3, 2).toNumber(),
      unit: '%',
    }
  } catch (e) {
    console.log('calculateRORItemResult Error', e)

    return {
      value: 0,
      unit: '%',
    }
  }
}

export const getRORConclusion = (
  result: RORData,
  requirement: InspectionRequirementChild
): Conclusions => {
  if (
    !result ||
    result.some(item => !item.result || isNaN(item.result.value))
  ) {
    return Conclusions.Unknown
  }

  const fn = ruleJudgment(requirement.rule)

  return fn(result.map(item => item.result?.value))
    ? Conclusions.Good
    : Conclusions.Bad
}

const formatCondition = (condition?: RORDataItemCondition) => {
  return condition
    ? `${formatUnitValue(condition.voltage)},${formatUnitValue(
        condition.current
      )},${formatUnitValue(condition.timeProduct)}`
    : ''
}

const formatResult = (result?: RORDataItemResult) => {
  return result ? `${formatUnitValue(result)}` : ''
}

export const toAECResponseRenderItem = (
  report: InspectionReportItem<RORData>
): ReportRenderItem[] => {
  const { data } = report

  if (!data || isEmpty(data)) {
    return []
  }

  return data.map((item, index) => {
    const row: ReportRenderItem = {
      conditionFactor: formatCondition(item.condition),
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
