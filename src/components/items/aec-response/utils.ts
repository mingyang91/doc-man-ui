import { merge } from 'lodash-es'
import { AVERAGE } from '@formulajs/formulajs'
import Big from 'big.js'

import ruleJudgment from 'u/rule-judgment'

import { InspectionRequirementChild } from 'm/presets'
import { Conclusions } from 'm/common'

import { AECResponseData, AECResponseDataInput } from './type'

export const initialAECResponseData = (
  input?: AECResponseData
): Required<AECResponseData> => {
  return {
    condition: merge(
      {
        unit: 'kV',
        value: 80,
      },
      input?.condition
    ),
    input: merge(
      {
        0: {
          title: '20mm铝板',
          values: [0, 0, 0, 0],
        },
        1: {
          title: '20mm铝板+1.5mm铜板',
          values: [0, 0, 0, 0],
        },
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

export const calculateAECResponseData = (input: AECResponseDataInput) => {
  if (
    input[0].values.some(
      value => isNaN(Number(value)) || Number(value) === 0
    ) ||
    input[1].values.some(value => isNaN(Number(value)) || Number(value) === 0)
  ) {
    console.log('calculateAECResponseData', input)
    return {
      value: 0,
      unit: '%',
      prefix: '±',
    }
  }

  try {
    const avgRow0 = new Big(AVERAGE(input[0].values.map(Number))).round(3)
    const avgRow1 = new Big(AVERAGE(input[1].values.map(Number))).round(3)

    const ave = avgRow0.add(avgRow1).div(2)

    const result = avgRow0
      .minus(ave)
      .div(avgRow0.add(avgRow1))
      .div(2)
      .times(100)
      .round(3)

    return {
      value: result.toNumber(),
      unit: '%',
      prefix: '±',
    }
  } catch (e) {
    console.log('calculateAECResponseResult Error', e)

    return {
      value: 0,
      unit: '%',
      prefix: '±',
    }
  }
}

export const getAECResponseConclusion = (
  data: AECResponseData,
  requirement: InspectionRequirementChild
) => {
  console.log('getAECResponseConclusion', data.result, requirement)
  if (!data.result?.value || isNaN(data.result.value)) {
    return Conclusions.Unknown
  }

  const fn = ruleJudgment(requirement.rule)

  return fn(data.result.value) ? Conclusions.Good : Conclusions.Bad
}
