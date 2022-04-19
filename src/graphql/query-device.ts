import { useQuery } from 'react-query'
import { gql } from 'graphql-request'

import { graphQLClient } from '@common/request'

import { DomainDevice } from './type'

const queryDevices = gql`
  query Devices($offset: Int, $limit: Int = 10) {
    device(offset: $offset) {
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

export const useQueryDevice = () => {
  const useDeviceList = (offset = 0, limit = 10) => {
    return useQuery(['device', offset, limit], async () => {
      const { data } = await graphQLClient.rawRequest<DomainDevice>(
        queryDevices,
        {
          offset,
          limit,
        }
      )
      return data
    })
  }
  return {
    useDeviceList,
  }
}
