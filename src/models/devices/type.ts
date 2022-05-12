interface DetectionField {
  displayName: string
  requirementAcceptance: string
  requirementState: string
  judgement?: string
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
