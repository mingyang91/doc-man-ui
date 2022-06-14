import { merge } from 'lodash-es'

import { DeviceSetInput, DeviceInsertInput, Device } from '@/generated/graphql'

import { initPipeVoltage } from './pipe-voltage'
import { initFieldRadiationOutput } from './radiation-output'

export const DeviceReportTitle = '检验检测报告'

export const initDeviceInput: (
  value?: Partial<Device | DeviceInsertInput>
) => DeviceSetInput = input => {
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
    } as DeviceSetInput,
    input
  )
}
