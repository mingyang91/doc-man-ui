import { Box } from '@mui/material'
import { useEffect, useMemo } from 'react'
import { useField } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'

import { useInspectionTypesByEquipmentQuery } from 'm/equipment-type/index.generated'
import { InspectionReportItem, InspectionTypeEnum } from 'm/presets'

import {
  groupInspectionReportItems,
  inspectionItemsEqual,
  InspectionReportFormData,
} from '../../utils'
import { InspectionItem } from './components/item'
import { SelectInspectItems } from './components/select-inspect-items'

export const MainField = () => {
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

  const { data } = useInspectionTypesByEquipmentQuery(
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
    if (!inspectionItemsEqual(using, input.value)) {
      input.onChange(using)
    }
  }, [input, using])

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
