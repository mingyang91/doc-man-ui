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
  presetsItems: InspectionReportItem<Record<string, unknown>>[]
  items1: InspectionReportItem<Record<string, unknown>>[]
  items2: InspectionReportItem<Record<string, unknown>>[]
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
      presetsItems: [] as InspectionReportItem<Record<string, unknown>>[],
      items1: [] as InspectionReportFormData['items1'],
      items2: [] as InspectionReportFormData['items2'],
    },
    input
  )

// 把项目按照设备类型分组
export const groupInspectionReportItems = (
  enums: InspectionReportItem<Record<string, unknown>>[],
  items: InspectionReportItem<Record<string, unknown>>[]
) => {
  const using: InspectionReportItem<Record<string, unknown>>[] = [],
    notInUse: InspectionReportItem<Record<string, unknown>>[] = []
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
  items: InspectionReportItem<Record<string, unknown>>[]
) => {
  const obj = groupBy(items, 'type') as {
    1: InspectionReportItem<Record<string, unknown>>[]
    2: InspectionReportItem<Record<string, unknown>>[]
  }

  return {
    items1: obj[1] || [],
    items2: obj[2] || [],
  }
}

function isInspectionRequirement(val: unknown): val is InspectionRequirement {
  if (val === undefined || val === null) return false
  if (!(val instanceof Object)) return false
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fix: any = val
  return InspectionTypeEnum.State in fix && InspectionTypeEnum.Acceptance in fix
}

function isRecord(val: unknown): val is Record<string, unknown> {
  if (val === undefined || val === null) return false
  return !(val instanceof Object)
}

export const transformToReportItems = (
  list: InspectionTypesByEquipmentQuery['list']
): InspectionReportItem<Record<string, unknown>>[] => {
  return list.map(item => {
    console.assert(
      item.consts instanceof Array,
      'consts must be Array of number'
    )
    console.assert(isRecord(item.data), 'data must be Object')
    console.assert(
      isInspectionRequirement(item.requirement),
      'requirement must be InspectionRequirement'
    )
    return {
      name: item.name,
      displayName: item.displayName,
      consts: item.consts as number[],
      requirement: item.requirement as InspectionRequirement,
      condition: item.condition,
      type: item.type,
      data: item.data as Record<string, unknown>,
    }
  })
}

export const inspectionItemsEqual = (
  itemsA: InspectionReportItem<Record<string, unknown>>[],
  itemsB: InspectionReportItem<Record<string, unknown>>[]
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

export type InspectionResults = Record<string, Record<string, unknown>>
