import { TableHead, TableRow, TableCell } from '@mui/material'

import i18n from 'strings/i18n'

export const RUHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>{i18n.t('检测条件')}</TableCell>
        <TableCell>{i18n.t('检测结果')}</TableCell>
      </TableRow>
    </TableHead>
  )
}
