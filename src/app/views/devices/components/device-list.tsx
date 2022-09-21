import {
  Box,
  Button,
  Link,
  Stack,
  TablePagination,
  Typography,
} from '@mui/material'
import { useCreation, useMemoizedFn } from 'ahooks'
import { ChangeEventHandler, MouseEvent, useState } from 'react'
import {
  RiDeleteBin2Fill,
  RiDeleteBinLine,
  RiEditLine,
  RiFileAddLine,
} from 'react-icons/ri'
import { generatePath, Link as RouteLink, NavLink } from 'react-router-dom'

import { ROUTES } from '@/routes'

import {
  ColumnItemProps,
  ColumnProps,
  DataColumnSelector,
  DataTable,
} from 'd/components/data-table'

import { fDateTime } from 'u/format-time'

import { PaginationConfig } from 'm/common'
import { DeviceListQuery } from 'm/device/index.generated'
import { AddressField } from 'm/presets'

type DeviceData = ArrayItem<DeviceListQuery['list']>

type DeviceRawFields = Required<
  Omit<DeviceData, 'createrId' | 'equipmentName' | 'equipmentRequester'>
>

const columnMaps: {
  [s in keyof DeviceRawFields]: ColumnItemProps<DeviceData>
} = {
  id: {
    field: 'id',
    title: 'ID',
    width: 70,
    minWidth: 70,
    specificCellType: 'CheckCell',
    fixed: 'left',
  },
  client: {
    field: 'client',
    title: '委托单位',
    width: 270,
    minWidth: 240,
    fixed: 'left',
    render: ({ client }) => (
      <Typography variant="body1">{client?.name}</Typography>
    ),
  },
  equipmentCode: {
    field: 'equipmentCode',
    title: '设备信息',
    width: 150,
    minWidth: 150,
    flexGrow: 1,
    fixed: 'left',
    render: ({ equipmentCode, equipmentName, id }) => {
      const path = generatePath(ROUTES.deviceDetail, {
        id,
      })

      return (
        <>
          <Typography variant="body1">设备名：{equipmentName}</Typography>
          <Typography variant="body1">
            编号：
            <Link component={RouteLink} to={path}>
              {equipmentCode}
            </Link>
          </Typography>
        </>
      )
    },
  },
  address: {
    field: 'address',
    title: '检测地址',
    width: 150,
    minWidth: 100,
    flexGrow: 2,
    render: ({ address }) => {
      const {
        provinceName = '',
        cityName = '',
        countyName = '',
        townName = '',
        detail = '',
      } = address as AddressField
      return (
        <Typography variant="body1">
          {provinceName}
          {cityName}
          {countyName}
          {townName}
          {detail}
        </Typography>
      )
    },
  },
  equipmentManufacturer: {
    field: 'equipmentManufacturer',
    title: '制造厂商',
    width: 80,
    minWidth: 80,
    flexGrow: 1,
    render: ({ equipmentManufacturer }) => {
      return <Typography variant="body1">{equipmentManufacturer}</Typography>
    },
  },
  equipmentModel: {
    field: 'equipmentModel',
    title: '设备型号',
    width: 80,
    minWidth: 80,
    flexGrow: 1,
    render: ({ equipmentModel }) => {
      return <Typography variant="body1">{equipmentModel}</Typography>
    },
  },
  equipmentSampleId: {
    field: 'equipmentSampleId',
    title: '样品标识',
    width: 100,
    minWidth: 100,
    flexGrow: 1,
    render: ({ equipmentSampleId }) => {
      return <Typography variant="body1">{equipmentSampleId}</Typography>
    },
  },
  inspectionInstrument: {
    field: 'inspectionInstrument',
    title: '检测仪器',
    width: 80,
    minWidth: 80,
    flexGrow: 1,
    render: ({ inspectionInstrument }) => {
      return <Typography variant="body1">{inspectionInstrument}</Typography>
    },
  },
  equipmentSite: {
    field: 'equipmentSite',
    title: '设备场所',
    width: 80,
    minWidth: 80,
    flexGrow: 1,
    render: ({ equipmentSite }) => {
      return <Typography variant="body1">{equipmentSite}</Typography>
    },
  },
  createTime: {
    field: 'createTime',
    title: '创建时间',
    width: 120,
    minWidth: 120,
    render: ({ createTime }) => (createTime ? fDateTime(createTime) : ' - '),
  },
  updateTime: {
    field: 'updateTime',
    title: '更新时间',
    width: 120,
    minWidth: 120,
    render: ({ updateTime }) => (updateTime ? fDateTime(updateTime) : ' - '),
  },
  creator: {
    field: 'creator',
    title: '创建人',
    width: 80,
    minWidth: 80,
    render: ({ creator }) => (
      <Typography variant="body1">{creator?.displayname || ' - '}</Typography>
    ),
  },
  comment: {
    field: 'comment',
    title: '备注',
    width: 200,
    minWidth: 200,
    render: ({ comment }) => <Typography variant="body1">{comment}</Typography>,
  },
}

const selectableColumns = Object.values(columnMaps)
  .filter(item => !item.fixed && item.field !== 'equipmentInspectionAddress')
  .map(item => ({
    label: item.title,
    value: item.field as string,
  }))

export interface DeviceListProps extends PaginationConfig {
  isLoading?: boolean
  dataSource?: DeviceData[]
  onPageSizeChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  onPageChange: (
    event: MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => void
  onRemove?: (uuid: string) => void
  onBulkRemove?: (uuids: string[]) => void
  onUpload?: (uuid: string) => void
  onEdit?: (uuid: string) => void
}

export const DeviceList = ({
  isLoading = false,
  dataSource = [],
  pageSize = 10,
  page = 0,
  onPageSizeChange,
  onPageChange,
  onRemove,
  onBulkRemove,
  onEdit,
  onUpload,
}: DeviceListProps) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([])

  const [checkedItems, setCheckedItems] = useState(new Set<string | number>())

  const isBulkActionEnabled = checkedItems.size > 0

  const columns: ColumnProps<DeviceData>[] = useCreation(() => {
    const left: ColumnProps<DeviceData>[] = [
      columnMaps.id,
      columnMaps.client,
      columnMaps.equipmentCode,
      columnMaps.address,
    ]
    const right: ColumnProps<DeviceData>[] = [
      {
        field: 'uuid',
        flexGrow: 2,
        width: 380,
        minWidth: 380,
        fixed: 'right',
        title: '操作',
        render: ({ id }) => {
          return (
            <Stack spacing={2} direction="row">
              <Button
                size="small"
                variant="outlined"
                color="error"
                startIcon={<RiDeleteBinLine />}
                onClick={() => onRemove?.(id)}
              >
                删除
              </Button>
              <Button
                size="small"
                variant="outlined"
                startIcon={<RiEditLine />}
                onClick={() => onEdit?.(id)}
              >
                编辑
              </Button>
            </Stack>
          )
        },
      },
    ]

    const selects = selectedRowKeys.map(
      item => columnMaps[item as keyof DeviceRawFields]
    )

    return [...left, ...selects, ...right]
  }, [onEdit, onRemove, onUpload, selectedRowKeys])

  const handleBulkRemove = useMemoizedFn(() => {
    isBulkActionEnabled && onBulkRemove?.([...(checkedItems as Set<string>)])
  })

  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Stack direction="row" flex="1" spacing={2}>
          <Button
            variant="contained"
            color="primary"
            to={ROUTES.deviceCreate}
            component={NavLink}
            startIcon={<RiFileAddLine />}
          >
            创建
          </Button>
          {isBulkActionEnabled && (
            <Button
              variant="contained"
              color="error"
              startIcon={<RiDeleteBin2Fill />}
              onClick={handleBulkRemove}
            >
              批量删除
            </Button>
          )}
        </Stack>
        <Box position="relative">
          <DataColumnSelector
            columns={selectableColumns}
            checked={selectedRowKeys}
            onChange={setSelectedRowKeys}
          />
        </Box>
      </Stack>
      <DataTable<DeviceData>
        columns={columns}
        dataSource={dataSource}
        loading={isLoading}
        rowHeight={72}
        checkedItems={checkedItems}
        onCheckedChange={setCheckedItems}
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
