import { fDate } from 'u/format-time'

import { InspectionReportDetail, ReportRender } from 'm/presets'
import { formatSerialNumber } from 'm/common'

import { formatLocation } from '@@/location-selector/utils'
import { formatInspectiontype } from '@@/inspectiontype-selector'

export const convertToRenderParam = (
  input: InspectionReportDetail
): ReportRender => {
  return {
    device: {
      accordingTo: input?.inspectionBasis || '',
      address: formatLocation(input?.inspectionAddress),
      deviceNo: input?.equipmentCode || '',
      equipment: input?.inspectionInstrument || '',
      testItem: formatInspectiontype(input?.inspectionItem),
      model: input?.equipmentModel || '',
      deviceName: input?.equipmentName || '',
      sampleName: input?.equipmentSampleId || '',
      place: input?.equipmentSite || '',
      requester: input?.equipmentRequester || '',
      sampleNo: input?.equipmentSampleId || '',
      vendor: input?.equipmentManufacturer || '',
    },
    info: {
      reportNo: formatSerialNumber(input?.serialNumber),
      date: input?.inspectionDate ? fDate(input?.inspectionDate) : '',
    },
  }
}
