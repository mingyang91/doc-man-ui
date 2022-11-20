/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, lazy } from 'react'
import { FieldRenderProps } from 'react-final-form'

import { InspectionReportItem } from 'm/presets'

export { DefaultItem } from './common/component'

export const ItemComponents: Record<
  string,
  FC<FieldRenderProps<InspectionReportItem>>
> = {
  tubeVoltageIndicationDeviation: lazy(
    () =>
      import(
        /* webpackChunkName: "items/tube-voltage-indication-deviation" */ './tube-voltage-indication-deviation/index'
      )
  ),
  radiationOutputRepeatability: lazy(
    () =>
      import(
        /* webpackChunkName: "items/radiation-output-repeatability" */ './radiation-output-repeatability/index'
      )
  ),
  usefulHarnessHalfValueLayer: lazy(
    () =>
      import(
        /* webpackChunkName: "items/useful-harness-half-value-layer" */ './useful-harness-half-value-layer/index'
      )
  ),
}
