import { merge } from 'lodash-es'

import { AddressField } from 'm/presets'
import { DeviceInsertInput } from 'm/types'

import { initialLocationData } from '@@/location-selector/utils'

export const initialDeviceFormData = (
  input?: DeviceInsertInput
): DeviceInsertInput =>
  merge<DeviceInsertInput, DeviceInsertInput | undefined>(
    {
      equipmentCode: '',
      equipmentManufacturer: '',
      equipmentModel: '',
      equipmentName: '',
      equipmentRequester: '',
      equipmentSampleId: '',
      equipmentSite: '',
      address: initialLocationData(undefined, true) as AddressField,
      inspectionInstrument: '',
      comment: '',
    },
    input
  )
