import { Button } from '@mui/material'
import { useMemoizedFn } from 'ahooks'
import { entries, isNil } from 'lodash-es'
import { useForm } from 'react-final-form'
import { MdDynamicForm } from 'react-icons/md'

import Iconify from 'd/components/iconify'

import { InspectionReportFormData } from '../../../utils'

import { FindEquipmentRow, useSearchModal } from 'components/find-equipment'
import i18n from 'strings/i18n'

export const FromEquipment = () => {
  const { batch, change } = useForm<InspectionReportFormData>()

  const onSelect = useMemoizedFn<(value: FindEquipmentRow) => void>(value => {
    batch(() => {
      entries(value).forEach(([key, value]) => {
        if (['id', 'equipmentTypeId'].includes(key)) {
          return
        }
        if (key === 'address' && !isNil(value)) {
          change('inspectionAddress', value)
          return
        }
        if (key === 'client' && !isNil(value?.name)) {
          change('equipmentRequester', value?.name)
          return
        }
        if (!isNil(value)) {
          change(
            key as keyof Omit<
              FindEquipmentRow,
              'address' | 'id' | 'equipmentTypeId' | 'client'
            >,
            value
          )
        }
      })
    })
  })

  const [show] = useSearchModal({
    onSelect,
  })

  return (
    <Button
      startIcon={<Iconify icon={MdDynamicForm} />}
      variant="contained"
      size="large"
      color="primary"
      onClick={() => show()}
    >
      {i18n.t('选择设备')}
    </Button>
  )
}
