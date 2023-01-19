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

import { ConsistencyAmongAECChambersData } from './type'
import { ConsistencyAmongAECChambersHeader } from './components/header'
import { ConsistencyAmongAECChambersRow } from './components/row'
import { ItemComponentProps } from '../common/type'
import { NewConclusion } from '../components/new-conclusion'
import {
  getConsistencyAmongAECChambers,
  initialConsistencyAmongAECChambersData,
} from './utils'

/**
 * ConsistencyAmongAECChambers
 * AEC重复性
 */
type ConsistencyAmongAECChambersFieldProps =
  ItemComponentProps<ConsistencyAmongAECChambersData>

const ConsistencyAmongAECChambersField = ({
  name,
  inspectionItem,
  requirement,
  item,
}: ConsistencyAmongAECChambersFieldProps) => {
  const initial = useMemo(
    () => initialConsistencyAmongAECChambersData(item.data),
    []
  )
  return (
    <Field<InspectionReportItem<ConsistencyAmongAECChambersData>> name={name}>
      {({ input, meta: { touched, error } }) => (
        <>
          <Field<ConsistencyAmongAECChambersData> name={`${name}.data`}>
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
                  <ConsistencyAmongAECChambersHeader />
                  <TableBody>
                    <ConsistencyAmongAECChambersRow
                      value={input.value}
                      onChange={input.onChange}
                    />
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Field>
          <NewConclusion<ConsistencyAmongAECChambersData>
            name={name}
            inspectionItem={inspectionItem}
            data={input.value.data || initial}
            requirement={requirement}
            getConclusionMethod={getConsistencyAmongAECChambers}
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

export default ConsistencyAmongAECChambersField
