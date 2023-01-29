import { fDate } from 'u/format-time'

import {
  InspectionReportDetail,
  InspectionReportItem,
  ReportRender,
  ReportRenderItem,
} from 'm/presets'
import { formatSerialNumber } from 'm/common'

import { formatLocation } from '@@/location-selector/utils'
import { toUHVDRenderItem } from '@@/items/useful-harness-verticality-deviation/utils'
import { formatInspectionType } from '@@/inspection-item-type-selector'
import { toRORRenderItem } from '@@/items/radiation-output-repeatability/utils'
import { toTVIDRenderItem } from '@@/items/tube-voltage-indication-deviation/utils'
import { toConsistencyAmongAECChamberRenderItem } from '@@/items/consistency-among-aec-chambers/utils'
import { toUHHVLRenderItem } from '@@/items/useful-harness-half-value-layer/utils'
import { toAECRepeatabilityRenderItem } from '@@/items/aec-repeatability/utils'
import { toAECResponseRenderItem } from '@@/items/aec-response/utils'
import { toDBLFAIFRenderItem } from '@@/items/deviation-between-light-field-and-irradiation-field/utils'
import { RORData } from '@@/items/radiation-output-repeatability/type'
import { TVIDData } from '@@/items/tube-voltage-indication-deviation/type'

export const convertToRenderParam = (
  input: InspectionReportDetail
): ReportRender => {
  const result: ReportRender = {
    device: {
      accordingTo: input?.inspectionBasis || '',
      address: formatLocation(input?.inspectionAddress),
      deviceNo: input?.equipmentCode || '',
      equipment: input?.inspectionInstrument || '',
      testItem: formatInspectionType(input?.inspectionItem),
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
    items1: [],
    items2: [],
  }

  input.items1.forEach(item => {
    let itemResult: ReportRenderItem[] = []

    switch (item.name) {
      case 'radiationOutputRepeatability':
        itemResult = toRORRenderItem(item as InspectionReportItem<RORData>)
        break
      case 'tubeVoltageIndicationDeviation':
        itemResult = toTVIDRenderItem(item as InspectionReportItem<TVIDData>)
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

    if (item.type === '1') {
      result.items1.push(...itemResult)
    } else {
      result.items2.push(...itemResult)
    }
  })

  return result
}
