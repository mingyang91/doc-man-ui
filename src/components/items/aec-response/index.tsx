import {
  Card,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from '@mui/material'
import { Field } from 'react-final-form'
import { useMemo } from 'react'

import { InspectionReportItem } from 'm/presets'

import { AECResponseData } from './type'
import { AECResponseHeader } from './components/header'
import { AECResponseRow } from './components/row'
import { ItemComponentProps } from '../common/type'
import { getAECResponseConclusion, initialAECResponseData } from './utils'
import { NewConclusion } from '../components/new-conclusion'

/**
 * AECResponseField
 * AEC重复性
 */
type AECResponseFieldProps = ItemComponentProps<AECResponseData>

const AECResponseField = ({
  name,
  inspectionItem,
  requirement,
  item,
}: AECResponseFieldProps) => {
  const initial = useMemo(() => initialAECResponseData(item.data), [])
  return (
    <Field<InspectionReportItem<AECResponseData>> name={name}>
      {({ input, meta: { touched, error } }) => (
        <>
          <Field<AECResponseData> name={`${name}.data`} initialValue={initial}>
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
                    <AECResponseRow
                      value={input.value}
                      onChange={input.onChange}
                    />
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Field>
          <NewConclusion<AECResponseData>
            name={name}
            inspectionItem={inspectionItem}
            data={input.value.data || initial}
            requirement={requirement}
            getConclusionMethod={getAECResponseConclusion}
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

export default AECResponseField
