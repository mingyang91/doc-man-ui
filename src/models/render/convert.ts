import { fDate } from 'u/format-time'

import {
  InspectionReportDetail,
  ReportRender,
  ReportRenderItem,
} from 'm/presets'
import { formatSerialNumber } from 'm/common'

import { toUHVDRenderItem } from '../../components/items/useful-harness-verticality-deviation/utils'

import { formatLocation } from '@@/location-selector/utils'
import { formatInspectiontype } from '@@/inspectiontype-selector'
import { toRORRenderItem } from '@@/items/radiation-output-repeatability/utils'
import { toTVIDRenderItem } from '@@/items/tube-voltage-indication-deviation/utils'
import { toConsistencyAmongAECChamberRenderItem } from '@@/items/consistency-among-aec-chambers/utils'
import { toUHHVLRenderItem } from '@@/items/useful-harness-half-value-layer/utils'
import { toAECRepeatabilityRenderItem } from '@@/items/aec-repeatability/utils'
import { toAECResponseRenderItem } from '@@/items/aec-response/utils'
import { toDBLFAIFRenderItem } from '@@/items/deviation-between-light-field-and-irradiation-field/utils'

export const convertToRenderParam = (
  input: InspectionReportDetail
): ReportRender => {
  const result: ReportRender = {
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

  input.items.forEach((item, index) => {
    let itemResult: ReportRenderItem[] = []

    switch (item.name) {
      case 'radiationOutputRepeatability':
        itemResult = toRORRenderItem(item)
        break
      case 'tubeVoltageIndicationDeviation':
        itemResult = toTVIDRenderItem(item)
        break
      case 'ConsistencyAmongAECChambers':
        itemResult = toConsistencyAmongAECChamberRenderItem(item)
        break
      case 'usefulHarnessHalfValueLayer':
        itemResult = toUHHVLRenderItem(item)
        break
      case 'AECRepeatability':
        itemResult = toAECRepeatabilityRenderItem(item)
        break
      case 'AECResponse':
        itemResult = toAECResponseRenderItem(item)
        break
      case 'UsefulHarnessVerticalityDeviation':
        itemResult = toUHVDRenderItem(item)
        break
      case 'DeviationBetweenLightFieldAndIrradiationField':
        itemResult = toDBLFAIFRenderItem(item)
        break
    }

    result[`items${index + 1}`] = itemResult
  })

  return result
}
