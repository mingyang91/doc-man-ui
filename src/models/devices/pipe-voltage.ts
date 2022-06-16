import Big from 'big.js'
import { percentage } from 'number-magic'

import { Device } from '@/generated/graphql'

import { calcAverage } from '@utils/math'

import { isSamplesAvailable, Conclusions } from '../common'
import { DetectionField, DeviceReportItem } from './type'

/**
 * 管电压指示偏离率
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
  return isSamplesAvailable(results)
    ? results.every(check)
      ? Conclusions.Good
      : Conclusions.Bad
    : Conclusions.Unknown
}

export interface PipeVoltageItemCondition {
  loadingFactor: string
  presetValue: string
}

export interface PipeVoltageItem {
  value?: CalculateOffsetReturns
  condition: PipeVoltageItemCondition
}

export interface PipeVoltage extends DetectionField {
  items: PipeVoltageItem[]
}

export const unitPipeVoltage = 'kV'

/**
 * 新建这个字段时的初始值
 * @returns
 */
export const initPipeVoltage: () => PipeVoltage = () => ({
  name: '管电压指示偏离',
  acceptanceRequire: '±5.0%或±5.0 kV内,以较大者控制',
  stateRequire: '±5.0%或±5.0 kV内,以较大者控制',
  items: [
    {
      condition: {
        loadingFactor: '100 mA,0.125s',
        presetValue: '60',
      },
      value: undefined,
    },
  ],
})

export const convertPipeVoltageTemplate = (
  device: Device
): DeviceReportItem[] => {
  const input = device.pipeVoltage

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
    const { loadingFactor, presetValue } = condition

    return {
      ...baseAttrs,
      conditionFactor: `${presetValue}, ${loadingFactor}`,
      value: value ? `${value.offset}(${value.offsetRateStringify})` : '',
    }
  })
}
