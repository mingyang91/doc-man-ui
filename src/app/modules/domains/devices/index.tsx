import { useMemo, MouseEvent, ChangeEventHandler } from 'react'
import { Link as RouteLink, generatePath } from 'react-router-dom'
import { Button, Stack, Chip, Link, TablePagination } from '@mui/material'
import {
  RiDeleteBinLine,
  RiEditLine,
  RiUploadLine,
  RiCheckFill,
  RiInformationFill,
} from 'react-icons/ri'

import { DataTable, ColumnProps } from '@/components/data-table'
import { fDate } from '@/utils/format-time'
import { PaginationConfig } from '@/models/common'
import { DevicesQuery, HeaderDeviceFieldsFragment } from '@/generated/graphql'

import { ROUTES } from '@@/routes'

export interface DevicesListProps extends PaginationConfig {
  isLoading?: boolean
  dataSource?: DevicesQuery['device']
  onPageSizeChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  onPageChange: (
    event: MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => void
  onRemove?: (uuid: string) => void
  onUpload?: (uuid: string) => void
  onEdit?: (uuid: string) => void
}

export const DevicesList = ({
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
  const columns: ColumnProps<HeaderDeviceFieldsFragment>[] = useMemo(
    () => [
      {
        field: 'name',
        header: '设备名',
        width: 150,
        minWidth: 150,
        flexGrow: 1,
        fixed: 'left',
        render: ({ name, id }) => {
          const path = generatePath('/' + ROUTES.deviceDetail, {
            id,
          })

          return (
            <Link component={RouteLink} to={path}>
              {name}
            </Link>
          )
        },
      },
      {
        field: 'requester',
        header: '委托单位',
        width: 200,
        minWidth: 150,
        flexGrow: 1,
        fixed: 'left',
      },
      {
        field: 'createTime',
        header: '创建时间',
        width: 140,
        flexGrow: 1,
        sortable: true,
        render: rowData => fDate(rowData.createTime),
      },
      {
        field: 'updateTime',
        header: '更新时间',
        width: 140,
        flexGrow: 1,
        sortable: true,
        render: rowData => fDate(rowData.updateTime),
      },
      {
        field: 'reportNo',
        header: '报告阶段',
        align: 'center',
        width: 140,
        flexGrow: 2,
        render: ({ reportNo, reportId }) => {
          return reportId ? (
            reportNo ? (
              <>
                <Chip
                  variant="filled"
                  color="success"
                  avatar={<RiCheckFill />}
                  label="报告已编号"
                />
                <Link href={`/report/${reportId}/download`}>下载报告</Link>
              </>
            ) : (
              <>
                <Chip
                  variant="filled"
                  color="success"
                  avatar={<RiInformationFill />}
                  label="报告未编号"
                />
                <Link href={`/report/${reportId}/download`}>下载报告</Link>
              </>
            )
          ) : (
            <Chip variant="filled" color="info" label="报告未生成" />
          )
        },
      },
      {
        field: 'uuid',
        header: '操作',
        flexGrow: 2,
        width: 380,
        minWidth: 380,
        fixed: 'right',
        render: ({ rowData }) => {
          return (
            <Stack spacing={2} direction="row">
              <Button
                size="small"
                variant="outlined"
                color="error"
                startIcon={<RiDeleteBinLine />}
                onClick={() => onRemove?.(rowData.id)}
              >
                删除
              </Button>
              <Button
                size="small"
                variant="outlined"
                startIcon={<RiEditLine />}
                onClick={() => onEdit?.(rowData.id)}
              >
                编辑
              </Button>
              <Button
                size="small"
                variant="outlined"
                startIcon={<RiUploadLine />}
                onClick={() => onUpload?.(rowData.id)}
              >
                上传附件
              </Button>
            </Stack>
          )
        },
      },
    ],
    [onEdit, onRemove, onUpload]
  )

  return (
    <>
      <DataTable
        columns={columns}
        dataSource={dataSource}
        loading={isLoading}
      />
      <TablePagination
        component="div"
        showFirstButton
        showLastButton
        labelRowsPerPage="每页显示"
        rowsPerPageOptions={[
          { label: '10条', value: 10 },
          { label: '20条', value: 20 },
          { label: '50条', value: 50 },
        ]}
        labelDisplayedRows={({ from, to, count }) =>
          `共 ${count} 条，当前第 ${from} 至 ${to} 条数据。`
        }
        count={dataSource.length}
        page={page}
        onPageChange={onPageChange}
        rowsPerPage={pageSize}
        onRowsPerPageChange={onPageSizeChange}
      />
    </>
  )
}
