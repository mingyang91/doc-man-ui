import { makeSearchWord, makeSimilarWords } from 'u/search'

import {
  FindEquipmentQuery,
  FindEquipmentQueryVariables,
} from 'm/equipment/index.generated'

import { LocationValue } from '../location-selector/type'

import { ConsumerSelectorValue } from '@@/consumer-selector'

export interface FindEquipmentFormData {
  client?: ConsumerSelectorValue
  equipmentName?: string
  equipmentCode?: string
  equipmentModel?: string
  address?: string
}

export interface FindEquipmentRow
  extends Omit<ArrayItem<FindEquipmentQuery['data']>, 'address'> {
  address?: LocationValue
}

export type FindEquipmentResult = FindEquipmentRow[]

export const transformToVariables = (input: FindEquipmentFormData) => {
  const conditions: Record<string, unknown>[] = []

  if (input.client) {
    conditions.push({
      clientId: { _eq: input.client.id },
    })
  }

  if (input.address) {
    conditions.push({
      address: {
        _cast: {
          String: {
            _similar: makeSimilarWords(input.address),
          },
        },
      },
    })
  }

  if (input.equipmentName) {
    conditions.push({
      equipmentName: {
        _ilike: makeSearchWord(input.equipmentName),
      },
    })
  }

  if (input.equipmentCode) {
    conditions.push({
      equipmentCode: {
        _ilike: makeSearchWord(input.equipmentCode),
      },
    })
  }

  if (input.equipmentModel) {
    conditions.push({
      equipmentModel: {
        _ilike: makeSearchWord(input.equipmentModel),
      },
    })
  }

  if (conditions.length) {
    if (conditions.length === 1) {
      return {
        where: conditions[0],
      } as FindEquipmentQueryVariables
    } else {
      return {
        where: {
          _and: conditions,
        },
      } as FindEquipmentQueryVariables
    }
  }

  return {} as FindEquipmentQueryVariables
}
