import { useNavigate, useParams } from 'react-router-dom'
import { ReactNode, useCallback } from 'react'
import { useSnackbar, VariantType } from 'notistack'
import { Portal } from '@mui/material'
import { omit } from 'lodash-es'

import { useUpdateDeviceMutation } from '@/generated/public'
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

  const [updateDeviceMutation, { loading, error }] = useUpdateDeviceMutation({
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
      const _input = omit(input, ['id', '__typename'])

      const { errors } = await updateDeviceMutation({
        variables: {
          id,
          input: _input,
        },
      })
      if (errors) {
        handleMessage('error', errors[0].message)
      } else {
        handleMessage('success', '更新成功。')
        navigate(`/device/detail/${input.id}`)
      }
    },
    [updateDeviceMutation, id, handleMessage, navigate]
  )

  if (loading) {
    return (
      <Portal>
        <LoadingScreen />
      </Portal>
    )
  }

  if (error) {
    handleMessage('error', error.message || '更新失败，请检查。')
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
