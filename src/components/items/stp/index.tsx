import { Field } from 'react-final-form'
import { useMemo } from 'react'
import { isEmpty } from 'lodash-es'
import {
  Card,
  inputAdornmentClasses,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from '@mui/material'

import { InspectionReportItem } from 'm/presets'

import { StpData } from './type'
import { ItemComponentProps } from '../common/type'
import { getSTPConclusion, initialStpData } from './utils'
import { NewConclusion } from '../components/new-conclusion'
import { STPHeader } from './components/header'
import { STPRow } from './components/row'

type STPFieldProps = ItemComponentProps<StpData>

export default function STPField({
  name,
  inspectionItem,
  requirement,
  item,
}: STPFieldProps) {
  const initial = useMemo(() => initialStpData(item), [])
  return (
    <Field<InspectionReportItem<StpData>> name={name}>
      {({ input, meta: { touched, error } }) => (
        <>
          <Field<StpData> name={`${name}.data`} initialValue={initial}>
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
                  <STPHeader />
                  <TableBody>
                    <STPRow
                      name={`${name}.data`}
                      value={input.value}
                      onChange={input.onChange}
                    />
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Field>
          <NewConclusion<StpData>
            name={name}
            inspectionItem={inspectionItem}
            requirement={requirement}
            data={input.value.data || initial}
            getConclusionMethod={getSTPConclusion}
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
