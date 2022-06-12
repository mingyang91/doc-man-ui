import { ReactNode, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UUID } from 'short-uuid'
import { Alert, AlertTitle, Portal } from '@mui/material'

import { useDeviceByIdQuery } from '@/generated/graphql'
import { DeviceDetail } from '@/app/modules/domains/devices/detail'
import LoadingScreen from '@/components/loading-screen'

export const PageDetailDeviceReport = () => {
  const { id } = useParams()

  const { data, loading, error } = useDeviceByIdQuery({
    variables: {
      id: id as UUID,
    },
  })

  if (loading) {
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

  return <DeviceDetail dataSource={data?.device_by_pk} />
}

export default PageDetailDeviceReport
