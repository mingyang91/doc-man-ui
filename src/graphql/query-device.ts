import { gql, useMutation, useQuery } from '@apollo/client'

import { nanoid } from '@/utils/uuid'

import { DomainDevice, DomainDeviceInput } from './type'

interface DomainDeviceData {
  device: DomainDevice[]
}

const queryDevices = gql`
  query Devices($offset: Int, $limit: Int = 10) {
    device(offset: $offset) {
      id
      accordingTo
      address
      create_time
      deviceNo
      equipment
      item
      modelNo
      name
      place
      requester
      sampleNo
      update_time
      vendor
    }
  }
`

const createDevices = gql`
  mutation CreateDevice(
    $id: uuid
    $accordingTo: String
    $address: String
    $deviceNo: String
    $equipment: String
    $item: String
    $modelNo: String
    $name: String
    $place: String
    $requester: String
    $sampleNo: String
    $vendor: String
  ) {
    insert_device_one(
      object: {
        id: $id
        accordingTo: $accordingTo
        address: $address
        deviceNo: $deviceNo
        equipment: $equipment
        item: $item
        modelNo: $modelNo
        name: $name
        place: $place
        requester: $requester
        sampleNo: $sampleNo
        vendor: $vendor
      }
    ) {
      accordingTo
      address
      create_time
      deviceNo
      equipment
      id
      item
      modelNo
      name
      place
      requester
      sampleNo
      update_time
      vendor
    }
  }
`

export const useQueryDevice = (pageSize = 10, offset = 0) => {
  const { loading, error, data } = useQuery<DomainDeviceData>(queryDevices, {
    variables: { offset, limit: pageSize },
  })
  return { loading, error, data: data?.device }
}

export const useCreateDevice = () => {
  const [createDevice, { data, loading, error }] = useMutation<
    DomainDeviceInput,
    DomainDeviceInput
  >(createDevices)

  return { createDevice, data, loading, error }
}
