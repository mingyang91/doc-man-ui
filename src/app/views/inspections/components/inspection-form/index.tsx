import { LoadingButton } from '@mui/lab'
import { Grid, Stack, Typography } from '@mui/material'
import { Formik, FormikHelpers } from 'formik'
import { useMemo } from 'react'

import { DomainFormProps } from '@/modules/form'
import { useAuth } from '@/providers/auth'

import { InspectionReportInsertInput } from 'm/types'

import { BaseFields } from './components/base-fields'
import { initialInspectionFormData } from './utils'


export type FnSubmitInspectionReport = (
  values: InspectionReportInsertInput,
  helper: FormikHelpers<InspectionReportInsertInput>
) => Promise<void>

interface InspectionFormProps extends DomainFormProps {
  data?: InspectionReportInsertInput
  submitForm?: FnSubmitInspectionReport
}

export const InspectionForm = ({
  isEdit,
  data,
  submitForm = () => Promise.resolve(),
}: InspectionFormProps) => {
  const { userInfo } = useAuth()

  const dataWithId = useMemo(() => {
    if (isEdit) {
      return initialInspectionFormData(data)
    }
    return initialInspectionFormData({
      creatorId: userInfo.id,
    })
  }, [data, isEdit, userInfo.id])

  return (
    <Formik initialValues={dataWithId} onSubmit={submitForm}>
      {({ submitForm, isSubmitting }) => (
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Stack direction="column" spacing={3} alignItems="stretch">
              <Typography variant="h5">基本信息</Typography>
              <BaseFields />
            </Stack>
            <Stack alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton
                type="button"
                variant="contained"
                loading={isSubmitting}
                onClick={submitForm}
              >
                {!isEdit ? '提交报告' : '保存更改'}
              </LoadingButton>
            </Stack>
          </Grid>
        </Grid>
      )}
    </Formik>
  )
}
