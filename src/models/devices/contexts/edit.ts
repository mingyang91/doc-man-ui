import { gql, useMutation } from '@apollo/client'

import {
  DeviceSetInput,
  DeviceInsertInput,
  DeviceMutationResponse,
} from '@/generated/graphql'

const INSERT_DEVICE = gql`
  mutation CreateDevice($input: device) {
    insert_device_one(object: $input) {
      device
    }
  }
`

const UPDATE_DEVICE = gql`
  mutation UpdateDevice($input: device) {
    update_device_one(object: $input) {
      device
    }
  }
`

export const useInsertDevice = () => {
  const [createDevice, { data, loading, error }] = useMutation<
    DeviceMutationResponse,
    DeviceSetInput
  >(INSERT_DEVICE)

  return { createDevice, data, loading, error }
}

export const useUpdateDevice = () => {
  const [createDevice, { data, loading, error }] = useMutation<
    DeviceMutationResponse,
    DeviceInsertInput
  >(UPDATE_DEVICE)

  return { createDevice, data, loading, error }
}
