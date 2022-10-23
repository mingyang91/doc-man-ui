import { Button, ButtonGroup, Unstable_Grid2 as Grid } from '@mui/material'
import { useMemoizedFn } from 'ahooks'
import { MdEdit } from 'react-icons/md'

import { FieldContent, FieldHeader, FieldLine } from 'd/components/data-display'
import Iconify from 'd/components/iconify'

import { useModal } from 'ctx/modal'

import { useUpdateEquipmentTypesByIdMutation } from 'm/equipment-type/index.generated'
import { UUIDV4 } from 'm/presets'
import { EquipmentTypes } from 'm/types'

import { Edit } from './edit'

interface FieldsProps {
  id: UUIDV4
  data: Omit<EquipmentTypes, 'inspectionItems' | 'inspectionItems_aggregate'>
  refetchHandler?: () => void
}
/**
 * 设备类型基本字段
 */
export const Fields = ({ id, data, refetchHandler }: FieldsProps) => {
  const { mutate, isLoading } = useUpdateEquipmentTypesByIdMutation({
    onSuccess: () => {
      closeEdit()
      refetchHandler?.()
    },
  })

  const onSubmit = useMemoizedFn<
    (
      value: Omit<
        EquipmentTypes,
        'inspectionItems' | 'inspectionItems_aggregate'
      >
    ) => void
  >(async data => {
    data.id = id
    mutate(data)
  })

  const [openEdit, closeEdit] = useModal(
    props => (
      <Edit
        {...props}
        isLoading={isLoading}
        initialValue={data}
        isEdit
        onSubmit={onSubmit}
      />
    ),
    [data, isLoading, onSubmit],
    {
      id: 'device-type-field-edit',
      props: {
        title: '编辑设备类型',
      },
    }
  )

  return (
    <Grid container spacing={3}>
      {/* line 1 */}
      <Grid xs={12}>
        <ButtonGroup>
          <Button
            variant="text"
            startIcon={<Iconify icon={MdEdit} />}
            onClick={() => openEdit()}
          >
            编辑基本字段
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid xs={12} sm={6}>
        <FieldLine>
          <FieldHeader>设备类型</FieldHeader>
          <FieldContent>{data?.displayName}</FieldContent>
        </FieldLine>
      </Grid>
      <Grid xs={12} sm={6}>
        <FieldLine>
          <FieldHeader>设备类型标识</FieldHeader>
          <FieldContent>{data?.name}</FieldContent>
        </FieldLine>
      </Grid>
      {/* line 2 */}
      <Grid xs={12}>
        <FieldLine>
          <FieldHeader>备注</FieldHeader>
          <FieldContent>{data.comment}</FieldContent>
        </FieldLine>
      </Grid>
    </Grid>
  )
}
