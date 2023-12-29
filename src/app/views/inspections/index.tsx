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
  useDeleteInspectionReportByIdMutation,
  useInspectionReportListQuery,
} from 'm/inspection-report/index.generated'

import { InspectionReportList } from './components/inspection-list'

import i18n from 'strings/i18n'


const TITLE = `${i18n.t('设备检验检测')} - ${i18n.t('列表')}`

const PageInspection = () => {
  const navigate = useNavigate()

  const { activeRouteConfig } = useMenuAndRoutes()

  const { pushSuccessMessage } = useMessage()

  const { page, offset, pageSize, onPageChange, onPageSizeChange } =
    useRoutePagination()

  const {
    data,
    isLoading: isDataLoading,
    refetch: refetchList,
  } = useInspectionReportListQuery({
    offset,
    limit: pageSize,
  })

  const [list, total] = useMemo(
    () => [data?.list || [], data?.total || { aggregate: { count: 0 } }],
    [data?.list, data?.total]
  )

  const { mutate: deleteInspectionReportList, isLoading: isDeleteLoading } =
    useDeleteInspectionReportByIdMutation({
      onSuccess: () => {
        refetchList()
      },
    })

  const onEdit = useCallback<(id: string) => void>(
    id => {
      navigate(generatePath(ROUTES.inspectionEdit, { id }))
    },
    [navigate]
  )

  const onRemove = useCallback<(uuid: string) => void>(
    async uuid => {
      await deleteInspectionReportList({
        id: uuid,
      })
      pushSuccessMessage(i18n.t('成功'))
    },
    [deleteInspectionReportList, pushSuccessMessage]
  )

  const isLoading = useMemo(
    () => isDataLoading || isDeleteLoading,
    [isDataLoading, isDeleteLoading]
  )

  return (
    <Page title={TITLE}>
      <HeaderBreadcrumbs
        heading={TITLE}
        links={activeRouteConfig.breadcrumbs}
      />
      <Card sx={{ pt: 5, px: 5 }}>
        <InspectionReportList
          isLoading={isLoading}
          dataSource={list}
          page={page}
          pageSize={pageSize}
          total={total.aggregate?.count}
          onPageChange={onPageChange}
          onPageSizeChange={onPageSizeChange}
          onEdit={onEdit}
          onRemove={onRemove}
        />
      </Card>
    </Page>
  )
}

export default PageInspection
