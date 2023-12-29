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

import { ClientsDetailListQuery } from 'm/clients/index.generated'
import { PaginationConfig } from 'm/common'
import { AddressField } from 'm/presets'

import { useConfirm } from '@@/confirm'
import { formatLocation } from '@@/location-selector/utils'
import i18n from 'strings/i18n'


export interface ConsumerData
  extends ArrayItem<ClientsDetailListQuery['list']> {
  address: AddressField
}

type ConsumerRawFields = Required<ConsumerData>

const columnMaps: {
  [s in keyof ConsumerRawFields]: ColumnItemProps<ConsumerData>
} = {
  id: {
    field: 'id',
    title: 'ID',
    width: 70,
    minWidth: 70,
    specificCellType: 'CheckCell',
    fixed: 'left',
  },
  name: {
    field: 'name',
    title: i18n.t('委托单位'),
    width: 200,
    minWidth: 200,
    fixed: 'left',
    render: ({ id, name }) => {
      const path = generatePath(ROUTES.consumerDetail, {
        id,
      })

      return (
        <Typography variant="body1">
          <Link component={RouteLink} to={path}>
            {name}
          </Link>
        </Typography>
      )
    },
  },
  address: {
    field: 'address',
    title: i18n.t('地址'),
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
  createdAt: {
    field: 'createdAt',
    title: i18n.t('创建时间'),
    width: 120,
    minWidth: 120,
    flexGrow: 1,
    render: ({ createdAt }) => (createdAt ? fDateTime(createdAt) : ' - '),
  },
  updatedAt: {
    field: 'updatedAt',
    title: i18n.t('更新时间'),
    width: 120,
    minWidth: 120,
    flexGrow: 1,
    render: ({ updatedAt }) => (updatedAt ? fDateTime(updatedAt) : ' - '),
  },
  comment: {
    field: 'comment',
    title: i18n.t('备注'),
    width: 120,
    minWidth: 120,
    flexGrow: 1,
    render: ({ comment }) => <Typography variant="body1">{comment}</Typography>,
  },
}

const selectableColumns = Object.values(columnMaps)
  .filter(item => !item.fixed && item.field !== 'equipmentInspectionAddress')
  .map(item => ({
    label: item.title,
    value: item.field as string,
  }))

export interface ConsumerListProps extends PaginationConfig {
  isLoading?: boolean
  dataSource?: ConsumerData[]
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

export const ConsumerList = ({
  isLoading = false,
  dataSource = [],
  total = 0,
  pageSize = 10,
  page = 0,
  onPageSizeChange,
  onPageChange,
  onRemove,
  onBulkRemove,
  onEdit,
  onUpload,
}: ConsumerListProps) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>(['address'])

  const [checkedItems, setCheckedItems] = useState(new Set<string | number>())

  const isBulkActionEnabled = checkedItems.size > 0

  const { confirm } = useConfirm()

  const handleRemove = useMemoizedFn<(uuid: string, name: string) => void>(
    async (uuid, name) => {
      confirm({
        title: `确认删除 ${name} 吗？`,
        content: '此操作不可逆，可能会影响设备列表数据，请谨慎!',
      }).then(confirmed => {
        confirmed && onRemove?.(uuid)
      })
    }
  )

  const columns: ColumnProps<ConsumerData>[] = useCreation(() => {
    const left: ColumnProps<ConsumerData>[] = [columnMaps.id, columnMaps.name]
    const right: ColumnProps<ConsumerData>[] = [
      {
        field: 'id',
        flexGrow: 1,
        width: 60,
        minWidth: 60,
        fixed: 'right',
        title: i18n.t('操作'),
        render: ({ id, name }) => {
          return (
            <Stack spacing={2} direction="row">
              <Tooltip title={i18n.t('删除')}>
                <IconButton
                  size="small"
                  color="error"
                  onClick={() => handleRemove(id, name)}
                >
                  <MdDelete />
                </IconButton>
              </Tooltip>
              <Tooltip title={i18n.t('编辑')}>
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
      item => columnMaps[item as keyof ConsumerRawFields]
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
            to={ROUTES.consumerCreate}
            component={RouteLink}
            startIcon={<MdAddCircle />}
          >
            {i18n.t('新增')}
          </Button>
          {isBulkActionEnabled && (
            <Button
              variant="contained"
              color="error"
              startIcon={<MdDelete />}
              onClick={handleBulkRemove}
            >
              {i18n.t('批量删除')}
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
      <DataTable<ConsumerData>
        columns={columns}
        dataSource={dataSource}
        loading={isLoading}
        rowHeight={72}
        checkedItems={checkedItems}
        onCheckedChange={setCheckedItems}
      />
      {!isLoading && (
        <TablePagination
          component="div"
          showFirstButton
          showLastButton
          labelRowsPerPage={i18n.t('每页显示')}
          rowsPerPageOptions={[
            { label: '10 ' + i18n.t('行'), value: 10 },
            { label: '20 ' + i18n.t('行'), value: 20 },
            { label: '50 ' + i18n.t('行'), value: 50 },
          ]}
          labelDisplayedRows={({ from, to, count }) =>
            `${i18n.t('总量')} ${count} ${i18n.t('行')}, ${i18n.t('当前范围')}: [${from} - ${to}]`
          }
          count={total}
          page={page}
          onPageChange={onPageChange}
          rowsPerPage={pageSize}
          onRowsPerPageChange={onPageSizeChange}
        />
      )}
    </>
  )
}
