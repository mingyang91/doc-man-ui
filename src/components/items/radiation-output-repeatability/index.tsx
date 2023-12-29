import { Field } from 'react-final-form'
import { FieldArrayRenderProps, useFieldArray } from 'react-final-form-arrays'
import { useMemo } from 'react'
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
import { getRORConclusion, initialRORData, initialRORDataItem } from './utils'
import { RORItemHeader } from './components/header'
import { RORItem } from './components/item'
import { RORBar } from './components/bar'
import { NewConclusion } from '../components/new-conclusion'
import { ItemComponentProps } from '../common/type'

/**
 * Radiation Output Repeatability
 * 放射性输出重复性
 */

type RORProps = ItemComponentProps<RORData>

const RORField = ({ name, inspectionItem, requirement, item }: RORProps) => {
  const initial = useMemo(() => initialRORData(item), [])

  const onAdd = useMemoizedFn(
    (fields: FieldArrayRenderProps<RORDataItem, HTMLElement>['fields']) => {
      fields.push(initialRORDataItem({}, item.data?.items?.length || 0))
    }
  )

  const { fields } = useFieldArray<RORDataItem>(`${name}.data`, {
    initialValue: initial.items,
  })

  return (
    <Field<InspectionReportItem<RORData>> name={name}>
      {({ meta: { touched, error } }) => (
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
            name={name}
            inspectionItem={inspectionItem}
            data={{ items: fields.value }}
            requirement={requirement}
            getConclusionMethod={getRORConclusion}
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

export default RORField
