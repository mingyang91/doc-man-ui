import { TableCell, Box } from '@mui/material'

import { formatUnitValue } from 'm/common'

import { formatFactor, formatResult } from './utils'
import { TVIDDataItem } from './type'

import i18n from 'strings/i18n'

export const CellCondition = ({ condition }: TVIDDataItem) => {
  return (
    <TableCell align="center">
      <Box>{i18n.t('加载因素')}: {formatFactor(condition?.factor)}</Box>
      <Box>{i18n.t('预设值')}: {formatUnitValue(condition?.presets)}</Box>
    </TableCell>
  )
}

export const CellResult = ({ result }: TVIDDataItem) => {
  return <TableCell align="center">{formatResult(result)}</TableCell>
}
