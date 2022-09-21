/* eslint-disable @typescript-eslint/ban-types */
import { SxProps } from '@mui/material'
import { CSSProperties, ReactNode } from 'react'
import {
  CellProps as CellPrimitiveProps,
  ColumnGroupProps as ColumnGroupPrimitiveProps,
  ColumnProps as ColumnPrimitiveProps,
  HeaderCellProps as HeaderCellPrimitiveProps,
  TableProps,
} from 'rsuite-table'

import { StyledTableProps } from './styled'

interface ColumnCommonProps {
  headerClassName?: string
  headerStyle?: CSSProperties
  headerSxProps?: SxProps
  headerRender?: HeaderRenderFunction
  title?: string
  key?: string
}

export type RenderFunction<D extends {}> = (
  rowData: D,
  rowIndex?: number
) => ReactNode

export type HeaderRenderFunction = (
  title: string | undefined,
  field: string | undefined
) => ReactNode

export interface ColumnItemProps<D extends {}>
  extends Omit<ColumnPrimitiveProps, 'children'>,
    ColumnCommonProps {
  columnClassName?: string
  columnStyle?: CSSProperties
  columnSxProps?: SxProps
  headerHeight?: number
  headerCellProps?: Omit<HeaderCellPrimitiveProps, 'renderSortIcon'>
  renderSortIcon?: HeaderCellPrimitiveProps['renderSortIcon']
  cellProps?: Omit<CellPrimitiveProps, 'dataKey'>
  specificCellType?: SpecificCellType
  render?: RenderFunction<D>
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
  checkedItems?: CheckedItems
  onCheckedChange?: OnCheckChange
}

export type SpecificCellType = 'CheckCell' | 'EditableCell' | 'ImageCell'

export type CheckedItems = Set<string | number>

export type OnCheckChange = (checkedItems: CheckedItems) => void
