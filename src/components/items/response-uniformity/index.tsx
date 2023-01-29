import { Field } from 'react-final-form'
import { useMemo } from 'react'
import {
  Card,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from '@mui/material'

import { InspectionResults } from '@/views/inspections/components/inspection-form/utils'

import { InspectionReportItem } from 'm/presets'

import { RUData } from './type'
import { ItemComponentProps } from '../common/type'
import { getRUConclusion, initialRUData } from './utils'
import { NewConclusion } from '../components/new-conclusion'
import { RUHeader } from './components/header'
import { RURow } from './components/row'
import { StpData } from '../stp/type'

type RUFieldProps = ItemComponentProps<RUData>

function extractEquationFromResults(
  results: InspectionResults
): [number, number] | undefined {
  console.debug('RUField', results)
  if (!('Stp' in results)) return undefined
  const stpData = results['Stp'] as StpData
  const equation = stpData.result?.equation
  if (equation?.length !== 2) return undefined
  return [equation[0], equation[1]]
}

export default function RUField({
  name,
  inspectionItem,
  requirement,
  item,
  results,
}: RUFieldProps) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initial = useMemo(() => initialRUData(item), [])

  const equation = useMemo(() => extractEquationFromResults(results), [results])

  return (
    <Field<InspectionReportItem<RUData>> name={name}>
      {({ input, meta: { touched, error } }) => (
        <>
          <Field<RUData> name={`${name}.data`} initialValue={initial}>
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
                  <RUHeader />
                  <TableBody>
                    <RURow
                      name={`${name}.data`}
                      value={input.value}
                      equation={equation}
                      onChange={input.onChange}
                    />
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Field>
          <NewConclusion<RUData>
            name={name}
            inspectionItem={inspectionItem}
            requirement={requirement}
            data={input.value.data || initial}
            getConclusionMethod={getRUConclusion}
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
