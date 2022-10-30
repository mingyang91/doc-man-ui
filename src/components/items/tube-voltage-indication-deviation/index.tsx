import { FieldRenderProps, Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import { useEffect } from 'react'
import { isEmpty } from 'lodash-es'
import { Card, Table, TableBody, TableContainer } from '@mui/material'

import { HighlightSyntax } from 'd/components/highlight-syntax'

import { InspectionReportItem } from 'm/presets'

import { TVIDData, TVIDDataItem } from './type'
import { TVIDItem } from './components/item'
import { TVIDBar } from './components/bar'
import { initialTVIDData, initialTVIDDataItem } from './utils'
import { TVIDItemHeader } from './components/header'

/**
 * Tube Voltage Indication Deviation
 * 管电压指示偏离
 */

type TVIDFieldProps = FieldRenderProps<InspectionReportItem<TVIDData>>

const TVIDField = ({
  input: { name, value, onChange, onBlur, onFocus },
  meta: { touched, error },
}: TVIDFieldProps) => {
  useEffect(() => {
    if (isEmpty(value.data)) {
      onChange({
        ...value,
        data: initialTVIDData(value),
      })
    }
  }, [onChange, value, value.data])

  return (
    <>
      <HighlightSyntax code={JSON.stringify(value, null, 2)} />
      <FieldArray<TVIDDataItem> name={`${name}.data`}>
        {({ fields }) => (
          <TableContainer
            component={Card}
            elevation={1}
            sx={{ paddingY: 3, marginY: 3 }}
          >
            <Table>
              <colgroup>
                <col width="70%" />
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
              <TVIDBar onAdd={() => fields.push(initialTVIDDataItem({}))} />
            </Table>
          </TableContainer>
        )}
      </FieldArray>
    </>
  )
}

export default TVIDField
