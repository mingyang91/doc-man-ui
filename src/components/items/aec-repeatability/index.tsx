import { Field } from 'react-final-form'
import { useMemo } from 'react'
import {
  Card,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from '@mui/material'

import { InspectionReportItem } from 'm/presets'

import { AECRepeatabilityData } from './type'
import {
  getAECRepeatabilityConclusion,
  initialAECRepeatabilityData,
} from './utils'
import { AECRepeatabilityHeader } from './components/header'
import { AECRepeatabilityRow } from './components/row'
import { ItemComponentProps } from '../common/type'
import { NewConclusion } from '../components/new-conclusion'

/**
 * AECRepeatabilityField
 * AEC重复性
 */
type AECRepeatabilityProps = ItemComponentProps<AECRepeatabilityData>

const AECRepeatabilityField = ({
  name,
  inspectionItem,
  requirement,
  item,
}: AECRepeatabilityProps) => {
  const initial = useMemo(() => initialAECRepeatabilityData(item.data), [])

  return (
    <Field<InspectionReportItem<AECRepeatabilityData>> name={name}>
      {({ input, meta: { touched, error } }) => (
        <>
          <Field<AECRepeatabilityData>
            name={`${name}.data`}
            initialValue={initial}
          >
            {({ input }) => (
              <TableContainer
                component={Card}
                elevation={1}
                sx={{ paddingY: 3, marginY: 3 }}
              >
                <Table>
                  <colgroup>
                    <col width="50%" />
                    <col width="50%" />
                  </colgroup>
                  <AECRepeatabilityHeader />
                  <TableBody>
                    <AECRepeatabilityRow
                      value={input.value}
                      onChange={input.onChange}
                    />
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Field>
          <NewConclusion<AECRepeatabilityData>
            name={name}
            inspectionItem={inspectionItem}
            data={input.value.data || initial}
            requirement={requirement}
            getConclusionMethod={getAECRepeatabilityConclusion}
          />
          {touched && error && (
            <Typography component="div" color="error">
              {error}
            </Typography>
          )}
        </>
      )}
    </Field>
  )
}

export default AECRepeatabilityField
