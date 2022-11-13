import { merge } from 'lodash-es'
import { ReactNode } from 'react'
import { Column, ColumnGroup, RowDataType } from 'rsuite-table'

import { CheckCell, CheckCellHeader } from './specific-cells'
import { Cell, HeaderCell } from './styled'
import {
  CheckedItems,
  ColumnGroupProps,
  ColumnItemProps,
  ColumnProps,
  OnCheckChange,
} from './type'

const isColumnGroup = <D extends Record<string, unknown>>(
  column: ColumnProps<D>
): column is ColumnGroupProps<D> => {
  return !!('columns' in column && column.columns.length > 0)
}

export const renderColumns = <D extends Record<string, unknown>>(
  configs: ColumnProps<D>[],
  data: D[],
  checkedItems?: CheckedItems,
  onCheckedChange?: OnCheckChange
) => {
  function render(
    column: ColumnItemProps<D>,
    level = 0,
    index = 0,
    parentIndex = 0
  ) {
    const cellRest = merge(column.cellProps, {
      className: column.columnClassName,
      sx: column.columnSxProps,
      style: column.columnStyle,
    })

    const cellHeaderRest = column.headerCellProps

    const header = column.headerRender
      ? column.headerRender(column.title, column.field)
      : column.title

    let headerCell: ReactNode, cell: ReactNode

    if (column.specificCellType) {
      if (column.specificCellType === 'CheckCell') {
        if (!column.field || !checkedItems) {
          throw new Error('CheckCell must have a field and a checkedItems')
        }

        headerCell = (
          <CheckCellHeader
            {...cellHeaderRest}
            data={data}
            field={column.field}
            checkedItems={checkedItems}
            onCheckedChange={onCheckedChange}
          />
        )

        cell = (
          <CheckCell
            {...cellRest}
            field={column.field}
            checkedItems={checkedItems}
            onCheckedChange={onCheckedChange}
          />
        )
      }
    } else {
      headerCell = (
        <HeaderCell
          {...cellHeaderRest}
          renderSortIcon={column.renderSortIcon}
          headerHeight={column.headerHeight}
          width={column.width}
        >
          {header}
        </HeaderCell>
      )

      cell = column.render ? (
        <Cell {...cellRest}>
          {
            column.render as (
              rowData: RowDataType,
              rowIndex?: number
            ) => ReactNode
          }
        </Cell>
      ) : (
        <Cell dataKey={column.field} rowData={column.rowData} {...cellRest} />
      )
    }

    return (
      <Column
        align={column.align}
        colSpan={column.colSpan}
        rowSpan={column.rowSpan}
        fixed={column.fixed}
        verticalAlign={column.verticalAlign}
        width={column.width}
        resizable={column.resizable}
        sortable={column.sortable}
        flexGrow={column.flexGrow}
        minWidth={column.minWidth}
        onResize={column.onResize}
        key={column.field || level ? `${parentIndex}-${index}` : index}
      >
        {headerCell}
        {cell}
      </Column>
    )
  }

  function renderColumnItem(
    columns: ColumnItemProps<D>[],
    parentIndex: number
  ) {
    return columns.map((column, index) => render(column, 1, index, parentIndex))
  }

  return configs.map((config, index) => {
    return isColumnGroup<D>(config) ? (
      <ColumnGroup
        key={config.key || `${index}`}
        align={config.align}
        verticalAlign={config.verticalAlign}
        fixed={config.fixed}
        groupHeaderHeight={config.groupHeaderHeight}
        header={
          config.headerRender
            ? config.headerRender(config.title, undefined)
            : config.title
        }
      >
        {config.columns && renderColumnItem(config.columns, index)}
      </ColumnGroup>
    ) : (
      render(config, 0, index)
    )
  })
}
