export interface Column {
  id:
    | 'name'
    | 'checkCondition'
    | 'checkResult'
    | 'requirementAcceptance'
    | 'requirementState'
    | 'judgement'
  label: string
  minWidth?: number
  align?: 'right' | 'left' | 'center'
}
