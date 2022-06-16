/* eslint-disable @typescript-eslint/no-explicit-any */
import { isFunction, merge } from 'lodash-es'

import { DeviceSetInput, DeviceInsertInput, Device } from '@/generated/graphql'

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

export const convertDeviceToReport = (input: Device): DeviceReportTemplate => {
  return {
    device: {
      accordingTo: input.accordingTo ?? '',
      address: input.address ?? '',
      deviceNo: input.deviceNo ?? '',
      equipment: input.equipment ?? '',
      item: input.item ?? '',
      modelNo: input.modelNo ?? '',
      name: input.name ?? '',
      place: input.place ?? '',
      requester: input.requester ?? '',
      sampleNo: input.sampleNo ?? '',
      checkDate: input.checkDate ?? '',
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
