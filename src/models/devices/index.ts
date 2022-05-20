import { merge } from 'lodash-es'

import { DeviceInsertInput } from '@graphql'

export const initDeviceInput: (
  value?: Partial<DeviceInsertInput>
) => DeviceInsertInput = input => {
  return merge(
    {
      requester: '',
      address: '',
      reportNo: '',
      modelNo: '',
      deviceNo: '',
      vendor: '',
      place: '',
      accordingTo: '',
      equipment: '',
      name: '',
      sampleNo: '',
      item: '',
      pipeVoltage: {
        name: '管电压指示偏离',
        requirementAcceptance: '±5.0%或±5.0 kV内,以较大者控制',
        requirementState: '±5.0%或±5.0 kV内,以较大者控制',
        items: [
          {
            condition: {
              loadingFactor: '100 mA,0.125s',
              presetValue: '60',
            },
            value: '',
          },
        ],
      },
    } as DeviceInsertInput,
    input
  )
}
