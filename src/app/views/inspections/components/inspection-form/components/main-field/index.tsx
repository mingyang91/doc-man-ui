import { Box } from '@mui/material'

import { InspectionReportItem } from 'm/presets'

import { InspectionReportFormData } from '../../utils'
import { SelectInspectItems } from './components/select-inspect-items'
import { ItemFields } from './components/item-fields'

import i18n from 'strings/i18n'

export interface MainFieldProps {
  inspectionItemType?: InspectionReportFormData['inspectionItem'] | null
  presetsItems?: InspectionReportItem<Record<string, unknown>>[]
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
        title={i18n.t('通用检测项目')}
        inspectionType={
          inspectionItemType as InspectionReportFormData['inspectionItem']
        }
      />
      <ItemFields
        name="items2"
        title={i18n.t('专用检测项目')}
        inspectionType={
          inspectionItemType as InspectionReportFormData['inspectionItem']
        }
      />
    </Box>
  )
}
