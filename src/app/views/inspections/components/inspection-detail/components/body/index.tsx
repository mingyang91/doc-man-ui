import { useMemo } from 'react'
import { Table, TableBody, TableContainer } from '@mui/material'

import { useInspectionReportData } from '../../context'
import { TableHeader } from './table-header'
import { InspectionItemRow } from './table-row'

import { DetailCard } from '@@/detail-card'

export const InspectionDetailBody = () => {
  const data = useInspectionReportData()

  const items = useMemo(() => data?.items || [], [data?.items])

  return (
    <DetailCard sx={{ marginBlockStart: 3 }}>
      <TableContainer>
        <Table className="border" stickyHeader aria-label="检测结果">
          <colgroup>
            <col width="20%" />
            <col width="10%" />
            <col width="10%" />
            <col width="25%" />
            <col width="25%" />
            <col width="10%" />
          </colgroup>
          <TableHeader />
          <TableBody>
            {items.map((item, index) => (
              <InspectionItemRow key={item.name} value={item} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DetailCard>
  )
}
