import { FieldRenderProps, Field } from 'react-final-form'
import { useEffect } from 'react'
import { isEmpty } from 'lodash-es'
import { Card, Table, TableBody, TableContainer } from '@mui/material'

import { InspectionReportItem } from 'm/presets'

import { DdiData } from './type'
import { initialDdiData } from './utils'
import { DdiHeader } from './components/header'
import { DdiRow } from './components/row'

/**
 * DDI
 * 探测器剂量指示(DDI)
 */
type DdiFieldProps = FieldRenderProps<InspectionReportItem<DdiData>>

const DdiField = ({
  input: { name, value, onChange, onBlur, onFocus },
  meta: { touched, error },
}: DdiFieldProps) => {
  useEffect(() => {
    if (isEmpty(value.data)) {
      onChange({
        ...value,
        data: initialDdiData(value.data),
      })
    }
  }, [onChange, value])

  return (
    <>
      <Field<DdiData> name={`${name}.data`}>
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
              <DdiHeader />
              <TableBody>
                <DdiRow
                  name={`${name}.data`}
                  value={input.value}
                  onChange={input.onChange}
                />
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Field>
    </>
  )
}

export default DdiField
