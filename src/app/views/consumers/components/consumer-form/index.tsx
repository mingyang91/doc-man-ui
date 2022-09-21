import { LoadingButton } from '@mui/lab'
import { Box, Grid } from '@mui/material'
import { Field, Formik, FormikHelpers } from 'formik'
import { TextField } from 'formik-mui'
import { useMemo } from 'react'
import * as Yup from 'yup'

import { DomainFormProps } from '@/modules/form'

import { ClientsInsertInput } from 'm/types'

import { initialClientsFormData } from './utils'

import { LocationSelectorFormik } from '@@/location-selector'
import { validateSchema } from '@@/location-selector/utils'

const ConsumerFormSchema = Yup.object().shape({
  name: Yup.string().required('必填').trim('请勿输入空格'),
  address: validateSchema,
  comment: Yup.string().max(500, '最多500个字符'),
})

export type FnSubmitClient = (
  values: ClientsInsertInput,
  helper: FormikHelpers<ClientsInsertInput>
) => Promise<void>

interface ConsumerFormProps extends DomainFormProps {
  data?: ClientsInsertInput
  submitForm?: FnSubmitClient
}

export const ConsumerForm = ({
  isLoading,
  isEdit,
  data,
  submitForm = () => Promise.resolve(),
}: ConsumerFormProps) => {
  const initialValue = useMemo(() => {
    return initialClientsFormData(data)
  }, [data])

  return (
    <Formik
      validationSchema={ConsumerFormSchema}
      isSubmitting={isLoading}
      initialValues={initialValue}
      onSubmit={submitForm}
    >
      {({ submitForm, resetForm, isSubmitting, dirty }) => (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Field
              component={TextField}
              name="name"
              label="单位名称"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              component={LocationSelectorFormik}
              newLineForDetail={false}
              name="address"
              label="检测地址"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              component={TextField}
              name="comment"
              label="备注"
              type="text"
              fullWidth
              multiline
              minRows={2}
              maxRows={8}
            />
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="space-between">
            <Box display="flex" justifyContent="flex-start"></Box>
            <Box display="flex" justifyContent="flex-end">
              <LoadingButton
                type="button"
                variant="contained"
                disabled={isSubmitting || !dirty}
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
