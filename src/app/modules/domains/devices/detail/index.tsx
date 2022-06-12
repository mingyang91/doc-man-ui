import { DeviceByIdQuery } from '@generated/graphql'

interface DeviceDetailProps {
  dataSource?: DeviceByIdQuery['device_by_pk']
}

export const DeviceDetail = ({ dataSource }: DeviceDetailProps) => {
  console.log(dataSource)
  return <></>
}
