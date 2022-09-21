import { merge } from 'lodash-es'

import { AddressField } from 'm/presets'
import { ClientsInsertInput } from 'm/types'

import { initialLocationData } from '@@/location-selector/utils'

export const initialClientsFormData = (
  input?: ClientsInsertInput
): ClientsInsertInput =>
  merge<ClientsInsertInput, ClientsInsertInput | undefined>(
    {
      name: '',
      address: initialLocationData(undefined, true) as AddressField,
      comment: '',
    },
    input
  )
