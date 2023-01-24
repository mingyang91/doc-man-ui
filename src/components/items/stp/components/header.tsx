import { TableHead, TableRow, TableCell } from '@mui/material'

export const STPHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>检测条件</TableCell>
        <TableCell>检测结果</TableCell>
      </TableRow>
    </TableHead>
  )
}
