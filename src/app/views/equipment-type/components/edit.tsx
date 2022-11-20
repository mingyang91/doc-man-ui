import { LoadingButton } from '@mui/lab'
import { Button, DialogActions, Unstable_Grid2 as Grid } from '@mui/material'
import { useMemoizedFn } from 'ahooks'
import { TextField } from 'mui-rff'
import { ReactNode } from 'react'
import { Form, FormRenderProps } from 'react-final-form'

import { Modal } from 'd/components/modal'

import { ModalComponentBaseProps } from 'ctx/modal'

import { EquipmentTypes } from 'm/types'

export interface FieldEditProps extends ModalComponentBaseProps {
  initialValue: Omit<
    EquipmentTypes,
    'inspectionItems' | 'inspectionItems_aggregate'
  >
  isEdit?: boolean
  isLoading?: boolean
  onSubmit: (
    value: Omit<EquipmentTypes, 'inspectionItems' | 'inspectionItems_aggregate'>
  ) => void
}

export const Edit = ({
  isEdit,
  initialValue,
  onSubmit,
  isLoading,
  isOpen = false,
  onClose,
}: FieldEditProps) => {
  const customActionRender = useMemoizedFn<
    (
      submitting: boolean,
      pristine: boolean,
      handleSubmit: FormRenderProps<
        Omit<EquipmentTypes, 'inspectionItems' | 'inspectionItems_aggregate'>
      >['handleSubmit']
    ) => (onClose: VoidFn) => ReactNode
  >((submitting, pristine, handleSubmit) => onClose => {
    return (
      <DialogActions>
        <Button onClick={() => onClose()} color="primary">
          关闭
        </Button>
        <LoadingButton
          type="button"
          variant="contained"
          disabled={pristine || submitting}
          loading={submitting || isLoading}
          onClick={handleSubmit}
        >
          {isEdit ? '保存设备类型更改' : '新增设备类型'}
        </LoadingButton>
      </DialogActions>
    )
  })

  return (
    <Form onSubmit={onSubmit} initialValues={initialValue}>
      {({ submitting, pristine, handleSubmit }) => (
        <Modal
          title={isEdit ? '编辑设备类型基本字段' : '新增设备类型'}
          isOpen={isOpen}
          onClose={onClose}
          onConfirm={handleSubmit}
          customActionRender={customActionRender(
            submitting,
            pristine,
            handleSubmit
          )}
        >
          <Grid container spacing={3}>
            <Grid xs={12} md={6}>
              <TextField name="name" label="标识符" fullWidth />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField name="displayName" label="名称" fullWidth />
            </Grid>
            <Grid xs={12}>
              <TextField name="comment" label="备注" fullWidth />
            </Grid>
          </Grid>
        </Modal>
      )}
    </Form>
  )
}
