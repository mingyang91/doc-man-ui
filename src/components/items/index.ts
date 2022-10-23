/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, lazy } from 'react'
import { FieldRenderProps } from 'react-final-form'

import { InspectionReportItem } from 'm/presets'

export { DefaultItem } from './common/component'

export const ItemComponents: Record<
  string,
  FC<FieldRenderProps<InspectionReportItem>>
> = {
  TubeVoltageIndicationDeviation: lazy(
    () =>
      import(
        /* webpackChunkName: "items/tube-voltage-indication-deviation" */ './tube-voltage-indication-deviation/index'
      )
  ),
}
