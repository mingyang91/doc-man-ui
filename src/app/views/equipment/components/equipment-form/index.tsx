import { LoadingButton } from '@mui/lab'
import { Box, Unstable_Grid2 as Grid } from '@mui/material'
import { FormApi, SubmissionErrors } from 'final-form'
import { isEmpty } from 'lodash-es'
import { TextField } from 'mui-rff'
import { useMemo } from 'react'
import { Field, Form } from 'react-final-form'

import { DomainFormProps } from '@/modules/form'
import { useAuth } from '@/providers/auth'

import { Loading } from 'd/components/loading-screen'

import {
  EquipmentFormData,
  EquipmentFormValidation,
  initialEquipmentFormData,
  updateDecorator,
} from './utils'

import { ConsumerSelectorElement } from '@@/consumer-selector'
import { ConsumerSelectorValue } from '@@/consumer-selector/type'
import { EquipmentTypeSelectorElement } from '@@/equipmenttype-selector'
import { LocationSelectorElement } from '@@/location-selector'
import i18n from 'strings/i18n'


export type FnSubmitEquipment = (
  values: EquipmentFormData,
  form: FormApi<EquipmentFormData>,
  callback?: (errors?: SubmissionErrors) => void
) => Promise<void>

interface EquipmentFormProps extends DomainFormProps {
  consumerInfo?: ConsumerSelectorValue
  data?: EquipmentFormData
  submitForm?: FnSubmitEquipment
}

export const DeviceForm = ({
  isLoading,
  isEdit,
  data,
  submitForm = () => Promise.resolve(),
}: EquipmentFormProps) => {
  const { userInfo } = useAuth()

  const initialValues = useMemo(() => {
    if (isEdit) {
      return data ? initialEquipmentFormData(data) : {}
    }
    return initialEquipmentFormData({
      createrId: userInfo?.id,
    })
  }, [data, isEdit, userInfo?.id])

  return isEdit && isEmpty(initialValues) ? (
    <Loading />
  ) : (
    <Form<EquipmentFormData>
      decorators={[updateDecorator]}
      validate={EquipmentFormValidation}
      initialValues={initialValues}
      onSubmit={submitForm}
    >
      {({ handleSubmit, pristine, submitting }) => (
        <Grid container spacing={3}>
          <Grid xs={12} md={6}>
            <Field
              component={ConsumerSelectorElement}
              name="client"
              label={i18n.t('委托单位')}
              fullWidth
              isRequired
            />
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              name="equipmentName"
              label={i18n.t('设备名称')}
              type="text"
              required
              fullWidth
            />
          </Grid>
          <Grid xs={12}>
            <Field
              component={LocationSelectorElement}
              name="address"
              label={i18n.t('地址')}
              required
              fullWidth
              newLineForDetail={false}
            />
          </Grid>
          <Grid xs={12} md={6}>
            <Field
              name="equipmentTypeId"
              label={i18n.t('设备类型')}
              required
              fullWidth
              component={EquipmentTypeSelectorElement}
            />
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              name="equipmentSampleId"
              label={i18n.t('样品标识')}
              type="text"
              fullWidth
            />
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              name="equipmentModel"
              label={i18n.t('设备型号')}
              type="text"
              fullWidth
            />
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              name="equipmentCode"
              label={i18n.t('设备编号')}
              type="text"
              fullWidth
            />
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              name="equipmentManufacturer"
              label={i18n.t('制造厂商')}
              type="text"
              fullWidth
            />
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              name="equipmentSite"
              label={i18n.t('设备场所')}
              type="text"
              fullWidth
            />
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              name="inspectionInstrument"
              label={i18n.t('检测仪器')}
              type="text"
              fullWidth
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              name="comment"
              label={i18n.t('备注')}
              type="text"
              fullWidth
              multiline
              minRows={2}
              maxRows={8}
            />
          </Grid>
          <Grid xs={12} display="flex" justifyContent="space-between">
            <Box display="flex" justifyContent="flex-start"></Box>
            <Box display="flex" justifyContent="flex-end">
              <LoadingButton
                type="button"
                variant="contained"
                disabled={pristine || submitting}
                loading={submitting || isLoading}
                onClick={handleSubmit}
              >
                {!isEdit ? i18n.t('新增') : i18n.t('保存')}
              </LoadingButton>
            </Box>
          </Grid>
        </Grid>
      )}
    </Form>
  )
}
