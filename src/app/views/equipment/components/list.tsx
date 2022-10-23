import {
  Box,
  Button,
  IconButton,
  Link,
  Stack,
  TablePagination,
  Tooltip,
  Typography,
} from '@mui/material'
import { useCreation, useMemoizedFn } from 'ahooks'
import { ChangeEventHandler, MouseEvent, useState } from 'react'
import { MdAddCircle, MdDelete, MdEdit } from 'react-icons/md'
import { generatePath, Link as RouteLink } from 'react-router-dom'

import { ROUTES } from '@/routes'

import {
  ColumnItemProps,
  ColumnProps,
  DataColumnSelector,
  DataTable,
} from 'd/components/data-table'

import { fDateTime } from 'u/format-time'

import { PaginationConfig } from 'm/common'
import { EquipmentListQuery } from 'm/equipment/index.generated'
import { AddressField } from 'm/presets'

import { useConfirm } from '@@/confirm'
import { formatLocation } from '@@/location-selector/utils'

type EquipmentData = ArrayItem<EquipmentListQuery['list']>

type EquipmentRawFields = Required<
  Omit<
    EquipmentData,
    'createrId' | 'equipmentName' | 'clientId' | 'equipmentTypeId'
  >
>

const columnMaps: {
  [s in keyof EquipmentRawFields]: ColumnItemProps<EquipmentData>
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
    width: 180,
    minWidth: 180,
    fixed: 'left',
    render: ({ client }) => (
      <Typography variant="body1" whiteSpace="pre-line">
        {client?.name}
      </Typography>
    ),
  },
  equipmentCode: {
    field: 'equipmentCode',
    title: '设备信息',
    width: 220,
    minWidth: 200,
    fixed: 'left',
    render: ({ equipmentCode, equipmentName, id }) => {
      const path = generatePath(ROUTES.equipmentDetail, {
        id,
      })

      return (
        <>
          <Typography variant="body1" component="span">
            <Link component={RouteLink} to={path}>
              {equipmentCode || '无编号'}
            </Link>
          </Typography>{' '}
          -{' '}
          <Typography variant="body1" component="span">
            {equipmentName || '未命名设备'}
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
      return (
        <Typography variant="body1">
          {formatLocation(address as AddressField, true)}
        </Typography>
      )
    },
  },
  equipmentType: {
    field: 'equipmentType',
    title: '设备类型',
    width: 100,
    minWidth: 100,
    flexGrow: 1,
    render: ({ equipmentType }) =>
      equipmentType ? (
        <Link
          component={RouteLink}
          to={generatePath(ROUTES.equipmentTypeDetail, {
            id: equipmentType.id,
          })}
        >
          {equipmentType.displayName || equipmentType.name}
        </Link>
      ) : (
        ' - '
      ),
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
  createdAt: {
    field: 'createdAt',
    title: '创建时间',
    width: 120,
    minWidth: 120,
    render: ({ createdAt }) => (createdAt ? fDateTime(createdAt) : ' - '),
  },
  updatedAt: {
    field: 'updatedAt',
    title: '更新时间',
    width: 120,
    minWidth: 120,
    render: ({ updatedAt }) => (updatedAt ? fDateTime(updatedAt) : ' - '),
  },
  creator: {
    field: 'creator',
    title: '创建人',
    width: 80,
    minWidth: 80,
    render: ({ creator }) => (
      <Typography variant="body1">{creator?.displayName || ' - '}</Typography>
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

export interface EquipmentListProps extends PaginationConfig {
  isLoading?: boolean
  dataSource?: EquipmentData[]
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

export const EquipmentList = ({
  isLoading = false,
  dataSource = [],
  pageSize = 10,
  page = 0,
  onPageSizeChange,
  onPageChange,
  onRemove,
  onBulkRemove,
  onEdit,
}: EquipmentListProps) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([])

  const [checkedItems, setCheckedItems] = useState(new Set<string | number>())

  const isBulkActionEnabled = checkedItems.size > 0

  const { confirm } = useConfirm()

  const handleRemove = useMemoizedFn<(uuid: string, name?: string) => void>(
    async (uuid, name) => {
      confirm({
        title: `确认删除 设备 ${name || '未命名'} 吗？`,
        content: '此操作不可逆，可能会影响设备列表数据，请谨慎!',
      }).then(confirmed => {
        confirmed && onRemove?.(uuid)
      })
    }
  )

  const columns: ColumnProps<EquipmentData>[] = useCreation(() => {
    const left: ColumnProps<EquipmentData>[] = [
      columnMaps.id,
      columnMaps.client,
      columnMaps.equipmentCode,
      columnMaps.address,
    ]
    const right: ColumnProps<EquipmentData>[] = [
      {
        field: 'uuid',
        flexGrow: 1,
        width: 120,
        minWidth: 180,
        fixed: 'right',
        title: '操作',
        render: ({ id, equipmentName }) => {
          return (
            <Stack spacing={2} direction="row">
              <Tooltip title="删除">
                <IconButton
                  size="small"
                  color="error"
                  onClick={() => handleRemove(id, equipmentName || '')}
                >
                  <MdDelete />
                </IconButton>
              </Tooltip>
              <Tooltip title="编辑">
                <IconButton
                  size="small"
                  color="primary"
                  onClick={() => onEdit?.(id)}
                >
                  <MdEdit />
                </IconButton>
              </Tooltip>
            </Stack>
          )
        },
      },
    ]

    const selects = selectedRowKeys.map(
      item => columnMaps[item as keyof EquipmentRawFields]
    )

    return [...left, ...selects, ...right]
  }, [onEdit, handleRemove, selectedRowKeys])

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
            to={ROUTES.equipmentCreate}
            component={RouteLink}
            startIcon={<MdAddCircle />}
          >
            创建
          </Button>
          {isBulkActionEnabled && (
            <Button
              variant="contained"
              color="error"
              startIcon={<MdDelete />}
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
      <DataTable<EquipmentData>
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
