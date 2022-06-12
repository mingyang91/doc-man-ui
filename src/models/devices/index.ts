import { merge } from 'lodash-es'

import { DeviceInsertInput } from '@/generated/graphql'

import { initPipeVoltage } from './pipe-voltage'
import { initFieldRadiationOutput } from './radiation-output'


export const initDeviceInput: (
  value?: Partial<DeviceInsertInput>
) => DeviceInsertInput = input => {
  return merge(
    {
      requester: '',
      address: '',
      modelNo: '',
      deviceNo: '',
      vendor: '',
      place: '',
      accordingTo: '',
      equipment: '',
      name: '',
      sampleNo: '',
      item: '',
      pipeVoltage: initPipeVoltage(),
      radiationOutput: initFieldRadiationOutput(),
    } as DeviceInsertInput,
    input
  )
}
