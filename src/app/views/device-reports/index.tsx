import { useSearchParams, NavLink } from 'react-router-dom'
import { useCallback, MouseEvent, ChangeEventHandler } from 'react'
import { useCreation } from 'ahooks'
import { Button, Stack } from '@mui/material'
import { RiFileAddLine } from 'react-icons/ri'

import { DevicesList } from '@/app/modules/domains/devices'
import { useDevicesQuery } from '@/generated/graphql'

const PageDeviceReports = () => {
  const [searchParams, setSearchParams] = useSearchParams()

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
    fetchPolicy: 'network-only',
  })

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

export { PageDeviceReports as default }
