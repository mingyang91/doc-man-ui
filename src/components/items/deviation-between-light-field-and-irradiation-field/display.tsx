import { Stack, TableCell, Box } from '@mui/material'
import { Fragment } from 'react'

import { InspectionReportItem } from 'm/presets'

import { formatCondition } from './utils'
import { DBLFAIFData } from './type'

export const CellCondition = ({ data }: InspectionReportItem<DBLFAIFData>) => {
  return (
    <TableCell align="center">{formatCondition(data?.condition)}</TableCell>
  )
}

export const CellResult = ({ data }: InspectionReportItem<DBLFAIFData>) => {
  return (
    <TableCell align="center">
      {data?.result
        ? data?.result.map((item, index) => (
            <Fragment key={`${item.value}-${index}`}>
              <Stack direction="row" alignContent="space-between">
                <Box width="50%">{item.label}:</Box>
                <Box width="50%">{item.value}</Box>
              </Stack>
            </Fragment>
          ))
        : ''}
    </TableCell>
  )
}
