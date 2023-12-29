import { Card } from '@mui/material'
import { useCallback, useMemo } from 'react'

import { useMenuAndRoutes } from '@/layouts/admin/components/menu-and-routes'

import HeaderBreadcrumbs from 'd/components/header-breadcrumbs'
import Page from 'd/components/page'

import { useMessage } from 'h/use-snackbar-message'

import {
  useDeleteEquipmentTypesMutation,
  useEquipmentTypesListQuery,
} from 'm/equipment-type/index.generated'

import { DeviceTypeList } from './components/list'

import i18n from 'strings/i18n'


const TITLE = i18n.t('设备类型')

const PageDeviceType = () => {
  const { activeRouteConfig } = useMenuAndRoutes()

  const { pushSuccessMessage } = useMessage()

  const {
    data,
    isLoading: isDataLoading,
    refetch: refetchList,
  } = useEquipmentTypesListQuery()

  const list = useMemo(() => data?.data || [], [data?.data])

  const { mutate: deleteDeviceTypeById, isLoading: isDeleteLoading } =
    useDeleteEquipmentTypesMutation({
      onSuccess: () => {
        refetchList()
      },
    })

  const onRemove = useCallback<(uuid: string) => void>(
    async uuid => {
      await deleteDeviceTypeById({
        id: uuid,
      })
      pushSuccessMessage(i18n.t('成功'))
    },
    [deleteDeviceTypeById, pushSuccessMessage]
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
        <DeviceTypeList
          isLoading={isLoading}
          dataSource={list}
          onRemove={onRemove}
        />
      </Card>
    </Page>
  )
}

export default PageDeviceType
