import { Judgement } from '../common'

/**
 * 一个检测项必备属性
 */
export interface DetectionField {
  name: string
  requirementAcceptance: string
  requirementState: string
  judgement?: Judgement
}

export const unitCurrent = 'mA'
