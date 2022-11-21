import {
  Box,
  TableRow,
  TableCell,
  Button,
  SxProps,
  Theme,
  Card,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from '@mui/material'
import { useMemo, useEffect } from 'react'
import { useBoolean, useMemoizedFn } from 'ahooks'
import { isEmpty, isNil } from 'lodash-es'
import { produce } from 'immer'
import { Field, FieldRenderProps } from 'react-final-form'

import { TextFieldWithUnit } from 'd/components/text-field-with-unit'

import { InspectionReportItem } from 'm/presets'

import { AECResponseData } from './type'
import { initialAECResponseData } from './utils'
import { AECResponseHeader } from './components/header'
import { AECResponseConclusion } from './components/conclusion'
import { AECResponseRow } from './components/row'

/**
 * AECResponseField
 * AEC重复性
 */
type AECResponseFieldProps = FieldRenderProps<
  InspectionReportItem<AECResponseData>
>

const AECResponseField = ({
  input: { name, value, onChange, onBlur, onFocus },
  meta: { touched, error },
}: AECResponseFieldProps) => {
  useEffect(() => {
    if (isEmpty(value.data)) {
      onChange({
        ...value,
        data: initialAECResponseData(value.data),
      })
    }
  }, [onChange, value])

  return (
    <>
      <Field<AECResponseData> name={`${name}.data`}>
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
              <AECResponseHeader />
              <TableBody>
                <AECResponseRow value={input.value} onChange={input.onChange} />
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Field>
      <AECResponseConclusion name={name} />
      {touched && error && (
        <Typography component="div" color="error">
          {error}
        </Typography>
      )}
    </>
  )
}

export default AECResponseField
