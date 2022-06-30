import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Alert, AlertTitle, Paper, Portal } from '@mui/material'

import { Device, DeviceByIdQuery } from '@/generated/types'
import { useDeviceByIdQuery } from '@/generated/public'
import { DeviceDetail } from '@/app/modules/domains/devices/detail'
import LoadingScreen from '@/components/loading-screen'
import HeaderBreadcrumbs from '@/components/header-breadcrumbs'
import { useMenuAndRoutes } from '@/app/modules/layouts/admin/components/menu-and-routes'

import { createContainer } from '@utils/create-container'

import { DeviceReportTitle } from '@models/devices'

import { DetailToolbar } from './components/detail-toolbar'

const DeviceDetailContainer = createContainer(function useDeviceDetail(
  value: DeviceByIdQuery['device_by_pk'] = {} as DeviceByIdQuery['device_by_pk']
) {
  return {
    ...value,
  }
})

export const useDeviceDetail = DeviceDetailContainer.useContainer

export const DeviceDetailProvider = DeviceDetailContainer.Provider

export const PageDetailDeviceReport = () => {
  const { id } = useParams()

  const { activeRouteConfig } = useMenuAndRoutes()

  const { data, loading, error } = useDeviceByIdQuery({
    variables: {
      id: id as Device['id'],
    },
  })

  const deviceDetail = useMemo(
    () => data?.device_by_pk || ({} as DeviceByIdQuery['device_by_pk']),
    [data?.device_by_pk]
  )

  const title = useMemo(
    () => `${DeviceReportTitle} - ${deviceDetail?.sampleName}`,
    [deviceDetail?.sampleName]
  )

  if (loading || !deviceDetail) {
    return (
      <Portal>
        <LoadingScreen />
      </Portal>
    )
  }

  if (error) {
    return (
      <Alert variant="filled" severity="error">
        <AlertTitle>读取数据失败</AlertTitle>
        {error.message}
      </Alert>
    )
  }

  return (
    <Paper>
      <HeaderBreadcrumbs
        heading={title}
        links={activeRouteConfig.breadcrumbs}
      />
      <DeviceDetailProvider initialState={deviceDetail}>
        <DetailToolbar />
        <DeviceDetail />
      </DeviceDetailProvider>
    </Paper>
  )
}

export default PageDetailDeviceReport
