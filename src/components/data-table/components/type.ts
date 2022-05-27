/* eslint-disable @typescript-eslint/ban-types */
import { SxProps } from '@mui/material'
import { CSSProperties, ReactNode } from 'react'
import {
  TableProps,
  HeaderCellProps as HeaderCellPrimitiveProps,
  CellProps as CellPrimitiveProps,
  ColumnProps as ColumnPrimitiveProps,
  ColumnGroupProps as ColumnGroupPrimitiveProps,
  RowDataType,
} from 'rsuite-table'

import { StyledTableProps } from './styled'

interface ColumnCommonProps {
  headerClassName?: string
  headerStyle?: CSSProperties
  headerSxProps?: SxProps
  header?: ReactNode
  key?: string
}

export type RenderFunction<D extends {}> = (
  rowData: RowDataType,
  rowIndex?: number
) => ReactNode

export interface ColumnItemProps<D extends {}>
  extends Omit<ColumnPrimitiveProps, 'children'>,
    ColumnCommonProps {
  columnClassName?: string
  columnStyle?: CSSProperties
  columnSxProps?: SxProps
  headerHeight?: number
  renderSortIcon?: HeaderCellPrimitiveProps['renderSortIcon']
  render?: ReactNode | RenderFunction<D>
  field?: CellPrimitiveProps['dataKey']
  rowData?: D
}

export interface ColumnGroupProps<D extends {}>
  extends Omit<ColumnGroupPrimitiveProps, 'children' | 'header'>,
    ColumnCommonProps {
  columns: ColumnItemProps<D>[]
}

export type ColumnProps<D extends {}> = ColumnItemProps<D> | ColumnGroupProps<D>

export interface DataTableProps<D extends {}>
  extends Omit<TableProps, 'data'>,
    StyledTableProps {
  columns: ColumnProps<D>[]
  dataSource: D[]
}
