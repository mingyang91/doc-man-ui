import { TableCell } from '@mui/material'

import { formatCondition, formatResult } from './utils'
import { RORDataItem } from './type'

export const CellCondition = ({ condition }: RORDataItem) => {
  return <TableCell align="center">{formatCondition(condition)}</TableCell>
}

export const CellResult = ({ result }: RORDataItem) => {
  return <TableCell align="center">{formatResult(result)}</TableCell>
}
