import { useSearchParams, NavLink } from 'react-router-dom'
import { useCallback, MouseEvent, ChangeEventHandler, useMemo } from 'react'
import { useCreation } from 'ahooks'
import { Button, Stack } from '@mui/material'
import { RiFileAddLine } from 'react-icons/ri'

import { DevicesList } from '@/app/modules/domains/devices'
import { useDevicesQuery } from '@/generated/graphql'

export const PageDeviceReports = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const { page, offset, pageSize } = useCreation(() => {
    const page = Number(searchParams.get('page')) || 0
    const pageSize = Number(searchParams.get('pageSize')) || 10
    const offset = page * pageSize

    return {
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
    fetchPolicy: 'network-only',
  })

  const onPageChange = useCallback(
    (_: MouseEvent<HTMLButtonElement> | null, page: number) => {
      setSearchParams({
        page: (page - 1).toString(),
        pageSize: pageSize.toString(),
      })
    },
    [setSearchParams, pageSize]
  )

  const onPageSizeChange = useCallback<
    ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  >(
    ({ currentTarget }) => {
      setSearchParams({
        page: '1',
        pageSize: currentTarget.value,
      })
    },
    [setSearchParams]
  )

  return (
    <>
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
      />
    </>
  )
}
