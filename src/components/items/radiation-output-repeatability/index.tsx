import { FieldRenderProps, Field, useField } from 'react-final-form'
import { FieldArrayRenderProps, useFieldArray } from 'react-final-form-arrays'
import { useEffect, useMemo } from 'react'
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
  input: { name, value },
  meta: { touched, error },
}: RORFieldProps) => {
  const initial = useMemo(() => initialRORData(value), [])

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
  const { fields } = useFieldArray<RORDataItem>(`${name}.data`, {
    defaultValue: initial,
  })
  const { input: inputRequirement } = useField<InspectionRequirement>(
    `${name}.requirement`
  )

  return (
    <>
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
      <NewConclusion<RORData>
        conclusions={conclusion.value}
        inspectionItem={inputInspectionItem.value}
        data={fields.value}
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
