import {
  gridPageCountSelector,
  gridPageSelector,
  gridPageSizeSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid'
import { Box, Pagination, TablePagination } from '@mui/material'

export const DesignedPagination = () => {
  const apiRef = useGridApiContext()
  const page = useGridSelector(apiRef, gridPageSelector)
  const pageCount = useGridSelector(apiRef, gridPageCountSelector)
  const pageSize = useGridSelector(apiRef, gridPageSizeSelector)

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Pagination
        color="primary"
        shape="rounded"
        size="small"
        count={pageCount + 1}
        page={page}
        onChange={(_, value) => {
          console.log('Pagination', value)
          apiRef.current.setPage(value)
        }}
      />
      <TablePagination
        component="div"
        sx={{
          marginTop: 0,
          '.MuiTablePagination-actions': {
            display: 'none',
          },
        }}
        SelectProps={{ variant: 'filled' }}
        count={apiRef.current.getRowsCount()}
        page={page - 1}
        rowsPerPage={pageSize}
        labelRowsPerPage="每页行数"
        labelDisplayedRows={({ from, to, count }) => {
          const total = count > 0 ? `, 共 ${count}条` : ''
          if (from !== to) {
            return `第 ${from} ~ ${to} 条数据${total}`
          }
          return `第 ${from} 条数据${total}`
        }}
        rowsPerPageOptions={[10, 20, 50, 100]}
        onRowsPerPageChange={e =>
          apiRef.current.setPageSize(parseInt(e.target.value, 10))
        }
        onPageChange={(_, value) => {
          console.log('TablePagination', value + 1)
          apiRef.current.setPage(value + 1)
        }}
      />
    </Box>
  )
}
