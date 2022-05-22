import { memo } from 'react'
import { styled, TableCell, TableHead, TableRow } from '@mui/material'

const Th = memo(
  styled(TableCell)({
    position: 'relative',
    zIndex: 6,
  })
)

export const FormTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <Th rowSpan={2} align="center">
          检测项目
        </Th>
        <Th rowSpan={2} align="center">
          检测条件
        </Th>
        <Th rowSpan={2} align="center">
          检测结果
        </Th>
        <Th colSpan={2} align="center">
          检测指标要求
        </Th>
        <Th rowSpan={2} align="center">
          结论
        </Th>
      </TableRow>
      <TableRow>
        <Th align="center">验收检测</Th>
        <Th align="center">状态检测</Th>
      </TableRow>
    </TableHead>
  )
}
