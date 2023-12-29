import { Link, Typography } from '@mui/material'
import { useMemo, MouseEvent } from 'react'
import { generatePath, Link as RouteLink } from 'react-router-dom'
import { useMemoizedFn } from 'ahooks'
import { RowDataType } from 'rsuite-table'

import { ROUTES } from '@/routes'

import { ColumnItemProps, DataTable } from 'd/components/data-table'

import { AddressField } from 'm/presets'

import { FindEquipmentResult, FindEquipmentRow } from '../utils'

import { formatLocation } from '@@/location-selector/utils'
import i18n from 'strings/i18n'


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
        title: i18n.t('委托单位'),
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
        title: i18n.t('设备详情'),
        minWidth: 200,
        flexGrow: 2,
        render: ({ equipmentCode, equipmentName, id }) => {
          const path = generatePath(ROUTES.equipmentDetail, {
            id,
          })

          return (
            <>
              <Typography variant="body1" component="div">
                <Link component={RouteLink} to={path}>
                  {equipmentCode || i18n.t('无编号')}
                </Link>
              </Typography>{' '}
              <Typography variant="body1" component="div">
                {equipmentName || i18n.t('未命名设备')}
              </Typography>
            </>
          )
        },
      },
      {
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
      {
        field: 'equipmentManufacturer',
        title: i18n.t('制造厂商'),
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
        title: i18n.t('设备型号'),
        width: 80,
        minWidth: 80,
        flexGrow: 1,
        render: ({ equipmentModel }) => {
          return <Typography variant="body1">{equipmentModel}</Typography>
        },
      },
      // {
      //   field: 'uuid',
      //   flexGrow: 1,
      //   width: 100,
      //   fixed: 'right',
      //   title: i18n.t('选择'),
      //   render: row => {
      //     return (
      //       <Stack spacing={2} direction="row">
      //         <Tooltip title={i18n.t('选择')}>
      //           <IconButton
      //             size="small"
      //             color="primary"
      //             onClick={() => onSelect?.(row)}
      //           >
      //             <MdCheckCircle />
      //           </IconButton>
      //         </Tooltip>
      //       </Stack>
      //     )
      //   },
      // },
    ],
    []
  )

  const onRowClick = useMemoizedFn(
    (rowData: RowDataType, event: MouseEvent) => {
      onSelect?.(rowData as FindEquipmentRow)
    }
  )

  return (
    <DataTable<FindEquipmentRow>
      loading={isLoading}
      cellBordered={false}
      rowClassName="selectable"
      dataSource={data || []}
      columns={columns}
      onRowClick={onRowClick}
    />
  )
}
