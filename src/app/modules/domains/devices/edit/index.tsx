import { Field, Formik } from 'formik'
import { TextField } from 'formik-mui'
import { Typography, Grid, Button } from '@mui/material'
import { merge } from 'lodash-es'

import { DomainDeviceInput } from '@/graphql/type'

import { FormHeader } from './components/form-header'

export type FnSubmitDevice = (values: DomainDeviceInput) => Promise<void>

export type ComponentInFormikProps = {
  isSubmitting?: boolean
  submitForm?: FnSubmitDevice
}

export type DeviceEditProps = {
  isEdit?: boolean
  initialValues?: Partial<DomainDeviceInput>
  onSubmit?: FnSubmitDevice
}

export const DeviceEdit = ({
  isEdit = false,
  initialValues,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onSubmit = () => new Promise(() => {}),
}: DeviceEditProps) => {
  const _initialValues = merge(
    {
      requester: '',
      address: '',
      reportNo: '',
      modelNo: '',
      deviceNo: '',
      vendor: '',
      place: '',
      accordingTo: '',
      equipment: '',
      name: '',
      sampleNo: '',
      item: '',
    } as Partial<DomainDeviceInput>,
    initialValues
  )

  return (
    <>
      <Typography variant="h6" gutterBottom>
        {isEdit ? '编辑' : '新增'} 设备检验检测报告
      </Typography>
      <Formik initialValues={_initialValues} onSubmit={onSubmit}>
        {({ submitForm, isSubmitting }) => (
          <>
            <FormHeader isSubmitting={isSubmitting} />
            <Grid container spacing={3} xs={12}>
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
              >
                保存
              </Button>
            </Grid>
          </>
        )}
      </Formik>
    </>
  )
}
