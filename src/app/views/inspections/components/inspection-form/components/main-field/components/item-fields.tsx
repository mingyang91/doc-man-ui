import { Box, Typography } from '@mui/material'
import { useFieldArray } from 'react-final-form-arrays'

import {
  InspectionReportItem,
  InspectionType,
  InspectionTypeEnum,
} from 'm/presets'

import { InspectionItem } from './item'

export interface ItemFieldsProps {
  inspectionType: InspectionType
  title: string
  name: string
}

export const ItemFields = ({
  inspectionType,
  title,
  name,
}: ItemFieldsProps) => {
  const removable = inspectionType.type !== InspectionTypeEnum.Acceptance
  const { fields } =
    useFieldArray<InspectionReportItem<Record<string, unknown>>>(name)
  const results: Record<string, Record<string, unknown>> = fields.value.reduce(
    (obj, next) => ({ ...obj, [next.name]: next.data }),
    {}
  )

  return (
    <>
      <Box>
        <Typography variant="h5">{title}</Typography>
      </Box>
      {fields.map((name, index) => (
        <InspectionItem
          key={name}
          index={index}
          fieldName={name}
          removable={removable}
          onRemove={fields.remove}
          results={results}
        />
      ))}
    </>
  )
}
