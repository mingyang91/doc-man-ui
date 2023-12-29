import { Button, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import { useCreation, useMemoizedFn } from 'ahooks'
import { useMemo } from 'react'
import { MdAddCircle, MdDelete, MdEdit, MdViewList } from 'react-icons/md'
import { generatePath, useNavigate, Link as RouteLink } from 'react-router-dom'

import { ROUTES } from '@/routes'

import {
  ColumnItemProps,
  ColumnProps,
  DataTable,
} from 'd/components/data-table'

import { useDeleteInspectionTypesMutation } from 'm/equipment-type/index.generated'
import { UUIDV4 } from 'm/presets'
import { InspectionTypes } from 'm/types'
import { formatInspectionType } from 'm/common'

import { useConfirm } from '@@/confirm'
import i18n from 'strings/i18n'


type InspectionTypesData = Omit<
  InspectionTypes,
  | 'consts'
  | 'data'
  | 'equipment'
  | 'equipmentTypeId'
  | 'condition'
  | 'requirement'
  | 'index'
>

type DeviceRawFields = Required<Omit<InspectionTypesData, 'id'>>

const columnMaps: {
  [s in keyof DeviceRawFields]: ColumnItemProps<InspectionTypesData>
} = {
  name: {
    field: 'name',
    title: i18n.t('检测项标识'),
    flexGrow: 1,
    minWidth: 120,
    render: ({ name }) => <Typography variant="body1">{name}</Typography>,
  },
  displayName: {
    field: 'displayName',
    title: i18n.t('检测项名称'),
    flexGrow: 1,
    minWidth: 120,
    render: ({ displayName }) => (
      <Typography variant="body1">{displayName}</Typography>
    ),
  },
  type: {
    field: 'type',
    title: i18n.t('检测类型'),
    width: 90,
    render: ({ type }) => (
      <Typography variant="body1">{formatInspectionType(type)}</Typography>
    ),
  },
  formula: {
    field: 'formula',
    title: i18n.t('计算公式'),
    width: 120,
    minWidth: 120,
    render: ({ formula }) => <Typography variant="body1">{formula}</Typography>,
  },
  comment: {
    field: 'comment',
    title: i18n.t('备注'),
    width: 120,
    minWidth: 120,
    render: ({ comment }) => <Typography variant="body1">{comment}</Typography>,
  },
}

export interface InspectionTypeListProps {
  id: UUIDV4
  refetchHandler?: () => void
  isLoading?: boolean
  dataSource?: InspectionTypesData[]
}

/**
 * 设备类型中的检测项目列表
 */
export const InspectionTypeList = ({
  id,
  refetchHandler,
  isLoading: isDataLoading,
  dataSource,
}: InspectionTypeListProps) => {
  const navigate = useNavigate()

  const { confirm } = useConfirm()

  const { mutate: deleteInspectionById, isLoading: isDeleteLoading } =
    useDeleteInspectionTypesMutation({
      onSuccess: () => {
        refetchHandler?.()
      },
    })

  const handleRemove = useMemoizedFn<(uuid: string, name?: string) => void>(
    async (uuid, name) => {
      const confirmed = await confirm({
        title: `确认删除 设备 ${name || i18n.t('未命名')} 吗？`,
        content: '此操作不可逆，可能会影响设备列表数据，请谨慎!',
      })

      if (confirmed) {
        deleteInspectionById({ id: uuid })
      }
    }
  )

  const toEdit = useMemoizedFn((itemId: UUIDV4) => {
    navigate(generatePath(ROUTES.equipmentInspectionTypeEdit, { id, itemId }))
  })

  const toDetail = useMemoizedFn((itemId: UUIDV4) => {
    navigate(generatePath(ROUTES.equipmentInspectionTypeDetail, { id, itemId }))
  })

  const columns: ColumnProps<InspectionTypesData>[] = useCreation(() => {
    const left: ColumnProps<InspectionTypesData>[] = [
      columnMaps.name,
      columnMaps.displayName,
      columnMaps.formula,
      columnMaps.comment,
    ]
    const right: ColumnProps<InspectionTypesData>[] = [
      {
        field: 'uuid',
        flexGrow: 1,
        width: 140,
        minWidth: 140,
        title: i18n.t('操作'),
        render: ({ id, displayName }) => {
          return (
            <Stack spacing={2} direction="row">
              <Tooltip title={i18n.t('删除')}>
                <IconButton
                  size="small"
                  color="error"
                  onClick={() => handleRemove(id, displayName || '')}
                >
                  <MdDelete />
                </IconButton>
              </Tooltip>
              <Tooltip title={i18n.t('编辑')}>
                <IconButton
                  size="small"
                  color="primary"
                  onClick={() => toEdit?.(id)}
                >
                  <MdEdit />
                </IconButton>
              </Tooltip>
              <Tooltip title={i18n.t('详情')}>
                <IconButton
                  size="small"
                  color="primary"
                  onClick={() => toDetail?.(id)}
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
  }, [toEdit, handleRemove])

  const isLoading = useMemo(
    () => isDataLoading || isDeleteLoading,
    [isDataLoading, isDeleteLoading]
  )

  const createPath = useMemo(
    () => generatePath(ROUTES.equipmentInspectionTypeCreate, { id }),
    [id]
  )

  return (
    <>
      <Typography variant="h6">{i18n.t('可用检测项目')}</Typography>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          marginTop: 4,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Stack direction="row" flex="1" spacing={2}>
          <Button
            variant="contained"
            color="primary"
            to={createPath}
            component={RouteLink}
            startIcon={<MdAddCircle />}
          >
            {i18n.t('新增')}
          </Button>
        </Stack>
      </Stack>
      <DataTable<InspectionTypesData>
        columns={columns}
        dataSource={dataSource || []}
        loading={isLoading}
        rowHeight={72}
      />
    </>
  )
}
