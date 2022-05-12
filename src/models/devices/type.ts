export enum Judgement {
  'Good',
  'Bad',
}

interface DetectionField {
  name: string
  requirementAcceptance: string
  requirementState: string
  judgement?: Judgement
}

interface Condition {
  loadingFactor: string
  presetValue: string
}

interface PipeVoltageItem {
  value?: string
  condition: Condition
}

export interface PipeVoltage extends DetectionField {
  items: PipeVoltageItem[]
}
