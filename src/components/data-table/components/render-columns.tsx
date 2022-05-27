import { Column, ColumnGroup } from 'rsuite-table'

import { HeaderCell, Cell } from './styled'
import { ColumnProps, ColumnGroupProps, ColumnItemProps } from './type'

const isColumnGroup = <D extends {}>(
  column: ColumnProps<D>
): column is ColumnGroupProps<D> => {
  return !!('columns' in column && column.columns.length > 0)
}

export const renderColumns = <D extends {}>(configs: ColumnProps<D>[]) => {
  function render(
    column: ColumnItemProps<D>,
    level = 0,
    index = 0,
    parentIndex = 0
  ) {
    const cellRest = {
      className: column.columnClassName,
      sx: column.columnSxProps,
      style: column.columnStyle,
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
        <HeaderCell
          renderSortIcon={column.renderSortIcon}
          headerHeight={column.headerHeight}
          width={column.width}
        >
          {column.header}
        </HeaderCell>
        {column.render ? (
          <Cell {...cellRest}>{column.render}</Cell>
        ) : (
          <Cell dataKey={column.field} rowData={column.rowData} {...cellRest} />
        )}
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
        header={config.header}
      >
        {config.columns && renderColumnItem(config.columns, index)}
      </ColumnGroup>
    ) : (
      render(config, 0, index)
    )
  })
}
