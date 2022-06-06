import { merge } from 'lodash-es'

import { initPipeVoltage } from './pipe-voltage'
import { initFieldRadiationOutput } from './radiation-output'

import { DeviceInsertInput } from '@/generated/graphql'

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
