import { memo } from 'react'
import { styled, TableCell, TableHead, TableRow } from '@mui/material'

import i18n from 'strings/i18n'

const Th = memo(
  styled(TableCell)({
    position: 'relative',
    zIndex: 6,
  })
)

export const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <Th rowSpan={2} align="center">
          {i18n.t('检测项目')}
        </Th>
        <Th rowSpan={2} align="center">
          {i18n.t('检测条件')}
        </Th>
        <Th rowSpan={2} align="center">
          {i18n.t('检测结果')}
        </Th>
        <Th colSpan={2} align="center">
          {i18n.t('检测指标要求')}
        </Th>
        <Th rowSpan={2} align="center">
          {i18n.t('结论')}
        </Th>
      </TableRow>
      <TableRow>
        <Th align="center">{i18n.t('验收检测')}</Th>
        <Th align="center">{i18n.t('状态检测')}</Th>
      </TableRow>
    </TableHead>
  )
}
