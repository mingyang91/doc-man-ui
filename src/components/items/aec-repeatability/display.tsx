import { TableCell } from '@mui/material'

import { InspectionReportItem } from 'm/presets'

import { formatCondition, formatResult } from './utils'
import { AECRepeatabilityData } from './type'

export const CellCondition = ({
  data,
}: InspectionReportItem<AECRepeatabilityData>) => {
  return (
    <TableCell align="center">{formatCondition(data?.condition)}</TableCell>
  )
}

export const CellResult = ({
  data,
}: InspectionReportItem<AECRepeatabilityData>) => {
  return <TableCell align="center">{formatResult(data?.result)}</TableCell>
}
