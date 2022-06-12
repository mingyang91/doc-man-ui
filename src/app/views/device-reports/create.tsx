import { useNavigate } from 'react-router-dom'
import { ReactNode, useCallback } from 'react'
import { useSnackbar, VariantType } from 'notistack'

import { DeviceEdit } from '@@/modules/domains/devices/edit'
import {
  useInsertDeviceMutation,
  InsertDeviceMutationVariables,
} from '@/generated/graphql'

const PageCreateDeviceReport = () => {
  const navigate = useNavigate()

  const { enqueueSnackbar } = useSnackbar()

  const [insertDeviceMutation, { data, loading, error }] =
    useInsertDeviceMutation()

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
      // navigate(`device/${input.id}`)
    },
    [handleMessage, insertDeviceMutation]
  )

  if (error) {
    handleMessage('error', error.message || '创建失败，请检查。')
  }

  return <DeviceEdit isEdit={false} onSubmit={onSubmit} />
}

export { PageCreateDeviceReport as default }
