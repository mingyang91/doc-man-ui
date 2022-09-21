import { merge } from 'lodash-es'

import { AddressField, InspectionType, InspectionTypeEnum } from 'm/presets'
import { InspectionReportInsertInput } from 'm/types'

import { initialLocationData } from '@@/location-selector/utils'

export const initialInspectionFormData = (
  input?: InspectionReportInsertInput
) =>
  merge(
    {
      equipmentCode: '',
      equipmentManufacturer: '',
      equipmentModel: '',
      equipmentName: '',
      equipmentRequester: '',
      equipmentSampleId: '',
      equipmentSite: '',
      inspectionAddress: initialLocationData(undefined, true) as AddressField,
      inspectionBasis: '',
      inspectionDate: Date.now(),
      inspectionInstrument: '',
      inspectionItem: {
        type: InspectionTypeEnum.None,
        text: '',
      } as InspectionType,
      items: {
        data: [],
      } as InspectionReportInsertInput['items'],
    } as InspectionReportInsertInput,
    input
  )
