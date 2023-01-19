import { Field } from 'react-final-form'
import { useMemo } from 'react'
import {
  Card,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from '@mui/material'

import { InspectionReportItem } from 'm/presets'

import { DdiData } from './type'
import { getDdiConclusion, initialDdiData } from './utils'
import { DdiHeader } from './components/header'
import { DdiRow } from './components/row'
import { ItemComponentProps } from '../common/type'
import { NewConclusion } from '../components/new-conclusion'

/**
 * DDI
 * 探测器剂量指示(DDI)
 */
type DdiFieldProps = ItemComponentProps<DdiData>

const DdiField = ({
  name,
  inspectionItem,
  requirement,
  item,
}: DdiFieldProps) => {
  const initial = useMemo(() => initialDdiData(item.data), [])

  return (
    <Field<InspectionReportItem<DdiData>> name={name}>
      {({ input, meta: { touched, error } }) => (
        <>
          <Field<DdiData> name={`${name}.data`} initialValue={initial}>
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
          <NewConclusion<DdiData>
            name={name}
            inspectionItem={inspectionItem}
            data={input.value.data || initial}
            requirement={requirement}
            getConclusionMethod={getDdiConclusion}
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

export default DdiField
