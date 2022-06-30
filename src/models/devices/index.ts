/* eslint-disable @typescript-eslint/no-explicit-any */
import { merge } from 'lodash-es'

import { DeviceSetInput, DeviceInsertInput, Device } from '@/generated/types'

import { initPipeVoltage, convertPipeVoltageTemplate } from './pipe-voltage'
import {
  convertRadiationOutputTemplate,
  initFieldRadiationOutput,
} from './radiation-output'
import { DeviceReportTemplate } from './type'

export * from './type'

export const DeviceReportTitle = '检验检测报告'

export const initDeviceInput: (
  value?: Partial<Device | DeviceInsertInput>
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
    } as DeviceSetInput,
    input
  )
}

export const convertDeviceToReport = (input: Device): DeviceReportTemplate => {
  return {
    device: {
      accordingTo: input.accordingTo ?? '',
      address: input.address ?? '',
      deviceNo: input.deviceNo ?? '',
      equipment: input.equipment ?? '',
      testItem: input.testItem ?? '',
      model: input.model ?? '',
      sampleName: input.sampleName ?? '',
      deviceName: input.deviceName ?? '',
      place: input.place ?? '',
      requester: input.requester ?? '',
      sampleNo: input.sampleNo ?? '',
      vendor: input.vendor ?? '',
    },
    info: {
      reportNo: input.reportNo ?? '',
      checkDate: input.checkDate ?? '',
    },
    items1: convertPipeVoltageTemplate(input),
    items2: convertRadiationOutputTemplate(input),
  }
}
