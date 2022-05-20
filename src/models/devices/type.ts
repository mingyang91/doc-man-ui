import { Judgement } from '../common'

import { CalculateOffsetReturns } from './calculate'

interface DetectionField {
  name: string
  requirementAcceptance: string
  requirementState: string
  judgement?: Judgement
}

export interface PipeVoltageItemCondition {
  loadingFactor: string
  presetValue: string
}

interface PipeVoltageItem {
  value?: CalculateOffsetReturns
  condition: PipeVoltageItemCondition
}

export interface PipeVoltage extends DetectionField {
  items: PipeVoltageItem[]
}

export const unitPipeVoltage = 'kV'
