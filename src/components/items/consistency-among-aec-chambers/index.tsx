import {
  Card,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from '@mui/material'
import { Field, FieldRenderProps } from 'react-final-form'

import { InspectionReportItem } from 'm/presets'

import { ConsistencyAmongAECChambersData } from './type'
import { ConsistencyAmongAECChambersHeader } from './components/header'
import { ConsistencyAmongAECChambersConclusion } from './components/conclusion'
import { ConsistencyAmongAECChambersRow } from './components/row'

/**
 * ConsistencyAmongAECChambers
 * AEC重复性
 */
type ConsistencyAmongAECChambersFieldProps = FieldRenderProps<
  InspectionReportItem<ConsistencyAmongAECChambersData>
>

const ConsistencyAmongAECChambersField = ({
  input: { name, value, onChange, onBlur, onFocus },
  meta: { touched, error },
}: ConsistencyAmongAECChambersFieldProps) => {
  return (
    <>
      <Field<ConsistencyAmongAECChambersData> name={`${name}.data`}>
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
              <ConsistencyAmongAECChambersHeader />
              <TableBody>
                <ConsistencyAmongAECChambersRow
                  value={input.value}
                  onChange={input.onChange}
                />
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Field>
      <ConsistencyAmongAECChambersConclusion name={name} />
      {touched && error && (
        <Typography component="div" color="error">
          {error}
        </Typography>
      )}
    </>
  )
}

export default ConsistencyAmongAECChambersField
