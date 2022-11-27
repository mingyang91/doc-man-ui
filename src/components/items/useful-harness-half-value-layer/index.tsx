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

import { UHHVLData } from './type'
import { initialUHHVLData } from './utils'
import { UHHVLHeader } from './components/header'
import { UHHVLRow } from './components/row'
import { UHHVLConclusion } from './components/conclusion'

/**
 * Useful Harness Half Value Layer
 * 有用线束半值层（mmAl）
 */
type UHHVLFieldProps = FieldRenderProps<InspectionReportItem<UHHVLData>>

const UHHVLField = ({
  input: { name, value, onChange, onBlur, onFocus },
  meta: { touched, error },
}: UHHVLFieldProps) => {
  useEffect(() => {
    if (isEmpty(value.data)) {
      onChange({
        ...value,
        data: initialUHHVLData(value.data),
      })
    }
  }, [onChange, value, value.data])

  return (
    <>
      <Field<UHHVLData> name={`${name}.data`}>
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
              <UHHVLHeader />
              <TableBody>
                <UHHVLRow value={input.value} onChange={input.onChange} />
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Field>
      <UHHVLConclusion name={name} />
      {touched && error && (
        <Typography component="div" color="error">
          {error}
        </Typography>
      )}
    </>
  )
}

export default UHHVLField
