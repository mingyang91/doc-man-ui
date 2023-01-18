import { FieldRenderProps, Field, useField } from 'react-final-form'
import { useFieldArray } from 'react-final-form-arrays'
import { useEffect } from 'react'
import { isEmpty } from 'lodash-es'
import {
  Card,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from '@mui/material'

import {
  InspectionReportItem,
  InspectionRequirement,
  InspectionTypeEnum,
} from 'm/presets'
import { Conclusions } from 'm/common'

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
        data: initialTVIDData(value, value.consts),
      })
    }
  }, [onChange, value, value.data])

  const { input: conclusion } = useField<Conclusions>(`${name}.conclusions`, {
    defaultValue: Conclusions.Unknown,
  })
  const { input: inputInspectionItem } =
    useField<InspectionTypeEnum>('inspectionItem')
  const { fields } = useFieldArray<TVIDDataItem>(`${name}.data`)
  const { input: inputRequirement } = useField<InspectionRequirement>(
    `${name}.requirement`
  )

  // FIX: value will be empty object when fields is empty list
  const fixData = Array.from(fields.value)

  return (
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
                initialTVIDDataItem({}, value.consts, value.data?.length || 0)
              )
            }
          />
        </Table>
      </TableContainer>
      <NewConclusion<TVIDData>
        conclusions={conclusion.value}
        inspectionItem={inputInspectionItem.value}
        data={fixData}
        requirement={inputRequirement.value}
        getConclusionMethod={getTVIDConclusion}
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

export default TVIDField
