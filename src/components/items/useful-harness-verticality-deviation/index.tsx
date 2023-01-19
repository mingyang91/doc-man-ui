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

import { TextFieldWithUnit } from 'd/components/text-field-with-unit'

import { InspectionReportItem } from 'm/presets'

import { UHVDData } from './type'
import { UHVDHeader } from './components/header'
import { UHVDCondition } from './components/condition'
import { getUHVDConclusion, initialUHVDData } from './utils'
import { ItemComponentProps } from '../common/type'
import { NewConclusion } from '../components/new-conclusion'

/**
 * Useful harness verticality deviation
 * 有用线束垂直度偏离
 */

type UHVDFieldProps = ItemComponentProps<UHVDData>

const UHVDField = ({
  name,
  inspectionItem,
  requirement,
  item,
}: UHVDFieldProps) => {
  const initial = useMemo(() => initialUHVDData(item), [])

  return (
    <Field<InspectionReportItem<UHVDData>> name={name}>
      {({ input, meta: { touched, error } }) => (
        <>
          <Field<UHVDData> name={`${name}.data`} initialValue={initial}>
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
          <NewConclusion<UHVDData>
            name={name}
            inspectionItem={inspectionItem}
            data={input.value.data || initial}
            requirement={requirement}
            getConclusionMethod={getUHVDConclusion}
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

export default UHVDField
