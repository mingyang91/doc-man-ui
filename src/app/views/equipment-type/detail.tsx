import { Divider, Snackbar } from '@mui/material'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

import { useMenuAndRoutes } from '@/layouts/admin/components/menu-and-routes'

import HeaderBreadcrumbs from 'd/components/header-breadcrumbs'
import { CommonMessage, SnackbarLoadingComponent } from 'd/components/message'
import Page from 'd/components/page'

import { useEquipmentTypesByIdQuery } from 'm/equipment-type/index.generated'
import { UUIDV4 } from 'm/presets'

import { Fields } from './components/fields'
import { InspectionTypeList } from './components/inspection-enum-list'

import { DetailCard } from '@@/detail-card'
import i18n from 'strings/i18n'

const TITLE = '设备类型 - 详情'

const PageDetail = () => {
  const { activeRouteConfig } = useMenuAndRoutes()

  const { id }: { id?: UUIDV4 } = useParams()

  const { data, isLoading, isError, refetch } = useEquipmentTypesByIdQuery({
    id,
  })

  const memoData = useMemo(
    () =>
      data?.data
        ? {
            detail: {
              id: data.data.id,
              name: data.data.name,
              displayName: data.data.displayName,
              comment: data.data.comment,
            },
            items: data.data.items.sort((a, b) => a.index - b.index),
          }
        : undefined,
    [data?.data]
  )

  return (
    <Page title={TITLE}>
      <HeaderBreadcrumbs
        heading={TITLE}
        links={activeRouteConfig.breadcrumbs}
      />
      {id && memoData ? (
        <DetailCard>
          <Fields id={id} data={memoData.detail} refetchHandler={refetch} />
          <Divider sx={{ my: 3 }} />
          <InspectionTypeList
            id={id}
            isLoading={isLoading}
            dataSource={memoData.items}
            refetchHandler={refetch}
          />
        </DetailCard>
      ) : isLoading ? (
        <SnackbarLoadingComponent />
      ) : (
        isError && (
          <Snackbar open>
            <CommonMessage type="error" description={i18n.t('获取数据错误')} />
          </Snackbar>
        )
      )}
    </Page>
  )
}

export default PageDetail
