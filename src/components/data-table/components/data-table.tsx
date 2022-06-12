import { useCreation } from 'ahooks'

import { DataTableProps } from './type'
import { renderColumns } from './render-columns'
import { Table } from './styled'

export const DataTable = <D extends {} = {}>({
  affixHeader = true,
  autoHeight = true,
  bordered = true,
  cellBordered = true,
  fillHeight = false,
  rowHeight = 54,
  headerHeight = 60,
  columns,
  dataSource,
  locale = {
    emptyMessage: '暂无数据',
    loading: '加载中...',
  },
  ...restProps
}: DataTableProps<D>) => {
  const elements = useCreation(() => renderColumns(columns), [columns])

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
