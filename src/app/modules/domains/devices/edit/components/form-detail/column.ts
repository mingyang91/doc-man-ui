export interface Column {
  id:
    | 'name'
    | 'checkCondition'
    | 'checkResult'
    | 'acceptanceRequire'
    | 'stateRequire'
    | 'conclusion'
  label: string
  minWidth?: number
  align?: 'right' | 'left' | 'center'
}
