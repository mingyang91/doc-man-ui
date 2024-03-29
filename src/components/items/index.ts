/* eslint-disable @typescript-eslint/no-explicit-any */
import { lazy } from 'react'

export { DefaultItem } from './common/component'

export const ItemComponents = {
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
  DeviationBetweenLightFieldAndIrradiationField: lazy(
    () =>
      import(
        /* webpackChunkName: "items/deviation-between-light-field-and-irradiation-field" */ './deviation-between-light-field-and-irradiation-field/index'
      )
  ),
  Ddi: lazy(() => import(/* webpackChunkName: "items/ddi" */ './ddi/index')),
  Stp: lazy(() => import(/* webpackChunkName: "items/stp" */ './stp/index')),
  ResponseUniformity: lazy(
    () =>
      import(
        /* webpackChunkName: "items/response-uniformity" */ './response-uniformity/index'
      )
  ),
  MeasurementError: lazy(() => import(/* webpackChunkName: "items/measurement-error" */ './measurement-error/index')),
  HighContrastResolution: lazy(() => import(/* webpackChunkName: "items/high-contrast-resolution" */ './high-contrast-resolution/index')),
}
