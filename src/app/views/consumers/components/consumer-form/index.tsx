import { LoadingButton } from '@mui/lab'
import { Box, Unstable_Grid2 as Grid } from '@mui/material'
import { FormApi, SubmissionErrors } from 'final-form'
import { TextField } from 'mui-rff'
import { useMemo } from 'react'
import { Field, Form } from 'react-final-form'

import { DomainFormProps } from '@/modules/form'

import { Loading } from 'd/components/loading-screen'

import {
  ConsumerFormData,
  ConsumerFormValidation,
  initialClientsFormData,
} from './utils'

import { LocationSelectorElement } from '@@/location-selector'
import i18n from 'strings/i18n'


export type FnSubmitClient = (
  values: ConsumerFormData,
  form: FormApi<ConsumerFormData>,
  callback?: (errors?: SubmissionErrors) => void
) => Promise<void>

interface ConsumerFormProps extends DomainFormProps {
  data?: ConsumerFormData
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

  return isEdit && !data ? (
    <Loading />
  ) : (
    <Form<ConsumerFormData>
      validate={ConsumerFormValidation}
      initialValues={initialValue}
      onSubmit={submitForm}
    >
      {({ pristine, submitting, handleSubmit }) => (
        <Grid container spacing={3}>
          <Grid xs={12} md={6}>
            <TextField name="name" label={i18n.t('单位名称')} fullWidth required />
          </Grid>
          <Grid xs={12}>
            <Field
              name="address"
              newLineForDetail={false}
              component={LocationSelectorElement}
              sx={{ display: 'flex' }}
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
                disabled={submitting || pristine || isLoading}
                loading={submitting}
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
