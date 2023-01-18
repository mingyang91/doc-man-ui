import { FieldRenderProps, Field, useField } from 'react-final-form'
import {
  FieldArray,
  FieldArrayRenderProps,
  useFieldArray,
} from 'react-final-form-arrays'
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

import {
  InspectionReportItem,
  InspectionRequirement,
  InspectionTypeEnum,
} from 'm/presets'
import { Conclusions } from 'm/common'

import { RORData, RORDataItem } from './type'
import { getRORConclusion, initialRORData, initialRORDataItem } from './utils'
import { RORItemHeader } from './components/header'
import { RORItem } from './components/item'
import { RORBar } from './components/bar'
import { NewConclusion } from '../components/new-conclusion'

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

  const { input: conclusion } = useField<Conclusions>(`${name}.conclusions`, {
    defaultValue: Conclusions.Unknown,
  })
  const { input: inputInspectionItem } =
    useField<InspectionTypeEnum>('inspectionItem')
  const { fields: inputData } = useFieldArray<RORDataItem>(`${name}.data`)
  const { input: inputRequirement } = useField<InspectionRequirement>(
    `${name}.requirement`
  )

  // FIX: value will be empty object when fields is empty list
  const fixData = Array.from(inputData.value)

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
      <NewConclusion<RORData>
        conclusions={conclusion.value}
        inspectionItem={inputInspectionItem.value}
        data={fixData}
        requirement={inputRequirement.value}
        getConclusionMethod={getRORConclusion}
        onUseSuggestion={inter => conclusion.onChange(inter)}
      />
      {touched && error && (
        <Typography component="div" color="error">
          {error}
        </Typography>
      )}
    </>
  )
}

export default RORField
