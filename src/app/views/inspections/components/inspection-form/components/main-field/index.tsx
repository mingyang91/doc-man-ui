import { Box } from '@mui/material'

import { InspectionReportItem } from 'm/presets'

import { InspectionReportFormData } from '../../utils'
import { SelectInspectItems } from './components/select-inspect-items'
import { ItemFields } from './components/item-fields'

export interface MainFieldProps {
  inspectionItemType?: InspectionReportFormData['inspectionItem'] | null
  presetsItems?: InspectionReportItem[]
}

export const MainField = ({
  inspectionItemType,
  presetsItems = [],
}: MainFieldProps) => {
  return (
    <Box>
      <Box p={3}>
        <SelectInspectItems options={presetsItems} />
      </Box>
      <ItemFields
        name="items1"
        title="通用检测项"
        inspectionType={
          inspectionItemType as InspectionReportFormData['inspectionItem']
        }
      />
      <ItemFields
        name="items2"
        title="专用检测项"
        inspectionType={
          inspectionItemType as InspectionReportFormData['inspectionItem']
        }
      />
    </Box>
  )
}
