import { find, isEqual, isEqualWith, merge } from 'lodash-es'
import { FormApi, SubmissionErrors } from 'final-form'

import {
  AddressField,
  EquipmentType,
  InspectionReportItem,
  InspectionType,
  InspectionTypeEnum,
} from 'm/presets'
import { InspectionReport } from 'm/types'

import { initialEquipmentTypeData } from '@@/equipmenttype-selector'
import { LocationValue } from '@@/location-selector'
import { initialLocationData } from '@@/location-selector/utils'

export interface InspectionReportFormData
  extends Omit<
    InspectionReport,
    'id' | 'inspectionAddress' | 'equipmentType' | 'items' | 'items_aggregate'
  > {
  inspectionAddress?: LocationValue
  inspectionItem: InspectionType
  equipmentType: EquipmentType
  items: InspectionReportItem[]
}

export type FnSubmitInspectionReport = (
  values: InspectionReportFormData,
  form: FormApi<InspectionReportFormData>,
  callback?: (errors?: SubmissionErrors) => void
) => Promise<void>

export const initialInspectionFormData = (
  input?: Partial<InspectionReportFormData>
) =>
  merge<
    InspectionReportFormData,
    Partial<InspectionReportFormData> | undefined
  >(
    {
      equipmentCode: '',
      equipmentManufacturer: '',
      equipmentModel: '',
      equipmentName: '',
      equipmentType: initialEquipmentTypeData(),
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
      items: [] as InspectionReportFormData['items'],
    },
    input
  )

// 把项目按照设备类型分组
export const groupInspectionReportItems = (
  enums: InspectionReportItem[],
  items: InspectionReportItem[]
) => {
  const using: InspectionReportItem[] = [],
    notInUse: InspectionReportItem[] = []
  enums.forEach(item => {
    const found = find(items, { name: item.name })
    if (found !== undefined) {
      using.push(found)
    } else {
      notInUse.push(item)
    }
  })
  return { using, notInUse }
}

export const inspectionItemsEqual = (
  items1: InspectionReportItem[],
  items2: InspectionReportItem[]
) => {
  return isEqualWith(items1, items2, (a, b) => {
    if (a.length !== b.length) {
      return false
    }

    if (a.length === 0) {
      return true
    }

    for (let i = 0; i < a.length; i++) {
      const bItem = find(b, { name: a[i].name })
      if (!isEqual(a[i], bItem)) {
        return false
      }
    }

    return true
  })
}
