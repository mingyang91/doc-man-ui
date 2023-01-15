import { Box, Typography } from '@mui/material'
import { FieldArray } from 'react-final-form-arrays'

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

  return (
    <>
      <Box>
        <Typography variant="h5">{title}</Typography>
      </Box>
      <FieldArray<InspectionReportItem> name={name}>
        {({ fields }) =>
          fields.map((name, index) => (
            <InspectionItem
              key={name}
              index={index}
              fieldName={name}
              removable={removable}
              onRemove={fields.remove}
            />
          ))
        }
      </FieldArray>
    </>
  )
}
