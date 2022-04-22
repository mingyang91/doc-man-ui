import {
  useSearchParams,
  NavLink as RouterLink,
  NavLink,
} from 'react-router-dom'
import { useCallback } from 'react'
import { useCreation } from 'ahooks'
import { Box, Button, Stack } from '@mui/material'
import { RiFileAddLine } from 'react-icons/ri'

import { DevicesList } from '@/app/modules/domains/devices'
import { useQueryDevice } from '@/graphql/query-device'

export const PageDeviceReports = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const { page, offset, pageSize } = useCreation(() => {
    const page = Number(searchParams.get('page')) || 1
    const pageSize = Number(searchParams.get('pageSize')) || 10
    const offset = (page - 1) * pageSize

    return {
      page,
      offset,
      pageSize,
    }
  }, [searchParams])

  const { data, loading } = useQueryDevice(pageSize, offset)

  const onPageChange = useCallback(
    (page: number) => {
      console.log(page)
      setSearchParams({
        page: page.toString(),
        pageSize: pageSize.toString(),
      })
    },
    [setSearchParams, pageSize]
  )

  const onPageSizeChange = useCallback(
    (pageSize: number) => {
      setSearchParams({
        page: '1',
        pageSize: pageSize.toString(),
      })
    },
    [setSearchParams]
  )

  return (
    <>
      <Stack direction="row" spacing={2}>
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
        dataSource={data}
        page={page}
        pageSize={pageSize}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </>
  )
}
