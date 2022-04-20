/* eslint-disable @typescript-eslint/ban-types */
import { ReactNode } from 'react'
import {
  Table as TableInstance,
  AnyGenerics,
  ColumnDef,
  useTable,
} from '@tanstack/react-table'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  TableProps,
  TableCaptionProps,
  TableRowProps,
  TableColumnHeaderProps,
  TableCellProps,
} from '@chakra-ui/react'
import { useCreation } from 'ahooks'

import { LoadingSkeleton } from './components/loading-skeleton'

export interface ProTableColumn extends AnyGenerics {
  isNumeric?: boolean
  headerProps?: TableColumnHeaderProps
  cellProps?: TableCellProps | TableColumnHeaderProps
  CellElement?: typeof Td | typeof Th
}

export interface ProTableProps<
  Columns extends ProTableColumn = {},
  Data extends Record<string, unknown> = {}
> extends TableProps {
  isLoading?: boolean
  caption?: string
  captionProps?: TableCaptionProps
  columns: ColumnDef<Columns>[]
  rowProps?: TableRowProps[]
  footerSlot?: ReactNode
  dataSource?: Data[]
  tableInstance: TableInstance<Columns>
}

export const ProTable = <
  Columns extends ProTableColumn = {},
  Data extends Record<string, unknown> = {}
>({
  isLoading = false,
  caption,
  captionProps = {},
  columns = [],
  rowProps,
  dataSource = [],
  footerSlot,
  tableInstance,
  ...restProps
}: ProTableProps<Columns, Data>) => {
  const instance = useTable(tableInstance, {
    data: dataSource,
    columns,
  })

  const renderHeader = useCreation(() => {
    return instance.getHeaderGroups().map(headerGroup => {
      return (
        <Tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
          {headerGroup.headers.map(header => (
            <Th {...header.getHeaderProps()} key={header.id}>
              {header.isPlaceholder ? null : header.renderHeader()}
            </Th>
          ))}
        </Tr>
      )
    })
  }, [columns])

  const renderBody = useCreation(() => {
    return instance.getRowModel().rows.map(row => {
      return (
        <Tr {...row.getRowProps()} key={row.id}>
          {row.getVisibleCells().map(cell => (
            <Td {...cell.getCellProps()} key={cell.id}>
              {cell.renderCell()}
            </Td>
          ))}
        </Tr>
      )
    })
  }, [dataSource])

  return (
    <TableContainer position="relative">
      {isLoading ? (
        <LoadingSkeleton length={Math.max(3, dataSource.length)} />
      ) : (
        <Table {...instance.getTableProps()} {...restProps}>
          {caption && <TableCaption {...captionProps}>{caption}</TableCaption>}
          <Thead>{renderHeader}</Thead>
          <Tbody {...instance.getTableBodyProps()}>{renderBody}</Tbody>
          <Tfoot>
            {instance.getFooterGroups().map(footerGroup => (
              <Tr {...footerGroup.getFooterGroupProps()} key={footerGroup.id}>
                {footerGroup.headers.map(footer => (
                  <Th {...footer.getFooterProps()} key={footer.id}>
                    {footer.isPlaceholder ? null : footer.renderFooter()}
                  </Th>
                ))}
              </Tr>
            ))}
          </Tfoot>
        </Table>
      )}
    </TableContainer>
  )
}
