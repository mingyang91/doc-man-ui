import {
  Button,
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material'
import { useCreation, useMemoizedFn } from 'ahooks'
import { MdAddCircle, MdDelete, MdViewList } from 'react-icons/md'
import {
  generatePath,
  Link as RouteLink,
  useNavigate,
  Link as RouterLink,
} from 'react-router-dom'

import { ROUTES } from '@/routes'

import {
  ColumnItemProps,
  ColumnProps,
  DataTable,
} from 'd/components/data-table'

import { EquipmentTypesListQuery } from 'm/equipment-type/index.generated'

import { useConfirm } from '@@/confirm'

export type EquipmentTypesListData = ArrayItem<EquipmentTypesListQuery['data']>

export type EquipmentTypesListRawFields = Required<
  Omit<EquipmentTypesListData, 'id'>
>

const columnMaps: {
  [s in keyof EquipmentTypesListRawFields]: ColumnItemProps<EquipmentTypesListData>
} = {
  displayName: {
    field: 'displayName',
    title: '设备类型',
    width: 180,
    minWidth: 180,
    fixed: 'left',
    render: ({ displayName }) => (
      <Typography variant="h6">{displayName}</Typography>
    ),
  },
  name: {
    field: 'name',
    title: '类型标识',
    width: 120,
    minWidth: 120,
    flexGrow: 1,
    render: ({ name }) => <Typography variant="body1">{name}</Typography>,
  },
  comment: {
    field: 'comment',
    title: '备注',
    width: 120,
    minWidth: 120,
    flexGrow: 1,
  },
  inspectionItems: {
    field: 'inspectionItems',
    title: '检测项',
    width: 70,
    minWidth: 70,
    render: ({ id, inspectionItems }) => (
      <Link
        component={RouteLink}
        to={generatePath(ROUTES.equipmentTypeDetail, { id })}
      >
        {inspectionItems?.length || 0} 条
      </Link>
    ),
  },
}

export interface DeviceTypeListProps {
  isLoading?: boolean
  dataSource?: EquipmentTypesListData[]
  onRemove?: (uuid: string) => void
}

export const DeviceTypeList = ({
  isLoading = false,
  dataSource = [],
  onRemove,
}: DeviceTypeListProps) => {
  const { confirm } = useConfirm()

  const navigate = useNavigate()

  const handleRemove = useMemoizedFn<(uuid: string, name?: string) => void>(
    async (uuid, name) => {
      confirm({
        title: `确认删除 设备类型 ${name || '未命名'} 吗？`,
        content: '此操作不可逆，可能会影响设备列表数据，请谨慎!',
      }).then(confirmed => {
        confirmed && onRemove?.(uuid)
      })
    }
  )

  const toDetail = useMemoizedFn((id: string) => {
    navigate(generatePath(ROUTES.equipmentTypeDetail, { id }))
  })

  const columns: ColumnProps<EquipmentTypesListData>[] = useCreation(() => {
    const left: ColumnProps<EquipmentTypesListData>[] = [
      columnMaps.displayName,
      columnMaps.name,
      columnMaps.comment,
    ]
    const right: ColumnProps<EquipmentTypesListData>[] = [
      {
        field: 'uuid',
        width: 120,
        minWidth: 120,
        fixed: 'right',
        title: '操作',
        render: ({ id, displayName, inspectionItems }) => {
          return (
            <Stack spacing={2} direction="row">
              {inspectionItems?.length ? null : (
                <Tooltip title="删除">
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => handleRemove(id, displayName || '')}
                  >
                    <MdDelete />
                  </IconButton>
                </Tooltip>
              )}
              <Tooltip title="查看检测项">
                <IconButton
                  size="small"
                  color="primary"
                  onClick={() => toDetail(id)}
                >
                  <MdViewList />
                </IconButton>
              </Tooltip>
            </Stack>
          )
        },
      },
    ]

    return [...left, ...right]
  }, [])

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
            startIcon={<MdAddCircle />}
            component={RouterLink}
            to={ROUTES.equipmentTypeCreate}
          >
            创建新设备类型
          </Button>
        </Stack>
      </Stack>
      <DataTable<EquipmentTypesListData>
        columns={columns}
        dataSource={dataSource}
        loading={isLoading}
        rowHeight={72}
      />
    </>
  )
}
