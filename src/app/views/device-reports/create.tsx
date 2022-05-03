import { useNavigate } from 'react-router-dom'

import { useCreateDevice } from '@/graphql/query-device'
import { DomainDeviceInput } from '@/graphql/type'
import { DeviceEdit } from '@app/modules/domains/devices/edit'

export const PageCreateDeviceReport = () => {
  const navigate = useNavigate()
  const { createDevice } = useCreateDevice()
  const onSubmit = async (values: DomainDeviceInput) => {
    await createDevice({
      variables: values,
    })
    navigate('/device')
  }

  return <DeviceEdit isEdit={false} onSubmit={onSubmit} />
}
