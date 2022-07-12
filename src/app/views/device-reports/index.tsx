import { useSearchParams, NavLink, useNavigate } from 'react-router-dom'
import { useCallback, MouseEvent, ChangeEventHandler, ReactNode } from 'react'
import { useCreation } from 'ahooks'
import { useSnackbar, VariantType } from 'notistack'
import { Card, Button, Stack } from '@mui/material'
import { RiFileAddLine } from 'react-icons/ri'

import {
  useDevicesQuery,
  useDeleteDeviceMutation,
  DevicesDocument,
} from '@/generated/public'
import { DevicesQuery } from '@/generated/types'
import Page from '@/components/page'
import HeaderBreadcrumbs from '@/components/header-breadcrumbs'

import { DevicesList } from '@@modules/domains/devices'
import { useMenuAndRoutes } from '@@modules/layouts/admin/components/menu-and-routes'

import { DeviceReportTitle } from '@models/devices'

const TITLE = `${DeviceReportTitle} - 列表`

const PageDeviceReports = () => {
  const navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams()

  const { enqueueSnackbar } = useSnackbar()

  const handleMessage = useCallback(
    (variant: VariantType, content: ReactNode | string) => {
      enqueueSnackbar(content, {
        variant,
      })
    },
    [enqueueSnackbar]
  )

  const { activeRouteConfig } = useMenuAndRoutes()

  const { page, offset, pageSize } = useCreation(() => {
    const searchPage = Number(searchParams.get('page')) || 1
    const page = searchPage - 1
    const pageSize = Number(searchParams.get('pageSize')) || 10
    const offset = page * pageSize

    return {
      searchPage,
      page,
      offset,
      pageSize,
    }
  }, [searchParams])

  const { data, loading } = useDevicesQuery({
    variables: {
      offset,
      limit: pageSize,
    },
  })

  const [deleteDeviceMutation] = useDeleteDeviceMutation()

  const onPageChange = useCallback(
    (_: MouseEvent<HTMLButtonElement> | null, page: number) => {
      setSearchParams({
        page: `${page}`,
        pageSize: `${pageSize}`,
      })
    },
    [setSearchParams, pageSize]
  )

  const onPageSizeChange = useCallback<
    ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  >(
    e => {
      setSearchParams({
        page: '1',
        pageSize: e.target.value,
      })
    },
    [setSearchParams]
  )

  const onEdit = useCallback<(uuid: string) => void>(
    uuid => {
      navigate(`/device/edit/${uuid}`)
    },
    [navigate]
  )

  const onRemove = useCallback<(uuid: string) => void>(
    async uuid => {
      const { errors } = await deleteDeviceMutation({
        variables: {
          id: uuid,
        },
        refetchQueries: [{ query: DevicesDocument }],
        update(cache) {
          cache.modify({
            fields: {
              device: (devices: DevicesQuery['device'] = []) => {
                return devices.filter(device => device.id !== uuid)
              },
            },
          })
        },
      })
      if (errors) {
        handleMessage('error', errors[0].message)
      } else {
        handleMessage('success', `${uuid} 已删除`)
      }
    },
    [deleteDeviceMutation, handleMessage]
  )

  return (
    <Page title={TITLE}>
      <HeaderBreadcrumbs
        heading={TITLE}
        links={activeRouteConfig.breadcrumbs}
      />
      <Card sx={{ pt: 5, px: 5 }}>
        <Stack direction="row" spacing={2} sx={{ marginBottom: 3 }}>
          <Button
            variant="contained"
            color="primary"
            to="/device/create"
            component={NavLink}
            startIcon={<RiFileAddLine />}
          >
            创建
          </Button>
        </Stack>
        <DevicesList
          isLoading={loading}
          dataSource={data?.device}
          page={page}
          pageSize={pageSize}
          onPageChange={onPageChange}
          onPageSizeChange={onPageSizeChange}
          onEdit={onEdit}
          onRemove={onRemove}
        />
      </Card>
    </Page>
  )
}

export default PageDeviceReports
