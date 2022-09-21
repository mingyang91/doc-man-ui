import { Card } from '@mui/material'
import { useCallback, useMemo } from 'react'
import { generatePath, useNavigate } from 'react-router-dom'

import { useMenuAndRoutes } from '@/layouts/admin/components/menu-and-routes'
import { ROUTES } from '@/routes'

import HeaderBreadcrumbs from 'd/components/header-breadcrumbs'
import Page from 'd/components/page'

import { useRoutePagination } from 'h/use-route-pagination'
import { useMessage } from 'h/use-snackbar-message'

import {
  useClientsDetailListQuery,
  useDeleteClientsBulkMutation,
  useDeleteClientsByIdMutation,
} from 'm/clients/index.generated'

import { ConsumerData, ConsumerList } from './components/consumer-list'

const TITLE = `委托单位 - 列表`

const PageDevice = () => {
  const navigate = useNavigate()

  const { activeRouteConfig } = useMenuAndRoutes()

  const { pushSuccessMessage } = useMessage()

  const { page, offset, pageSize, onPageChange, onPageSizeChange } =
    useRoutePagination()

  const {
    data,
    isLoading: isDataLoading,
    refetch: refetchList,
  } = useClientsDetailListQuery({
    offset,
    limit: pageSize,
  })

  const [list, total] = useMemo(
    () => [data?.list || [], data?.total || { aggregate: { count: 0 } }],
    [data?.list, data?.total]
  )

  const { mutate: deleteConsumerById, isLoading: isDeleteLoading } =
    useDeleteClientsByIdMutation({
      onSuccess: () => {
        refetchList()
      },
    })

  const {
    mutate: deleteDeviceBulk,
    data: bulkDeleteData,
    isLoading: isBulkDeleteLoading,
  } = useDeleteClientsBulkMutation({
    onSuccess: () => {
      refetchList()
    },
  })

  const onEdit = useCallback<(id: string) => void>(
    id => {
      navigate(generatePath(ROUTES.consumerEdit, { id }))
    },
    [navigate]
  )

  const onRemove = useCallback<(uuid: string) => void>(
    async uuid => {
      await deleteConsumerById({
        id: uuid,
      })
      pushSuccessMessage('删除成功')
    },
    [deleteConsumerById, pushSuccessMessage]
  )

  const onBulkRemove = useCallback<(uuids: string[]) => void>(
    async uuids => {
      await deleteDeviceBulk({
        ids: uuids,
      })
      pushSuccessMessage(`删除了 ${bulkDeleteData?.root?.affected_rows} 条数据`)
    },
    [bulkDeleteData?.root?.affected_rows, deleteDeviceBulk, pushSuccessMessage]
  )

  const isLoading = useMemo(
    () => isDataLoading || isDeleteLoading || isBulkDeleteLoading,
    [isBulkDeleteLoading, isDataLoading, isDeleteLoading]
  )

  return (
    <Page title={TITLE}>
      <HeaderBreadcrumbs
        heading={TITLE}
        links={activeRouteConfig.breadcrumbs}
      />
      <Card sx={{ pt: 5, px: 5 }}>
        <ConsumerList
          isLoading={isLoading}
          dataSource={list as ConsumerData[]}
          page={page}
          pageSize={pageSize}
          total={total.aggregate?.count}
          onPageChange={onPageChange}
          onPageSizeChange={onPageSizeChange}
          onEdit={onEdit}
          onRemove={onRemove}
          onBulkRemove={onBulkRemove}
        />
      </Card>
    </Page>
  )
}

export default PageDevice
