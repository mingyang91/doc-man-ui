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
  AECRepeatability: lazy(
    () =>
      import(
        /* webpackChunkName: "items/aec-repeatability" */ './aec-repeatability/index'
      )
  ),
  AECResponse: lazy(
    () =>
      import(
        /* webpackChunkName: "items/aec-response" */ './aec-response/index'
      )
  ),
  ConsistencyAmongAECChambers: lazy(
    () =>
      import(
        /* webpackChunkName: "items/consistency-among-aec-chambers" */ './consistency-among-aec-chambers/index'
      )
  ),
  UsefulHarnessVerticalityDeviation: lazy(
    () =>
      import(
        /* webpackChunkName: "items/useful-harness-verticality-deviation" */ './useful-harness-verticality-deviation/index'
      )
  ),
}
