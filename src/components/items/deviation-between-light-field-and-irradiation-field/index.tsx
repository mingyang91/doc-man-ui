import { FieldRenderProps, Field } from 'react-final-form'
import { useEffect } from 'react'
import { isEmpty } from 'lodash-es'
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material'

import { InspectionReportItem } from 'm/presets'

import { DBLFAIFData } from './type'
import { DBLFAIFHeader } from './components/header'
import { DBLFAIFCondition } from './components/condition'
import { DBLFAIFConclusion } from './components/conclusion'
import { initialDBLFAIFData } from './utils'
import { DBLFAIFDataResultInput } from './components/result-input'

/**
 * Deviation Between LightFieldAndIrradiationField
 * 有用线束垂直度偏离
 */

type DBLFAIFFieldProps = FieldRenderProps<InspectionReportItem<DBLFAIFData>>

const DBLFAIFField = ({
  input: { name, value, onChange, onBlur, onFocus },
  meta: { touched, error },
}: DBLFAIFFieldProps) => {
  useEffect(() => {
    if (isEmpty(value.data)) {
      onChange({
        ...value,
        data: initialDBLFAIFData(value),
      })
    }
  }, [onChange, value, value.data])

  return (
    <>
      <Field<DBLFAIFData> name={`${name}.data`}>
        {({ input: { value, onChange } }) => (
          <TableContainer
            component={Card}
            elevation={1}
            sx={{ paddingY: 3, marginY: 3 }}
          >
            <Table>
              <colgroup>
                <col width="30%" />
                <col width="70%" />
              </colgroup>
              <DBLFAIFHeader />
              <TableBody>
                <TableRow>
                  <TableCell>
                    <DBLFAIFCondition name={`${name}.data.condition`} />
                  </TableCell>
                  <TableCell>
                    <Field
                      name={`${name}.data.result`}
                      component={DBLFAIFDataResultInput}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Field>
      <DBLFAIFConclusion name={name} />
      {touched && error && (
        <Typography component="div" color="error">
          {error}
        </Typography>
      )}
    </>
  )
}

export default DBLFAIFField
