import { find, groupBy, isEqual, isEqualWith, merge } from 'lodash-es'
import { FormApi, SubmissionErrors } from 'final-form'

import {
  AddressField,
  EquipmentType,
  InspectionReportItem,
  InspectionRequirement,
  InspectionType,
  InspectionTypeEnum,
} from 'm/presets'
import { InspectionReport } from 'm/types'
import { InspectionTypesByEquipmentQuery } from 'm/equipment-type/index.generated'

import { initialEquipmentTypeData } from '@@/equipmenttype-selector'
import { LocationValue } from '@@/location-selector'
import { initialLocationData } from '@@/location-selector/utils'

export interface InspectionReportFormData
  extends Omit<
    InspectionReport,
    | 'id'
    | 'inspectionAddress'
    | 'equipmentType'
    | 'presetsItems'
    | 'items1'
    | 'items2'
    | 'items_aggregate'
  > {
  inspectionAddress?: LocationValue
  inspectionItem: InspectionType
  equipmentType: EquipmentType
  presetsItems: InspectionReportItem[]
  items1: InspectionReportItem[]
  items2: InspectionReportItem[]
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
      inspectionDate: new Date().toUTCString(),
      inspectionInstrument: '',
      inspectionItem: {
        type: InspectionTypeEnum.None,
        text: '',
      } as InspectionType,
      presetsItems: [] as InspectionReportItem[],
      items1: [] as InspectionReportFormData['items1'],
      items2: [] as InspectionReportFormData['items2'],
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

export const groupInspectionReportItemsByType = (
  items: InspectionReportItem[]
) => {
  const obj = groupBy(items, 'type') as {
    1: InspectionReportItem[]
    2: InspectionReportItem[]
  }

  return {
    items1: obj[1] || [],
    items2: obj[2] || [],
  }
}

export const transformToReportItems = (
  list: InspectionTypesByEquipmentQuery['list']
) => {
  return list.map(item => ({
    name: item.name,
    displayName: item.displayName,
    consts: item.consts as number[],
    requirement: item.requirement as InspectionRequirement,
    condition: item.condition,
    type: item.type,
    data: item.data,
  }))
}

export const inspectionItemsEqual = (
  itemsA: InspectionReportItem[],
  itemsB: InspectionReportItem[]
) => {
  return isEqualWith(itemsA, itemsB, (a, b) => {
    if (a.length !== b.length) {
      return false
    }

    if (a.length === 0 && b.length === 0) {
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
