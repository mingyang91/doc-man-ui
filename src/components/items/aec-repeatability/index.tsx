import { FieldRenderProps, Field } from 'react-final-form'
import { useEffect } from 'react'
import { isEmpty } from 'lodash-es'
import {
  Card,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from '@mui/material'

import { InspectionReportItem } from 'm/presets'

import { AECRepeatabilityData } from './type'
import { initialAECRepeatabilityData } from './utils'
import { AECRepeatabilityHeader } from './components/header'
import { AECRepeatabilityRow } from './components/row'
import { AECRepeatabilityConclusion } from './components/conclusion'

/**
 * AECRepeatabilityField
 * AEC重复性
 */
type AECRepeatabilityFieldProps = FieldRenderProps<
  InspectionReportItem<AECRepeatabilityData>
>

const AECRepeatabilityField = ({
  input: { name, value, onChange, onBlur, onFocus },
  meta: { touched, error },
}: AECRepeatabilityFieldProps) => {
  useEffect(() => {
    if (isEmpty(value.data)) {
      onChange({
        ...value,
        data: initialAECRepeatabilityData(value.data),
      })
    }
  }, [onChange, value, value.data])

  return (
    <>
      <Field<AECRepeatabilityData> name={`${name}.data`}>
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
      <AECRepeatabilityConclusion name={name} />
      {touched && error && (
        <Typography component="div" color="error">
          {error}
        </Typography>
      )}
    </>
  )
}

export default AECRepeatabilityField
