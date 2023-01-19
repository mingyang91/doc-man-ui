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

import { UHHVLData } from './type'
import { getUHHVLConclusion, initialUHHVLData } from './utils'
import { UHHVLHeader } from './components/header'
import { UHHVLRow } from './components/row'
import { ItemComponentProps } from '../common/type'
import { NewConclusion } from '../components/new-conclusion'

/**
 * Useful Harness Half Value Layer
 * 有用线束半值层（mmAl）
 */
type UHHVLProps = ItemComponentProps<UHHVLData>

const UHHVLField = ({
  name,
  inspectionItem,
  requirement,
  item,
}: UHHVLProps) => {
  const initial = useMemo(() => initialUHHVLData(item.data), [])

  return (
    <Field<InspectionReportItem<UHHVLData>> name={name}>
      {({ input, meta: { touched, error } }) => (
        <>
          <Field<UHHVLData> name={`${name}.data`} initialValue={initial}>
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
                  <UHHVLHeader />
                  <TableBody>
                    <UHHVLRow value={input.value} onChange={input.onChange} />
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Field>
          <NewConclusion<UHHVLData>
            name={name}
            inspectionItem={inspectionItem}
            data={input.value.data || initial}
            requirement={requirement}
            getConclusionMethod={getUHHVLConclusion}
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

export default UHHVLField
