import { TableRow, TableCell } from '@mui/material'
import { isArray } from 'lodash-es'

import { InspectionReportItem } from 'm/presets'
import { formatConclusion } from 'm/common'

import {
  CellCondition as UHVDCellCondition,
  CellResult as UHVDCellResult,
} from '@@/items/useful-harness-verticality-deviation/display'
import { UHVDData } from '@@/items/useful-harness-verticality-deviation/type'
import {
  CellCondition as RORCellCondition,
  CellResult as RORCellResult,
} from '@@/items/radiation-output-repeatability/display'
import { RORDataItem } from '@@/items/radiation-output-repeatability/type'
import {
  CellCondition as TVIDCellCondition,
  CellResult as TVIDCellResult,
} from '@@/items/tube-voltage-indication-deviation/display'
import { TVIDDataItem } from '@@/items/tube-voltage-indication-deviation/type'
import {
  CellCondition as CAACCellCondition,
  CellResult as CAACCellResult,
} from '@@/items/consistency-among-aec-chambers/display'
import {
  CellCondition as UHHVLCellCondition,
  CellResult as UHHVLCellResult,
} from '@@/items/useful-harness-half-value-layer/display'
import {
  CellCondition as AECRepeatabilityCellCondition,
  CellResult as AECRepeatabilityCellResult,
} from '@@/items/aec-repeatability/display'
import {
  CellCondition as AECResponseCellCondition,
  CellResult as AECResponseCellResult,
} from '@@/items/aec-response/display'
import {
  CellCondition as DBLFAIFCellCondition,
  CellResult as DBLFAIFCellResult,
} from '@@/items/deviation-between-light-field-and-irradiation-field/display'
import { AECRepeatabilityData } from '@@/items/aec-repeatability/type'
import { AECResponseData } from '@@/items/aec-response/type'
import { ConsistencyAmongAECChambersData } from '@@/items/consistency-among-aec-chambers/type'
import { UHHVLData } from '@@/items/useful-harness-half-value-layer/type'
import { DBLFAIFData } from '@@/items/deviation-between-light-field-and-irradiation-field/type'

interface InspectionItemRowProps {
  value: InspectionReportItem<Record<string, unknown>>
}

export const InspectionItemRow = ({ value }: InspectionItemRowProps) => {
  if (isArray(value.data)) {
    const rowSpan = value.data.length

    return (
      <>
        {value.data.map((item, index) => {
          let conditionCell: JSX.Element = <TableCell></TableCell>
          let resultCell: JSX.Element = <TableCell></TableCell>

          switch (value.name) {
            case 'tubeVoltageIndicationDeviation':
              conditionCell = <TVIDCellCondition {...(item as TVIDDataItem)} />
              resultCell = <TVIDCellResult {...(item as TVIDDataItem)} />
              break
            case 'radiationOutputRepeatability':
              conditionCell = <RORCellCondition {...(item as RORDataItem)} />
              resultCell = <RORCellResult {...(item as RORDataItem)} />
              break
          }

          return index ? (
            <TableRow key={`${item.name}-${index}`}>
              {conditionCell}
              {resultCell}
            </TableRow>
          ) : (
            <TableRow key={`${item.name}-${index}`}>
              <TableCell rowSpan={rowSpan}>{value.displayName}</TableCell>
              {conditionCell}
              {resultCell}
              <TableCell rowSpan={rowSpan}>
                {value.requirement?.acceptance.display}
              </TableCell>
              <TableCell rowSpan={rowSpan}>
                {value.requirement?.state.display}
              </TableCell>
              <TableCell rowSpan={rowSpan}>
                {formatConclusion(value.conclusions)}
              </TableCell>
            </TableRow>
          )
        })}
      </>
    )
  }

  let conditionCell: JSX.Element = <TableCell></TableCell>
  let resultCell: JSX.Element = <TableCell></TableCell>

  switch (value.name) {
    case 'usefulHarnessHalfValueLayer':
      conditionCell = (
        <UHHVLCellCondition {...(value as InspectionReportItem<UHHVLData>)} />
      )
      resultCell = (
        <UHHVLCellResult {...(value as InspectionReportItem<UHHVLData>)} />
      )
      break
    case 'AECRepeatability':
      conditionCell = (
        <AECRepeatabilityCellCondition
          {...(value as InspectionReportItem<AECRepeatabilityData>)}
        />
      )
      resultCell = (
        <AECRepeatabilityCellResult
          {...(value as InspectionReportItem<AECRepeatabilityData>)}
        />
      )
      break
    case 'AECResponse':
      conditionCell = (
        <AECResponseCellCondition
          {...(value as InspectionReportItem<AECResponseData>)}
        />
      )
      resultCell = (
        <AECResponseCellResult
          {...(value as InspectionReportItem<AECResponseData>)}
        />
      )
      break
    case 'ConsistencyAmongAECChambers':
      conditionCell = (
        <CAACCellCondition
          {...(value as InspectionReportItem<ConsistencyAmongAECChambersData>)}
        />
      )
      resultCell = (
        <CAACCellResult
          {...(value as InspectionReportItem<ConsistencyAmongAECChambersData>)}
        />
      )
      break
    case 'UsefulHarnessVerticalityDeviation':
      conditionCell = (
        <UHVDCellCondition {...(value as InspectionReportItem<UHVDData>)} />
      )
      resultCell = (
        <UHVDCellResult {...(value as InspectionReportItem<UHVDData>)} />
      )
      break
    case 'DeviationBetweenLightFieldAndIrradiationField':
      conditionCell = (
        <DBLFAIFCellCondition
          {...(value as InspectionReportItem<DBLFAIFData>)}
        />
      )
      resultCell = (
        <DBLFAIFCellResult {...(value as InspectionReportItem<DBLFAIFData>)} />
      )
      break
  }

  return (
    <TableRow>
      <TableCell>{value.displayName}</TableCell>
      {conditionCell}
      {resultCell}
      <TableCell>{value.requirement?.acceptance.display}</TableCell>
      <TableCell>{value.requirement?.state.display}</TableCell>
      <TableCell>{formatConclusion(value.conclusions)}</TableCell>
    </TableRow>
  )
}
