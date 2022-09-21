import {
  Box,
  Button,
  Link,
  Stack,
  TablePagination,
  Typography,
} from '@mui/material'
import { useCreation } from 'ahooks'
import { ChangeEventHandler, MouseEvent, useState } from 'react'
import {
  RiDeleteBinLine,
  RiEditLine,
  RiFileAddLine,
  RiUploadLine,
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
import { InspectionReportListQuery } from 'm/inspection-report/index.generated'
import { AddressField, InspectionType } from 'm/presets'

type InspectionReport = Required<ArrayItem<InspectionReportListQuery['list']>>

type InspectionReportRowFields = Omit<
  InspectionReport,
  'items' | 'id' | 'equipmentName' | 'serialNumber'
>

const columnMaps: {
  [s in keyof InspectionReportRowFields]: ColumnItemProps<InspectionReport>
} = {
  equipmentRequester: {
    field: 'equipmentRequester',
    title: '委托单位',
    width: 270,
    minWidth: 240,
    fixed: 'left',
    render: ({ equipmentRequester }) => (
      <Typography variant="body1">{equipmentRequester}</Typography>
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
      const path = generatePath(ROUTES.inspectionDetail, {
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
  inspectionAddress: {
    field: 'inspectionAddress',
    title: '检测地址',
    width: 150,
    minWidth: 100,
    flexGrow: 2,
    render: ({ inspectionAddress }) => {
      const {
        provinceName = '',
        cityName = '',
        countyName = '',
        townName = '',
        detail = '',
      } = inspectionAddress as AddressField
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
  inspectionBasis: {
    field: 'inspectionBasis',
    title: '检测依据',
    width: 100,
    minWidth: 100,
    flexGrow: 1,
    render: ({ inspectionBasis }) => {
      return <Typography variant="body1">{inspectionBasis}</Typography>
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
  inspectionItem: {
    field: 'inspectionItem',
    title: '检测项目',
    width: 80,
    minWidth: 80,
    flexGrow: 1,
    render: ({ inspectionItem }) => {
      const { type, text = '' } = inspectionItem as InspectionType
      return (
        <Typography variant="body1">
          {type}
          {text ? `(${text})` : ''}
        </Typography>
      )
    },
  },
  createAt: {
    field: 'createAt',
    title: '创建时间',
    width: 120,
    minWidth: 120,
    render: ({ createAt }) => (createAt ? fDateTime(createAt) : ' - '),
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
    width: 60,
    minWidth: 60,
    render: ({ creator }) => (creator ? creator.displayname : ' - '),
  },
}

const selectableColumns = Object.values(columnMaps)
  .filter(item => !item.fixed && item.field !== 'inspectionAddress')
  .map(item => ({
    label: item.title,
    value: item.field as string,
  }))

export interface InspectionReportListProps extends PaginationConfig {
  isLoading?: boolean
  dataSource?: InspectionReportListQuery['list']
  onPageSizeChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  onPageChange: (
    event: MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => void
  onRemove?: (uuid: string) => void
  onUpload?: (uuid: string) => void
  onEdit?: (uuid: string) => void
}

export const InspectionReportList = ({
  isLoading = false,
  dataSource = [],
  pageSize = 10,
  page = 0,
  onPageSizeChange,
  onPageChange,
  onRemove,
  onEdit,
  onUpload,
}: InspectionReportListProps) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([])

  const columns: ColumnProps<InspectionReport>[] = useCreation(() => {
    const left: ColumnProps<InspectionReport>[] = [
      columnMaps.equipmentRequester,
      columnMaps.equipmentCode,
      columnMaps.inspectionAddress,
    ]
    const right: ColumnProps<InspectionReport>[] = [
      {
        field: 'uuid',
        flexGrow: 2,
        width: 380,
        minWidth: 380,
        fixed: 'right',
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
              <Button
                size="small"
                variant="outlined"
                startIcon={<RiUploadLine />}
                onClick={() => onUpload?.(id)}
              >
                上传附件
              </Button>
            </Stack>
          )
        },
      },
    ]

    const selects = selectedRowKeys.map(
      item => columnMaps[item as keyof InspectionReportRowFields]
    )

    return [...left, ...selects, ...right]
  }, [onEdit, onRemove, onUpload, selectedRowKeys])

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
            to={ROUTES.inspectionCreate}
            component={NavLink}
            startIcon={<RiFileAddLine />}
          >
            创建
          </Button>
        </Stack>
        <Box position="relative">
          <DataColumnSelector
            columns={selectableColumns}
            checked={selectedRowKeys}
            onChange={setSelectedRowKeys}
          />
        </Box>
      </Stack>
      <DataTable
        columns={columns}
        dataSource={dataSource as InspectionReport[]}
        loading={isLoading}
        rowHeight={72}
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
