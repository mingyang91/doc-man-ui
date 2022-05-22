import Big from 'big.js'
import { percentage } from 'number-magic'

import { calcAverage, calcStandardDeviation } from '@/utils/math'

import { Judgement } from '../common'

/* ======== 管电压指示偏离 ======== */

/**
 * 偏离率
 * @param {Array<number>} values 观测值
 * @param {string | number} presetValue 预设值
 * @param {string | number} calibrationFactor 校准因子
 */
export const calculateOffset = (
  values: (string | number)[],
  presetValue: string | number,
  calibrationFactor: string | number = '0'
) => {
  // 平均值
  const avg = calcAverage(values)
  // 校准后值（默认为0）
  const calibratedValue = avg.plus(calibrationFactor)
  // 偏离
  const offset = calibratedValue.minus(presetValue)
  // 偏离率
  const offsetRate = Big(offset).div(presetValue).toNumber()
  const offsetRateStringify = percentage(offsetRate, 3)
  return {
    averageValue: avg.toFixed(3),
    calibratedValue: calibratedValue.toFixed(3),
    offset: offset.toFixed(3),
    offsetRate: offsetRate.toFixed(3),
    offsetRateStringify,
  }
}

export type CalculateOffsetReturns = ReturnType<typeof calculateOffset>

/**
 * 检测结果是否符合指标
 * 验收检测：±5.0%或±5.0 kV内,以较大者控制
 * 状态检测：±5.0%或±5.0 kV内,以较大者控制
 * @param {CalculateOffsetReturns[]} value 观测值
 */
export const judgePipeVoltageOffset = (
  results?: (CalculateOffsetReturns | undefined)[]
) => {
  function check(result: CalculateOffsetReturns | undefined) {
    return (
      result &&
      (Big(result.offset).minus(5).abs().lte(5) ||
        Big(result.offsetRate).minus(0.05).abs().lte(0.05))
    )
  }
  return results?.length
    ? results.every(check)
      ? Judgement.Good
      : Judgement.Bad
    : Judgement.Unknown
}

/* ======== 辐射输出量重复性 ======== */

export const calculateRadiationOutput = (outputs: (string | number)[]) => {
  const standardDeviation = calcStandardDeviation(outputs)
  return {
    scalar: standardDeviation.toFixed(3),
    percentage: percentage(standardDeviation.toNumber(), 3),
  }
}
