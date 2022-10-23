import { IconButton, Link, Stack, Tooltip, Typography } from '@mui/material'
import { useMemo } from 'react'
import { MdCheckCircle } from 'react-icons/md'
import { generatePath, Link as RouteLink } from 'react-router-dom'

import { ROUTES } from '@/routes'

import { ColumnItemProps, DataTable } from 'd/components/data-table'

import { AddressField } from 'm/presets'

import { FindEquipmentResult, FindEquipmentRow } from '../utils'

import { formatLocation } from '@@/location-selector/utils'

interface SearchResultProps {
  data?: FindEquipmentResult
  isLoading?: boolean
  onSelect?: (value: FindEquipmentRow) => void
}

export const SearchResult = ({
  isLoading,
  data,
  onSelect,
}: SearchResultProps) => {
  const columns = useMemo<ColumnItemProps<FindEquipmentRow>[]>(
    () => [
      {
        field: 'client',
        title: '委托单位',
        width: 180,
        minWidth: 180,
        render: ({ client }) => (
          <Typography variant="body1" whiteSpace="pre-line">
            {client?.name}
          </Typography>
        ),
      },
      {
        field: 'equipmentCode',
        title: '设备信息',
        width: 220,
        minWidth: 200,
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
      {
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
      {
        field: 'equipmentManufacturer',
        title: '制造厂商',
        width: 80,
        minWidth: 80,
        flexGrow: 1,
        render: ({ equipmentManufacturer }) => {
          return (
            <Typography variant="body1">{equipmentManufacturer}</Typography>
          )
        },
      },
      {
        field: 'equipmentModel',
        title: '设备型号',
        width: 80,
        minWidth: 80,
        flexGrow: 1,
        render: ({ equipmentModel }) => {
          return <Typography variant="body1">{equipmentModel}</Typography>
        },
      },
      {
        field: 'uuid',
        flexGrow: 1,
        width: 120,
        minWidth: 180,
        fixed: 'right',
        title: '操作',
        render: row => {
          return (
            <Stack spacing={2} direction="row">
              <Tooltip title="选择">
                <IconButton
                  size="small"
                  color="primary"
                  onClick={() => onSelect?.(row)}
                >
                  <MdCheckCircle />
                </IconButton>
              </Tooltip>
            </Stack>
          )
        },
      },
    ],
    [onSelect]
  )

  return (
    <DataTable<FindEquipmentRow>
      loading={isLoading}
      dataSource={data || []}
      columns={columns}
    />
  )
}
