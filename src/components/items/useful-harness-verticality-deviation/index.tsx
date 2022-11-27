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

import { TextFieldWithUnit } from 'd/components/text-field-with-unit'

import { InspectionReportItem } from 'm/presets'

import { UHVDData } from './type'
import { UHVDHeader } from './components/header'
import { UHVDCondition } from './components/condition'
import { UHVDConclusion } from './components/conclusion'
import { initialUHVDData } from './utils'

/**
 * Useful harness verticality deviation
 * 有用线束垂直度偏离
 */

type UHVDFieldProps = FieldRenderProps<InspectionReportItem<UHVDData>>

const UHVDField = ({
  input: { name, value, onChange, onBlur, onFocus },
  meta: { touched, error },
}: UHVDFieldProps) => {
  useEffect(() => {
    if (isEmpty(value.data)) {
      onChange({
        ...value,
        data: initialUHVDData(value),
      })
    }
  }, [onChange, value, value.data])

  return (
    <>
      <Field<UHVDData> name={`${name}.data`}>
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
              <UHVDHeader />
              <TableBody>
                <TableRow>
                  <TableCell>
                    <UHVDCondition name={`${name}.data.condition`} />
                  </TableCell>
                  <TableCell>
                    <TextFieldWithUnit
                      variant="standard"
                      value={value.result}
                      onChange={result => onChange({ ...value, result })}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Field>
      <UHVDConclusion name={name} />
      {touched && error && (
        <Typography component="div" color="error">
          {error}
        </Typography>
      )}
    </>
  )
}

export default UHVDField
