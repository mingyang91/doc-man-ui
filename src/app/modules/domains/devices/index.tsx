import {
  GridColDef,
  GridValueFormatterParams,
  GridValueGetterParams,
  GridCallbackDetails,
} from '@mui/x-data-grid'
import { Button, Stack } from '@mui/material'
import { RiDeleteBinLine, RiEditLine, RiUploadLine } from 'react-icons/ri'

import { fDate } from '@/utils/format-time'
import { DataTable } from '@/components/table'
import { PaginationConfig } from '@/models/common'
import { DevicesQuery } from '@/generated/graphql'

export interface DevicesListProps extends PaginationConfig {
  title?: string
  isLoading?: boolean
  dataSource?: DevicesQuery['device']
  onPageSizeChange?: (pageSize: number, details: GridCallbackDetails) => void
  onPageChange?: (page: number, details: GridCallbackDetails) => void
  onRemove?: (uuid: string) => void
  onUpload?: (uuid: string) => void
  onEdit?: (uuid: string) => void
}

export const DevicesList = ({
  title,
  isLoading = false,
  dataSource = [],
  pageSize = 10,
  page = 0,
  onPageSizeChange,
  onPageChange,
  onRemove,
  onEdit,
  onUpload,
}: DevicesListProps) => {
  const columns: GridColDef[] = [
    {
      field: 'reportNo',
      headerName: '报告编号',
      minWidth: 150,
      flex: 2,
    },
    {
      field: 'name',
      headerName: '设备名',
      minWidth: 150,
      flex: 2,
    },
    {
      field: 'requester',
      headerName: '委托单位',
      minWidth: 200,
      flex: 3,
    },
    {
      field: 'createTime',
      headerName: '创建时间',
      minWidth: 120,
      flex: 2,
      sortable: true,
      valueFormatter: (params: GridValueFormatterParams<string>) => {
        return params.value ? fDate(params.value) : ' - '
      },
    },
    {
      field: 'uuid',
      headerName: '操作',
      flex: 3,
      renderCell: (params: GridValueGetterParams<string>) => {
        return (
          <Stack spacing={2} direction="row">
            <Button
              size="small"
              variant="outlined"
              color="error"
              startIcon={<RiDeleteBinLine />}
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              onClick={() => onRemove?.(params.value!)}
            >
              删除
            </Button>
            <Button
              size="small"
              variant="outlined"
              startIcon={<RiEditLine />}
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              onClick={() => onEdit?.(params.value!)}
            >
              编辑
            </Button>
            <Button
              size="small"
              variant="outlined"
              startIcon={<RiUploadLine />}
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              onClick={() => onUpload?.(params.value!)}
            >
              上传附件
            </Button>
          </Stack>
        )
      },
    },
  ]

  return (
    <DataTable
      title={title}
      isLoading={isLoading}
      columns={columns}
      dataSource={dataSource}
      pageSize={pageSize}
      page={page}
      onPageChange={onPageChange}
      onPageSizeChange={onPageSizeChange}
    />
  )
}
