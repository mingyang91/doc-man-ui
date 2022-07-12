import { useNavigate } from 'react-router-dom'
import { ReactNode, useCallback } from 'react'
import { useSnackbar, VariantType } from 'notistack'
import { Portal } from '@mui/material'

import { useInsertDeviceMutation } from '@/generated/public'
import { InsertDeviceMutationVariables } from '@/generated/types'
import LoadingScreen from '@/components/loading-screen'
import Page from '@/components/page'
import HeaderBreadcrumbs from '@/components/header-breadcrumbs'

import { DeviceEdit } from '@@/modules/domains/devices/edit'
import { useMenuAndRoutes } from '@@/modules/layouts/admin/components/menu-and-routes'

import { DeviceReportTitle } from '@models/devices'

const TITLE = `${DeviceReportTitle} - 新增`

const PageCreateDeviceReport = () => {
  const navigate = useNavigate()

  const { activeRouteConfig } = useMenuAndRoutes()

  const { enqueueSnackbar } = useSnackbar()

  const [insertDeviceMutation, { loading, error }] = useInsertDeviceMutation({
    refetchQueries: ['devices'],
  })

  const handleMessage = useCallback(
    (variant: VariantType, content: ReactNode | string) => {
      enqueueSnackbar(content, {
        variant,
      })
    },
    [enqueueSnackbar]
  )

  const onSubmit = useCallback(
    async (input: InsertDeviceMutationVariables['input']) => {
      const { data, errors } = await insertDeviceMutation({
        variables: {
          input,
        },
      })
      if (!errors) {
        handleMessage('success', '创建成功。')
        data?.insert_device_one?.id &&
          navigate(`/device/detail/${data.insert_device_one.id}`)
      } else {
        handleMessage('error', errors[0].message || '创建失败，请检查。')
      }
    },
    [handleMessage, insertDeviceMutation, navigate]
  )

  if (loading) {
    return (
      <Portal>
        <LoadingScreen />
      </Portal>
    )
  }

  if (error) {
    handleMessage('error', error.message || '创建失败，请检查。')
  }

  return (
    <Page title={TITLE}>
      <HeaderBreadcrumbs
        heading={activeRouteConfig.title}
        links={activeRouteConfig.breadcrumbs}
      />
      <DeviceEdit onSubmit={onSubmit} />
    </Page>
  )
}

export default PageCreateDeviceReport
