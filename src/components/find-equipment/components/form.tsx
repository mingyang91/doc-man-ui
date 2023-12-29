import { LoadingButton } from '@mui/lab'
import { Button, Stack, Unstable_Grid2 as Grid } from '@mui/material'
import { useMemoizedFn } from 'ahooks'
import { FormApi, SubmissionErrors } from 'final-form'
import { TextField } from 'mui-rff'
import { useMemo } from 'react'
import { Field, Form } from 'react-final-form'
import { MdSearch } from 'react-icons/md'

import { FindEquipmentQueryVariables } from 'm/equipment/index.generated'

import { FindEquipmentFormData, transformToVariables } from '../utils'

import { ConsumerSelectorElement } from '@@/consumer-selector'
import i18n from 'strings/i18n'

interface FindEquipmentFormProps {
  onChange: (value: FindEquipmentQueryVariables) => void
}

export const FindEquipmentForm = ({ onChange }: FindEquipmentFormProps) => {
  const initialValues = useMemo<FindEquipmentFormData>(
    () => ({
      clientId: '',
      equipmentName: '',
      equipmentCode: '',
      equipmentModel: '',
      addressDetail: '',
    }),
    []
  )

  const onSubmit = useMemoizedFn<
    (
      values: FindEquipmentFormData,
      form: FormApi<FindEquipmentFormData>,
      callback?: (errors?: SubmissionErrors) => void
    ) => SubmissionErrors | Promise<SubmissionErrors> | void
  >(values => {
    onChange?.(transformToVariables(values))
  })

  return (
    <Form<FindEquipmentFormData>
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ submitting, handleSubmit, form }) => (
        <Grid container spacing={1} rowSpacing={1}>
          <Grid xs={12} md={6}>
            <Field
              component={ConsumerSelectorElement}
              name="client"
              label={i18n.t('委托单位')}
              fullWidth
            />
          </Grid>
          <Grid xs={6} md={6}>
            <TextField name="equipmentName" label={i18n.t('设备名称')} fullWidth />
          </Grid>
          <Grid xs={6} md={6}>
            <TextField name="equipmentCode" label={i18n.t('设备编号')} fullWidth />
          </Grid>
          <Grid xs={6} md={6}>
            <TextField name="equipmentModel" label={i18n.t('设备型号')} fullWidth />
          </Grid>
          <Grid xs={12}>
            <Stack
              direction="row"
              justifyItems="stretch"
              justifyContent="flex-end"
              spacing={1}
            >
              <LoadingButton
                startIcon={<MdSearch />}
                type="button"
                variant="contained"
                color="primary"
                loading={submitting}
                onClick={handleSubmit}
              >
                {i18n.t('搜索')}
              </LoadingButton>
              <Button
                type="button"
                variant="contained"
                color="inherit"
                onClick={() => form.reset()}
              >
                {i18n.t('重置')}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      )}
    </Form>
  )
}
