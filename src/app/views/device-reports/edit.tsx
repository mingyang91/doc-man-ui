import { useNavigate, useParams } from 'react-router-dom'
import { ReactNode, useCallback } from 'react'
import { useSnackbar, VariantType } from 'notistack'
import { Portal } from '@mui/material'

import { useInsertDeviceMutation } from '@/generated/public'
import {
  InsertDeviceMutationVariables,
  DeviceInsertInput,
} from '@/generated/types'
import LoadingScreen from '@/components/loading-screen'
import Page from '@/components/page'
import HeaderBreadcrumbs from '@/components/header-breadcrumbs'

import { DeviceEdit } from '@@/modules/domains/devices/edit'
import { useMenuAndRoutes } from '@@/modules/layouts/admin/components/menu-and-routes'

import { DeviceReportTitle } from '@models/devices'

const TITLE = `${DeviceReportTitle} - 新增`

const PageEditDeviceReport = () => {
  const navigate = useNavigate()

  const { id }: { id?: DeviceInsertInput['id'] } = useParams()

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
      await insertDeviceMutation({
        variables: {
          input,
        },
      })
      handleMessage('success', '创建成功。')
      navigate(`device/${input.id}`)
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
      <DeviceEdit id={id} onSubmit={onSubmit} />
    </Page>
  )
}

export default PageEditDeviceReport
