import { Box, Typography } from '@mui/material'
import { useEffect, useMemo } from 'react'
import { useField } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'

import { Loading } from 'd/components/loading-screen'

import { useInspectionTypesByEquipmentQuery } from 'm/equipment-type/index.generated'
import { InspectionReportItem, InspectionTypeEnum } from 'm/presets'

import {
  groupInspectionReportItems,
  inspectionItemsEqual,
  InspectionReportFormData,
} from '../../utils'
import { InspectionItem } from './components/item'
import { SelectInspectItems } from './components/select-inspect-items'

export interface MainFieldProps {
  isEdit?: boolean
}

export const MainField = ({ isEdit }: MainFieldProps) => {
  const {
    input: { value: equipmentType = null },
  } = useField<InspectionReportFormData['equipmentType']>('equipmentType')

  const {
    input: {
      value: inspectionType = {
        type: InspectionTypeEnum.None,
      },
    },
  } = useField<InspectionReportFormData['inspectionItem']>('inspectionItem')

  const { input } = useField<InspectionReportFormData['items']>('items')

  const { data, isLoading } = useInspectionTypesByEquipmentQuery(
    {
      equipmentTypeId: equipmentType?.id || '',
    },
    {
      enabled: !!equipmentType?.id,
      refetchOnReconnect: false,
      refetchOnMount: false,
    }
  )

  const removable = inspectionType.type !== InspectionTypeEnum.Acceptance

  const { using, notInUse } = useMemo(() => {
    const initialItems = (data?.list || []) as unknown as InspectionReportItem[]
    let { using, notInUse } = groupInspectionReportItems(
      initialItems,
      input.value
    )

    if (input.value.length == 0) {
      ;[using, notInUse] = [notInUse, using]
    }
    return { using, notInUse }
  }, [data?.list, input.value])

  useEffect(() => {
    if (!inspectionItemsEqual(using, input.value) && !isEdit) {
      input.onChange(using)
    }
  }, [input, isEdit, using])

  if (isLoading) {
    return (
      <Box>
        <Loading height="240px" />
        <Typography variant="subtitle1" textAlign="center">
          正在准备检测项，请稍候...
        </Typography>
      </Box>
    )
  }

  return (
    <Box>
      {notInUse.length ? (
        <Box p={3}>
          <SelectInspectItems options={notInUse} />
        </Box>
      ) : null}

      <FieldArray name="items">
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
    </Box>
  )
}
