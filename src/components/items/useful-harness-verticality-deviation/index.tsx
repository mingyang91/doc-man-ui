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
import { useMemoizedFn } from 'ahooks'

import { TextFieldWithUnit } from 'd/components/text-field-with-unit'

import { InspectionReportItem } from 'm/presets'

import { UHVDData } from './type'
import { UHVDHeader } from './components/header'
import { UHVDCondition } from './components/condition'
import { UHVDConclusion } from './components/conclusion'

/**
 * Useful harness verticality deviation
 * 放射性输出重复性
 */

type UHVDFieldProps = FieldRenderProps<InspectionReportItem<UHVDData>>

const UHVDField = ({
  input: { name, value, onChange, onBlur, onFocus },
  meta: { touched, error },
}: UHVDFieldProps) => {
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
                <col width="20%" />
                <col width="50%" />
                <col width="30%" />
              </colgroup>
              <UHVDHeader />
              <TableBody>
                <TableRow>
                  <TableCell>
                    <UHVDCondition name={`${name}.data.condition`} />
                  </TableCell>
                  <TableCell>
                    <TextFieldWithUnit
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
