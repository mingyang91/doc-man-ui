import { useNavigate } from 'react-router-dom'
import { ReactNode, useCallback } from 'react'
import { useSnackbar, VariantType } from 'notistack'

import { DeviceEdit } from '@app/modules/domains/devices/edit'
import {
  useInsertDeviceMutation,
  InsertDeviceMutationVariables,
} from '@/generated/graphql'

export const PageCreateDeviceReport = () => {
  const navigate = useNavigate()

  const { enqueueSnackbar } = useSnackbar()

  const [insertDeviceMutation, { data, loading, error }] =
    useInsertDeviceMutation()

  const handleError = useCallback(
    (variant: VariantType, content: ReactNode | string) => {
      enqueueSnackbar(content, { variant })
    },
    [enqueueSnackbar]
  )

  const onSubmit = useCallback(
    async (input: InsertDeviceMutationVariables['input']) => {
      if (!loading) {
        await insertDeviceMutation({
          variables: {
            input,
          },
        })
        console.log('data:', data)
        navigate('/device')
      }
    },
    [loading, insertDeviceMutation, data, navigate]
  )

  if (error) {
    handleError('error', error.message || '创建失败，请检查。')
  }

  return <DeviceEdit isEdit={false} onSubmit={onSubmit} />
}
