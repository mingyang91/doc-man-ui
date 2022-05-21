import { useNavigate } from 'react-router-dom'
import { ReactNode, useCallback } from 'react'
import { useSnackbar, VariantType } from 'notistack'

import { DeviceEdit } from '@@/modules/domains/devices/edit'
import {
  useInsertDeviceMutation,
  InsertDeviceMutationVariables,
} from '@/generated/graphql'
import { nanoid } from '@/utils/uuid'

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
      console.log(input, loading)
      input.id = nanoid.uuid()
      await insertDeviceMutation({
        variables: {
          input,
        },
      })
      // navigate(`device/${input.id}`)
    },
    [loading, insertDeviceMutation]
  )

  if (error) {
    handleError('error', error.message || '创建失败，请检查。')
  }

  return <DeviceEdit isEdit={false} onSubmit={onSubmit} />
}
