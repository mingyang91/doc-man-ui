import { merge } from 'lodash-es'
import { AVERAGE, STDEV } from '@formulajs/formulajs'
import Big from 'big.js'

import ruleJudgment from 'u/rule-judgment'

import { InspectionRequirementChild } from 'm/presets'
import { Conclusions } from 'm/common'

import { AECRepeatabilityData } from './type'

export const initialAECRepeatabilityData = (
  input?: AECRepeatabilityData
): Required<AECRepeatabilityData> => {
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
        unit: 'kV',
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

export const calculateAECRepeatabilityData = (values: string[]) => {
  if (values.some(value => isNaN(Number(value)) || Number(value) === 0)) {
    return {
      unit: '',
      value: 0,
    }
  }

  try {
    const _average = AVERAGE(values.map(Number))
    const _stdev = STDEV.S(values.map(Number))

    const average = new Big(_average).round(2)
    const stdev = new Big(_stdev).round(2)

    const result = stdev.div(average).times(100).round(2).toNumber()

    return {
      unit: '',
      value: result,
    }
  } catch (e) {
    console.log('calculateAECRepeatabilityResult Error', e)

    return {
      unit: '',
      value: 0,
    }
  }
}

export const getAECRepeatabilityConclusion = (
  data: AECRepeatabilityData,
  requirement: InspectionRequirementChild
) => {
  const result = data.result?.value
  if (!result || isNaN(result)) {
    return Conclusions.Unknown
  }

  const fn = ruleJudgment(requirement.rule)

  return fn(`${result}`) ? Conclusions.Good : Conclusions.Bad
}
