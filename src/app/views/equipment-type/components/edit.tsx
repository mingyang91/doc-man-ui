import { LoadingButton } from '@mui/lab'
import { Button, DialogActions, Unstable_Grid2 as Grid } from '@mui/material'
import { useMemoizedFn } from 'ahooks'
import { TextField } from 'mui-rff'
import { ReactNode } from 'react'
import { Form, FormRenderProps } from 'react-final-form'

import { Modal } from 'd/components/modal'

import { ModalComponentBaseProps } from 'ctx/modal'

import { EquipmentTypes } from 'm/types'

import i18n from 'strings/i18n'


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
          {i18n.t('关闭')}
        </Button>
        <LoadingButton
          type="button"
          variant="contained"
          disabled={pristine || submitting}
          loading={submitting || isLoading}
          onClick={handleSubmit}
        >
          {isEdit ? i18n.t('保存设备类型更改') : i18n.t('新增类型')}
        </LoadingButton>
      </DialogActions>
    )
  })

  return (
    <Form onSubmit={onSubmit} initialValues={initialValue}>
      {({ submitting, pristine, handleSubmit }) => (
        <Modal
          title={isEdit ? i18n.t('编辑') : i18n.t('新增')}
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
              <TextField name="name" label={i18n.t('标识符')} fullWidth />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField name="displayName" label={i18n.t('名称')} fullWidth />
            </Grid>
            <Grid xs={12}>
              <TextField name="comment" label={i18n.t('备注')} fullWidth />
            </Grid>
          </Grid>
        </Modal>
      )}
    </Form>
  )
}
