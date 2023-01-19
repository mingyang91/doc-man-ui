import { Field } from 'react-final-form'
import { useFieldArray } from 'react-final-form-arrays'
import {
  Card,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from '@mui/material'
import { useMemo } from 'react'

import { InspectionReportItem } from 'm/presets'

import { TVIDData, TVIDDataItem } from './type'
import { TVIDItem } from './components/item/index'
import { TVIDBar } from './components/bar'
import {
  getTVIDConclusion,
  initialTVIDData,
  initialTVIDDataItem,
} from './utils'
import { TVIDItemHeader } from './components/header'
import { NewConclusion } from '../components/new-conclusion'
import { ItemComponentProps } from '../common/type'

/**
 * Tube Voltage Indication Deviation
 * 管电压指示偏离
 */

type TVIDProps = ItemComponentProps<TVIDData>

const TVIDField = ({ name, inspectionItem, requirement, item }: TVIDProps) => {
  const initial = useMemo(() => initialTVIDData(item, item.consts), [])
  const { fields } = useFieldArray<TVIDDataItem>(`${name}.data`, {
    initialValue: initial,
  })
  console.debug('TVIDField.fields', fields)

  return (
    <Field<InspectionReportItem<TVIDData>> name={name}>
      {({ meta: { touched, error } }) => (
        <>
          {/* <HighlightSyntax code={JSON.stringify(value, null, 2)} /> */}
          <TableContainer
            component={Card}
            elevation={1}
            sx={{ paddingY: 3, marginY: 3 }}
          >
            <Table>
              <colgroup>
                <col width="20%" />
                <col width="50%" />
                <col width="30%" />
              </colgroup>
              <TVIDItemHeader />
              <TableBody>
                {fields.map((name, index) => (
                  <Field name={name} key={name}>
                    {({ input }) => (
                      <TVIDItem
                        index={index}
                        value={input.value}
                        onChange={input.onChange}
                        onRemove={() => fields.remove(index)}
                      />
                    )}
                  </Field>
                ))}
              </TableBody>
              <TVIDBar
                onAdd={() =>
                  fields.push(
                    initialTVIDDataItem({}, item.consts, item.data?.length || 0)
                  )
                }
              />
            </Table>
          </TableContainer>
          <NewConclusion<TVIDData>
            name={name}
            inspectionItem={inspectionItem}
            data={fields.value}
            requirement={requirement}
            getConclusionMethod={getTVIDConclusion}
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

export default TVIDField
