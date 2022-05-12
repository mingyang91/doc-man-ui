import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'

import { DeviceEdit } from '@app/modules/domains/devices/edit'
import {
  useInsertDeviceMutation,
  InsertDeviceMutationVariables,
} from '@/generated/graphql'

export const PageCreateDeviceReport = () => {
  const navigate = useNavigate()

  const [insertDeviceMutation, { data, loading, error }] =
    useInsertDeviceMutation()

  const onSubmit = useCallback(
    async (input: InsertDeviceMutationVariables['input']) => {
      if (!loading) {
        await insertDeviceMutation({
          variables: {
            input,
          },
        })
        navigate('/device')
      }
    },
    [loading, insertDeviceMutation, navigate]
  )

  return <DeviceEdit isEdit={false} onSubmit={onSubmit} />
}
