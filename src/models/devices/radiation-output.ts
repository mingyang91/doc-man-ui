import { percentage } from 'number-magic'
import Big from 'big.js'

import { calcStandardDeviation, calcAverage } from '@/utils/math'
import { Device } from '@/generated/graphql'

import { isSamplesAvailable, Conclusions } from '../common'
import { DetectionField, DeviceReportItem } from './type'

/**
 * 计算辐射输量重复性 = StandardDeviation(辐射输量) / 辐射输量平均值
 * @param outputs 输出量
 * @returns
 */
export const calculateRadiationOutput = (outputs: (string | number)[]) => {
  const avg = calcAverage(outputs) // 算出平均值
  const standardDeviation = calcStandardDeviation(outputs, avg) // 算出标准偏差

  const scalar = standardDeviation.div(avg)

  return {
    scalar: scalar.toFixed(3),
    percentage: percentage(scalar.toNumber(), 3),
  }
}

export type RadiationOutputReturns = ReturnType<typeof calculateRadiationOutput>

/**
 * 检测结果是否符合指标
 * 验收检测：±5.0%或±5.0 kV内,以较大者控制
 * 状态检测：±5.0%或±5.0 kV内,以较大者控制
 * @param {CalculateOffsetReturns[]} value 观测值
 */
export const judgeRadiationOutput = (
  results?: (RadiationOutputReturns | undefined)[]
) => {
  function check(result: RadiationOutputReturns | undefined) {
    return result && Big(result.scalar).lte(0.1)
  }
  return isSamplesAvailable(results)
    ? results.every(check)
      ? Conclusions.Good
      : Conclusions.Bad
    : Conclusions.Unknown
}

/**
 * 辐射输出量重复性每一项记录值
 */
export interface RadiationOutputItemCondition {
  timeProduce?: string // 时间积
  voltage?: string // 预设电压
  current?: string // 预设电流
}

export interface RadiationOutputItem {
  value?: RadiationOutputReturns
  condition?: RadiationOutputItemCondition
}

export interface RadiationOutput extends DetectionField {
  items: RadiationOutputItem[]
}

export const unitTimeProduce = 'mAs' // 时间积单位

/**
 * 新建这个字段时的初始值
 * @returns
 */
export const initFieldRadiationOutput: () => RadiationOutput = () => ({
  name: '辐射输出量重复性',
  acceptanceRequire: '≤10.0%',
  stateRequire: '≤10.0%',
  items: [
    {
      condition: {
        timeProduce: '6.3',
        voltage: '80',
        current: '200',
      },
      value: undefined,
    },
  ],
})

export const convertRadiationOutputTemplate = (
  device: Device
): DeviceReportItem[] => {
  const input = device.radiationOutput

  if (!input) {
    return []
  }

  const baseAttrs = {
    name: input.name,
    acceptanceRequire: input.acceptanceRequire,
    stateRequire: input.stateRequire,
  }
  return input.items.map(item => {
    const { condition, value } = item

    return {
      ...baseAttrs,
      conditionFactor: condition
        ? `${condition.current}mA, ${condition.voltage}kV, ${condition.timeProduce}mAs`
        : '',
      value: value ? `${value.scalar}(${value.percentage})` : '',
    }
  })
}
