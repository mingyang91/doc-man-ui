import { gql } from '@apollo/client'

export const HEADER_DEVICE_FIELDS = gql`
  fragment headerDeviceFields on device {
    id
    accordingTo
    address
    createTime
    deviceNo
    equipment
    item
    modelNo
    name
    place
    requester
    sampleNo
    updateTime
    vendor
  }
`
