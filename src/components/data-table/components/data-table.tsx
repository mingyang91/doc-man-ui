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
  columns,
  dataSource,
  ...restProps
}: DataTableProps<D>) => {
  const elements = useCreation(() => renderColumns(columns), [columns])

  return (
    <Table
      {...restProps}
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
