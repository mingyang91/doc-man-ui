import { LoadingButton } from '@mui/lab'
import { Box, Grid } from '@mui/material'
import { Field, Formik, FormikHelpers } from 'formik'
import { TextField } from 'formik-mui'
import { useMemo } from 'react'

import { DomainFormProps } from '@/modules/form'
import { useAuth } from '@/providers/auth'

import { DeviceInsertInput } from 'm/types'

import { initialDeviceFormData } from './utils'

import { LocationSelectorFormik } from '@@/location-selector'

export type FnSubmitDevice = (
  values: DeviceInsertInput,
  helper: FormikHelpers<DeviceInsertInput>
) => Promise<void>

interface DeviceFormProps extends DomainFormProps {
  data?: DeviceInsertInput
  submitForm?: FnSubmitDevice
}

export const DeviceForm = ({
  isEdit,
  data,
  submitForm = () => Promise.resolve(),
}: DeviceFormProps) => {
  const { userInfo } = useAuth()

  const dataWithId = useMemo(() => {
    if (isEdit) {
      return initialDeviceFormData(data)
    }
    return initialDeviceFormData({
      createrId: userInfo.id,
    })
  }, [data, isEdit, userInfo.id])

  return (
    <Formik initialValues={dataWithId} onSubmit={submitForm}>
      {({ submitForm, isSubmitting }) => (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Field
              component={TextField}
              name="equipmentRequester"
              label="委托单位"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Field
              component={TextField}
              name="equipmentName"
              label="设备名称"
              type="text"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              component={LocationSelectorFormik}
              name="address"
              label="检测地址"
              fullWidth
              newLineForDetail={false}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Field
              component={TextField}
              name="equipmentSampleId"
              label="样品标识"
              type="text"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Field
              component={TextField}
              name="equipmentModel"
              label="设备型号"
              type="text"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Field
              component={TextField}
              name="equipmentCode"
              label="设备编号"
              type="text"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Field
              component={TextField}
              name="equipmentManufacturer"
              label="制造厂商"
              type="text"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Field
              component={TextField}
              name="equipmentSite"
              label="设备场所"
              type="text"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Field
              component={TextField}
              name="inspectionInstrument"
              label="检测仪器"
              type="text"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="space-between">
            <Box display="flex" justifyContent="flex-start"></Box>
            <Box display="flex" justifyContent="flex-end">
              <LoadingButton
                type="button"
                variant="contained"
                loading={isSubmitting}
                onClick={submitForm}
              >
                {!isEdit ? '新增设备' : '保存更改'}
              </LoadingButton>
            </Box>
          </Grid>
        </Grid>
      )}
    </Formik>
  )
}
