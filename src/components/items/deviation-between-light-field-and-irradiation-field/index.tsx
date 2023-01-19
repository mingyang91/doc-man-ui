import { Field } from 'react-final-form'
import { useMemo } from 'react'
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
import { getDBLFAIFConclusion, initialDBLFAIFData } from './utils'
import { DBLFAIFDataResultInput } from './components/result-input'
import { ItemComponentProps } from '../common/type'
import { NewConclusion } from '../components/new-conclusion'

/**
 * Deviation Between LightFieldAndIrradiationField
 * 有用线束垂直度偏离
 */

type DBLFAIFFieldProps = ItemComponentProps<DBLFAIFData>

const DBLFAIFField = ({
  name,
  inspectionItem,
  requirement,
  item,
}: DBLFAIFFieldProps) => {
  const initial = useMemo(() => initialDBLFAIFData(item), [])

  return (
    <Field<InspectionReportItem<DBLFAIFData>> name={name}>
      {({ input, meta: { touched, error } }) => (
        <>
          <Field<DBLFAIFData> name={`${name}.data`} initialValue={initial}>
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
          <NewConclusion<DBLFAIFData>
            name={name}
            inspectionItem={inspectionItem}
            data={input.value.data || initial}
            requirement={requirement}
            getConclusionMethod={getDBLFAIFConclusion}
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

export default DBLFAIFField
