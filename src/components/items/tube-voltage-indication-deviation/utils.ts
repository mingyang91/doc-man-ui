import { map, merge } from 'lodash-es'

import { InspectionReportItem } from 'm/presets'

import { TVIDData, TVIDDataCondition, TVIDDataItem } from './type'

export const initialTVIDDataItem = (
  input: TVIDDataItem
): Required<TVIDDataItem> => {
  return {
    condition: merge(
      {
        factor: {
          current: {
            value: 0,
            unit: 'mA',
            name: '管电流',
          },
          timeProduct: {
            value: 0.125,
            unit: 'ms',
            name: '时间积',
          },
        },
        presets: {
          value: 60,
          unit: 'kV',
          name: '预设值',
        },
      },
      input.condition
    ),
    input: merge(
      {
        name: '管电压',
        unit: 'kV',
        offsets: [0, 0, 0],
        values: [0, 0, 0],
      },
      input.input
    ),
    result: merge(
      {
        scalar: {
          unit: 'kV',
          value: 0,
        },
        percentage: {
          unit: '%',
          value: 0,
        },
      },
      input.result
    ),
  }
}

export const initialTVIDData = (input: InspectionReportItem<TVIDData>) => {
  return map<TVIDDataCondition, TVIDDataItem>(
    input.condition as TVIDDataCondition[],
    condition => {
      return initialTVIDDataItem({ condition })
    }
  )
}
