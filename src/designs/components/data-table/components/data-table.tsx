/* eslint-disable @typescript-eslint/ban-types */
import { useCreation } from 'ahooks'

import { renderColumns } from './render-columns'
import { Table } from './styled'
import { DataTableProps } from './type'

export const DataTable = <D extends {}>({
  affixHeader = true,
  autoHeight = true,
  bordered = true,
  cellBordered = true,
  fillHeight = false,
  rowHeight = 64,
  headerHeight = 72,
  columns,
  dataSource,
  checkedItems,
  onCheckedChange,
  locale = {
    emptyMessage: '暂无数据',
    loading: '加载中...',
  },
  ...restProps
}: DataTableProps<D>) => {
  const elements = useCreation(
    () => renderColumns(columns, dataSource, checkedItems, onCheckedChange),
    [checkedItems, columns, dataSource, onCheckedChange]
  )

  return (
    <Table
      {...restProps}
      locale={locale}
      headerHeight={headerHeight}
      rowHeight={rowHeight}
      affixHeader={affixHeader}
      autoHeight={autoHeight}
      bordered={bordered}
      cellBordered={cellBordered}
      fillHeight={fillHeight}
      data={dataSource}
    >
      {elements}
    </Table>
  )
}
