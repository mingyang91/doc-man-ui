import { FieldRenderProps, Field } from 'react-final-form'
import { FieldArray, FieldArrayRenderProps } from 'react-final-form-arrays'
import { useEffect } from 'react'
import { isEmpty } from 'lodash-es'
import {
  Card,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from '@mui/material'
import { useMemoizedFn } from 'ahooks'

import { InspectionReportItem } from 'm/presets'

import { RORData, RORDataItem } from './type'
import { initialRORData, initialRORDataItem } from './utils'
import { RORItemHeader } from './components/header'
import { RORItem } from './components/item'
import { RORBar } from './components/bar'
import { RORConclusion } from './components/conclusion'

/**
 * Radiation Output Repeatability
 * 放射性输出重复性
 */

type RORFieldProps = FieldRenderProps<InspectionReportItem<RORData>>

const RORField = ({
  input: { name, value, onChange, onBlur, onFocus },
  meta: { touched, error },
}: RORFieldProps) => {
  useEffect(() => {
    if (isEmpty(value.data)) {
      onChange({
        ...value,
        data: initialRORData(value),
      })
    }
  }, [onChange, value, value.data])

  const onAdd = useMemoizedFn(
    (fields: FieldArrayRenderProps<RORDataItem, HTMLElement>['fields']) => {
      fields.push(initialRORDataItem({}, value.data?.length || 0))
    }
  )

  return (
    <>
      <FieldArray<RORDataItem> name={`${name}.data`}>
        {({ fields }) => (
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
              <RORItemHeader />
              <TableBody>
                {fields.map((name, index) => (
                  <Field name={name} key={name}>
                    {({ input }) => (
                      <RORItem
                        index={index}
                        value={input.value}
                        onChange={input.onChange}
                        onRemove={() => fields.remove(index)}
                      />
                    )}
                  </Field>
                ))}
              </TableBody>
              <RORBar onAdd={() => onAdd(fields)} />
            </Table>
          </TableContainer>
        )}
      </FieldArray>
      <RORConclusion name={name} />
      {touched && error && (
        <Typography component="div" color="error">
          {error}
        </Typography>
      )}
    </>
  )
}

export default RORField
