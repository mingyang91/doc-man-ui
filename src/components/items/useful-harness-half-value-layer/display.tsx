import { TableCell } from '@mui/material'

import { InspectionReportItem } from 'm/presets'

import { formatCondition, formatResult } from './utils'
import { UHHVLData } from './type'

export const CellCondition = ({ data }: InspectionReportItem<UHHVLData>) => {
  return (
    <TableCell align="center">{formatCondition(data?.condition)}</TableCell>
  )
}

export const CellResult = ({ data }: InspectionReportItem<UHHVLData>) => {
  return <TableCell align="center">{formatResult(data?.result)}</TableCell>
}
