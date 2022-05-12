/* eslint-disable @typescript-eslint/ban-types */
import { BoxProps, Typography } from '@mui/material'
import {
  DataGrid,
  GridColDef,
  GridCallbackDetails,
  zhCN,
} from '@mui/x-data-grid'

import { DesignedPagination } from './components/table-pagination'
import { TableWrapper } from './components/table-wrapper'
import { TableEmpty } from './components/table-empty'

type OnPageChange = (pageSize: number, details: GridCallbackDetails) => void

export interface DataTableProps<D extends {} = {}> extends BoxProps {
  title?: string
  isLoading?: boolean
  showPagination?: boolean
  columns: GridColDef[]
  dataSource?: D[]
  page?: number
  pageSize?: number
  autoHeight?: boolean
  onPageSizeChange?: (pageSize: number, details: GridCallbackDetails) => void
  onPageChange?: OnPageChange
}

export const DataTable = <D extends {} = {}>({
  title,
  isLoading = false,
  showPagination = true,
  dataSource = [],
  columns,
  page,
  pageSize,
  autoHeight = true,
  onPageSizeChange,
  onPageChange,
  ...restProps
}: DataTableProps<D>) => {
  return (
    <TableWrapper {...restProps}>
      {title && <Typography component={'h3'}>{title}</Typography>}
      <DataGrid
        autoHeight={autoHeight}
        localeText={zhCN.components.MuiDataGrid.defaultProps.localeText}
        loading={isLoading}
        rowsPerPageOptions={[10, 20, 50]}
        columns={columns}
        rows={dataSource}
        rowCount={dataSource.length}
        pagination={showPagination || undefined}
        pageSize={pageSize}
        page={page}
        onPageChange={(page, _) => onPageChange?.(page + 1, _)}
        onPageSizeChange={onPageSizeChange}
        components={{
          Pagination: DesignedPagination,
          NoRowsOverlay: TableEmpty,
        }}
      />
    </TableWrapper>
  )
}
