import { useCallback, useMemo } from 'react'
import { createTable, ColumnDefaultOptions } from '@tanstack/react-table'
import { isNil } from 'lodash-es'
import { Button, Link } from '@chakra-ui/react'

import { Card } from '@components/card'
import { ProTable } from '@components/pro-table'
import { DomainDevice } from 'graphql/type'

export type DocumentListProps = {
  title?: string
  dataSource?: DomainDevice[]
}

export const DocumentList = ({ title, dataSource }: DocumentListProps) => {
  const table = createTable<{ Row: DomainDevice }>()

  const onRemove = useCallback((uuid: string) => {
    console.log('删除', uuid)
  }, [])

  const onUpload = useCallback((uuid: string) => {
    console.log('上传附件', uuid)
  }, [])

  const columns = table.createColumns([
    table.createDataColumn(
      row => ({ uuid: row.uuid, reportNo: row.reportNo }),
      {
        id: 'primaryNo',
        header: () => '报告编号',
        cell: ({ value }) => {
          if (isNil(value.reportNo)) {
            return (
              <Link href={`/document/${value.uuid}/view`}>
                {value.reportNo}
              </Link>
            )
          }
          return (
            <Link href={`/document/${value.uuid}/generate`}>设定报告编号</Link>
          )
        },
      }
    ),
    table.createDataColumn('name', {
      header: () => '设备名称',
      cell: info => info.value,
    }),
    table.createDataColumn('requester', {
      header: () => '委托单位',
      cell: info => info.value,
    }),
    table.createDataColumn('requester', {
      header: () => '委托单位',
      cell: info => info.value,
    }),
    table.createDataColumn(row => ({ uuid: row.uuid }), {
      id: 'operating',
      header: () => '操作',
      cell: ({ value }) => (
        <>
          <Button
            colorScheme="teal"
            variant="link"
            onClick={() => onRemove(value.uuid)}
          >
            删除
          </Button>
          <Link href={`/document/${value.uuid}/edit`}>
            <Button colorScheme="teal" variant="link">
              编辑
            </Button>
          </Link>
          <Button
            colorScheme="teal"
            variant="link"
            onClick={() => onUpload(value.uuid)}
          >
            上传附件
          </Button>
        </>
      ),
    }),
  ])

  return (
    <Card header={title}>
      <ProTable tableInstance={table} columns={columns} />
    </Card>
  )
}
