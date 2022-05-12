import { gql, useQuery } from '@apollo/client'

import { Device } from '@/generated/graphql'

import { HEADER_DEVICE_FIELDS } from './scripts'

const QUERY_DEVICES_LIST = gql`
  ${HEADER_DEVICE_FIELDS}
  query devices($offset: Int, $limit: Int = 10) {
    device(offset: $offset) {
      ...HeaderDeviceFields
    }
  }
`

export const useQueryDevice = (pageSize = 10, offset = 0) => {
  const { loading, error, data } = useQuery<{
    device: Pick<
      Device,
      | 'id'
      | 'accordingTo'
      | 'address'
      | 'createTime'
      | 'deviceNo'
      | 'equipment'
      | 'item'
      | 'modelNo'
      | 'name'
      | 'place'
      | 'requester'
      | 'sampleNo'
      | 'updateTime'
      | 'vendor'
    >[]
  }>(QUERY_DEVICES_LIST, {
    variables: { offset, limit: pageSize },
  })
  return { loading, error, data: data?.device }
}
