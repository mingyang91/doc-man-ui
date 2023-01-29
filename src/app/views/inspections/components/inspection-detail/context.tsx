import { createContext, useContext } from 'react'

import {
  EquipmentType,
  InspectionReportDetail,
  InspectionReportItem,
  InspectionType,
  ScalarTz,
  SerialNumber,
  UUIDV4,
} from 'm/presets'

import { LocationValue } from '@@/location-selector'

export interface InspectionReportData {
  items: InspectionReportItem<Record<string, unknown>>[]
  id: UUIDV4
  equipmentCode?: string | null
  inspectionAddress: LocationValue
  equipmentRequester?: string | null
  equipmentName?: string | null
  equipmentType?: EquipmentType | null
  equipmentManufacturer?: string | null
  equipmentModel?: string | null
  equipmentSampleId?: string | null
  equipmentSite?: string | null
  inspectionBasis?: string | null
  inspectionInstrument?: string | null
  inspectionDate?: ScalarTz | null
  inspectionItem: InspectionType | null
  createAt?: ScalarTz | null
  updatedAt?: ScalarTz | null
  serialNumber?: SerialNumber | null
}

const InspectionReportDataContext =
  createContext<InspectionReportDetail | null>(null)

InspectionReportDataContext.displayName = 'InspectionReportData'

export const InspectionReportDataProvider = InspectionReportDataContext.Provider

export const useInspectionReportData = () =>
  useContext(InspectionReportDataContext)
