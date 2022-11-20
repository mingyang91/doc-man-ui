import { TableHead, TableRow, TableCell } from '@mui/material'

export const RORItemHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center"> - </TableCell>
        <TableCell>检测条件</TableCell>
        <TableCell>检测结果</TableCell>
      </TableRow>
    </TableHead>
  )
}
