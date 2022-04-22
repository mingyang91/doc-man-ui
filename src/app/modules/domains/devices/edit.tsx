import { Field, Formik } from 'formik'
import { TextField } from 'formik-mui'
import { Typography, Grid, Button } from '@mui/material'
import { merge } from 'lodash-es'

import { DomainDeviceInput } from '@/graphql/type'

export type FnSubmitDevice = (values: DomainDeviceInput) => void

export type DeviceEditProps = {
  isEdit?: boolean
  initialValues?: Partial<DomainDeviceInput>
  onSubmit?: FnSubmitDevice
}

export const DeviceEdit = ({
  isEdit = false,
  initialValues,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onSubmit = () => {},
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
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Field
                component={TextField}
                name="requester"
                label="报告编号"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                component={TextField}
                name="address"
                label="检测地址"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                component={TextField}
                name="name"
                label="设备名称"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                component={TextField}
                name="sampleNo"
                label="样品标识"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                component={TextField}
                name="modelNo"
                label="设备型号"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                component={TextField}
                name="deviceNo"
                label="设备编号"
                type="text"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Field
                component={TextField}
                name="vendor"
                label="制造厂商"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                component={TextField}
                name="place"
                label="设备场所"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={TextField}
                name="accordingTo"
                label="检测依据"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={TextField}
                name="equipment"
                label="检测仪器"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={TextField}
                name="equipment"
                label="检测仪器"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                component={TextField}
                name="item"
                label="检测项目"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
              >
                保存
              </Button>
            </Grid>
          </Grid>
        )}
      </Formik>
    </>
  )
}
