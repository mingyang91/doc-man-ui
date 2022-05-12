import { TableCell, TableHead, TableRow } from '@mui/material'

export const FormDetailHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell rowSpan={2} align="center">
          检测项目
        </TableCell>
        <TableCell rowSpan={2} align="center">
          检测条件
        </TableCell>
        <TableCell rowSpan={2} align="center">
          检测结果
        </TableCell>
        <TableCell colSpan={2} align="center">
          检测指标要求
        </TableCell>
        <TableCell rowSpan={2} align="center">
          结论
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="center">验收检测</TableCell>
        <TableCell align="center">状态检测</TableCell>
      </TableRow>
    </TableHead>
  )
}
